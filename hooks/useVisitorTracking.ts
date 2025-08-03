"use client"

import { useState, useEffect } from "react"

interface VisitorStats {
  totalVisitors: number
  dailyVisitors: number
  uniqueVisitors: number
  lastUpdated: string
  loading: boolean
  error: string | null
}

export function useVisitorTracking() {
  const [stats, setStats] = useState<VisitorStats>({
    totalVisitors: 0,
    dailyVisitors: 0,
    uniqueVisitors: 0,
    lastUpdated: "",
    loading: true,
    error: null,
  })

  useEffect(() => {
    let mounted = true

    const trackVisitor = async () => {
      try {
        // Get user's IP and user agent for tracking
        const userAgent = navigator.userAgent
        const ipResponse = await fetch("https://api.ipify.org?format=json")
        const { ip } = await ipResponse.json()

        // Track the visit
        const trackResponse = await fetch("/api/visitors", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userAgent, ip }),
        })

        if (!trackResponse.ok) {
          throw new Error("Failed to track visitor")
        }

        const data = await trackResponse.json()

        if (mounted) {
          setStats({
            totalVisitors: data.totalVisitors,
            dailyVisitors: data.dailyVisitors,
            uniqueVisitors: data.uniqueVisitors,
            lastUpdated: new Date().toISOString(),
            loading: false,
            error: null,
          })
        }
      } catch (error) {
        console.error("Error tracking visitor:", error)
        if (mounted) {
          setStats((prev) => ({
            ...prev,
            loading: false,
            error: "Failed to load visitor stats",
          }))
        }
      }
    }

    const getVisitorStats = async () => {
      try {
        const response = await fetch("/api/visitors")
        if (!response.ok) {
          throw new Error("Failed to get visitor stats")
        }

        const data = await response.json()

        if (mounted) {
          setStats({
            totalVisitors: data.totalVisitors,
            dailyVisitors: data.dailyVisitors,
            uniqueVisitors: data.uniqueVisitors,
            lastUpdated: data.lastUpdated,
            loading: false,
            error: null,
          })
        }
      } catch (error) {
        console.error("Error getting visitor stats:", error)
        if (mounted) {
          setStats((prev) => ({
            ...prev,
            loading: false,
            error: "Failed to load visitor stats",
          }))
        }
      }
    }

    // Track visitor on first load
    trackVisitor()

    // Set up periodic updates every 30 seconds
    const interval = setInterval(getVisitorStats, 30000)

    return () => {
      mounted = false
      clearInterval(interval)
    }
  }, [])

  return stats
}
