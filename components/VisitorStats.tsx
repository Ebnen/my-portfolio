"use client"

import { useVisitorTracking } from "@/hooks/useVisitorTracking"
import { Users, Eye, Calendar, Clock } from "lucide-react"

export function VisitorStats() {
  const { totalVisitors, dailyVisitors, uniqueVisitors, loading, error } = useVisitorTracking()

  if (loading) {
    return (
      <div className="hero-stats mb-8 animate-fadeInUp delay-900">
        <div className="glass-card rounded-lg px-4 py-2 text-center">
          <div className="text-lg font-bold text-[#FF6B35]">Loading...</div>
          <div className="text-xs text-white text-shadow">Visitor Stats</div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="hero-stats mb-8 animate-fadeInUp delay-900">
        <div className="glass-card rounded-lg px-4 py-2 text-center">
          <div className="text-lg font-bold text-red-400">Error</div>
          <div className="text-xs text-white text-shadow">Unable to load stats</div>
        </div>
      </div>
    )
  }

  return (
    <div className="hero-stats mb-8 animate-fadeInUp delay-900">
      <div className="glass-card rounded-lg px-4 py-2 text-center">
        <div className="flex items-center justify-center gap-1 mb-1">
          <Calendar className="h-4 w-4 text-[#FF6B35]" />
          <div className="text-lg font-bold text-[#FF6B35]">
            {new Date().toLocaleDateString("en-US", {
              weekday: "short",
              month: "short",
              day: "numeric",
            })}
          </div>
        </div>
        <div className="text-xs text-white text-shadow">Today's Date</div>
      </div>

      <div className="glass-card rounded-lg px-4 py-2 text-center">
        <div className="flex items-center justify-center gap-1 mb-1">
          <Clock className="h-4 w-4 text-[#FF6B35]" />
          <div className="text-lg font-bold text-[#FF6B35]">
            {new Date().toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>
        <div className="text-xs text-white text-shadow">Current Time</div>
      </div>

      <div className="glass-card rounded-lg px-4 py-2 text-center">
        <div className="flex items-center justify-center gap-1 mb-1">
          <Eye className="h-4 w-4 text-[#FF6B35]" />
          <div className="text-lg font-bold text-[#FF6B35]">{totalVisitors}</div>
        </div>
        <div className="text-xs text-white text-shadow">Total Visits</div>
      </div>

      <div className="glass-card rounded-lg px-4 py-2 text-center">
        <div className="flex items-center justify-center gap-1 mb-1">
          <Calendar className="h-4 w-4 text-[#FF6B35]" />
          <div className="text-lg font-bold text-[#FF6B35]">{dailyVisitors}</div>
        </div>
        <div className="text-xs text-white text-shadow">Today's Visits</div>
      </div>

      <div className="glass-card rounded-lg px-4 py-2 text-center">
        <div className="flex items-center justify-center gap-1 mb-1">
          <Users className="h-4 w-4 text-[#FF6B35]" />
          <div className="text-lg font-bold text-[#FF6B35]">{uniqueVisitors}</div>
        </div>
        <div className="text-xs text-white text-shadow">Unique Visitors</div>
      </div>
    </div>
  )
}
