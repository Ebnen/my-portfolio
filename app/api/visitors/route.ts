import { type NextRequest, NextResponse } from "next/server"

// Simple in-memory storage (in production, use a database)
let visitorCount = 0
const dailyVisitors = new Map<string, number>()
const uniqueVisitors = new Set<string>()

// Reset daily count at midnight
function resetDailyCount() {
  const today = new Date().toDateString()
  if (!dailyVisitors.has(today)) {
    dailyVisitors.clear()
    dailyVisitors.set(today, 0)
  }
}

export async function GET(request: NextRequest) {
  try {
    resetDailyCount()

    const today = new Date().toDateString()
    const currentDailyCount = dailyVisitors.get(today) || 0

    return NextResponse.json({
      totalVisitors: visitorCount,
      dailyVisitors: currentDailyCount,
      uniqueVisitors: uniqueVisitors.size,
      lastUpdated: new Date().toISOString(),
    })
  } catch (error) {
    return NextResponse.json({ error: "Failed to get visitor count" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { userAgent, ip } = await request.json()

    // Create a simple hash for unique visitor identification
    const visitorHash = `${ip}-${userAgent}`.replace(/[^a-zA-Z0-9]/g, "").substring(0, 20)

    resetDailyCount()

    const today = new Date().toDateString()

    // Increment total visitors
    visitorCount++

    // Increment daily visitors
    const currentDailyCount = dailyVisitors.get(today) || 0
    dailyVisitors.set(today, currentDailyCount + 1)

    // Track unique visitors
    uniqueVisitors.add(visitorHash)

    return NextResponse.json({
      success: true,
      totalVisitors: visitorCount,
      dailyVisitors: dailyVisitors.get(today),
      uniqueVisitors: uniqueVisitors.size,
      isNewVisitor: !uniqueVisitors.has(visitorHash),
    })
  } catch (error) {
    return NextResponse.json({ error: "Failed to track visitor" }, { status: 500 })
  }
}
