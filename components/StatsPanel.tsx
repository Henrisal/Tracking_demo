import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function StatsPanel() {
  return (
    <Card className="bg-[#1f2122] border-[#3a3d3e] text-white">
      <CardHeader className="pb-3">
        <CardTitle className="text-base">SYSTEM STATUS</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-1">
          <div className="text-xs text-gray-400">Active Cameras</div>
          <div className="text-lg font-semibold">4/5</div>
        </div>
        
        <div className="space-y-1">
          <div className="text-xs text-gray-400">Detection Events</div>
          <div className="text-lg font-semibold">127</div>
        </div>
        
        <div className="space-y-1">
          <div className="text-xs text-gray-400">Alert Level</div>
          <div className="text-lg font-semibold text-orange-500">MODERATE</div>
        </div>
        
        <div className="space-y-1">
          <div className="text-xs text-gray-400">System Uptime</div>
          <div className="text-lg font-semibold">72h 14m</div>
        </div>
        
        <div className="space-y-1 pt-2 border-t border-[#3a3d3e]">
          <div className="text-xs text-gray-400">BANDWIDTH USAGE</div>
          <div className="text-sm text-gray-300">Loading...</div>
        </div>
      </CardContent>
    </Card>
  );
}

