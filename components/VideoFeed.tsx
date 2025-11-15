'use client';

import { useEffect, useState } from 'react';

export function VideoFeed() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full w-full relative bg-black overflow-hidden rounded-b-lg">
      {/* Video Display */}
      <div className="absolute inset-0 rounded-b-lg">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}></div>
        
        {/* Crosshair */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 relative">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-white"></div>
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-white rounded-full"></div>
          </div>
        </div>
        
        {/* Overlaid Text - Top Left */}
        <div className="absolute top-3 left-3 text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-semibold">LIVE FEED</span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              <span className="text-xs text-red-500 font-normal">REC</span>
            </span>
          </div>
          <div className="text-xs text-gray-300">
            <div>CAM-01</div>
            <div className="font-mono">{currentTime}</div>
          </div>
        </div>
        
        {/* Overlaid Text - Bottom Left */}
        <div className="absolute bottom-3 left-3 text-white">
          <div className="text-xs text-gray-300 space-y-1 bg-black/50 px-2 py-1 rounded">
            <div>AZ: 045° | EL: +12°</div>
            <div>ZOOM: 2.4x</div>
          </div>
        </div>
      </div>
    </div>
  );
}

