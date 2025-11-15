'use client';

import { ImageWithFallback } from '@/components/figma/ImageWithFallback';

interface CameraMarker {
  id: string;
  x: number; // percentage
  y: number; // percentage
  angle: number; // degrees
  hasFieldOfView: boolean;
  isActive: boolean;
}

const cameras: CameraMarker[] = [
  { id: 'CAM-01', x: 40, y: 35, angle: 45, hasFieldOfView: true, isActive: true },
  { id: 'CAM-02', x: 25, y: 20, angle: 135, hasFieldOfView: true, isActive: true },
  { id: 'CAM-03', x: 60, y: 50, angle: 0, hasFieldOfView: false, isActive: true },
  { id: 'CAM-04', x: 50, y: 70, angle: 0, hasFieldOfView: true, isActive: true },
  { id: 'CAM-05', x: 70, y: 60, angle: 225, hasFieldOfView: true, isActive: true },
];

export function BattlefieldMap() {
  return (
    <div className="w-full h-full relative bg-[#2a2d2e] overflow-hidden">
      {/* Map Image */}
      <ImageWithFallback
        src="/Download.png"
        alt="Satellite Map"
        className="w-full h-full object-cover"
      />
      
      {/* Camera Markers - Using absolute positioning */}
      {cameras.map((camera) => {
        return (
          <div
            key={camera.id}
            className="absolute pointer-events-none"
            style={{
              left: `${camera.x}%`,
              top: `${camera.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {/* Camera triangle with FOV cone */}
            <svg
              width="200"
              height="200"
              viewBox="-100 -100 200 200"
              className="absolute"
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <g transform={`rotate(${camera.angle})`}>
                 {/* Field of view cone - simple triangle overlapping from camera triangle */}
                 {camera.hasFieldOfView && (
                   <>
                     {/* Filled triangle */}
                     <polygon
                       points="0,-10 -55,150 55,150"
                       fill="#22c55e"
                       fillOpacity="0.4"
                     />
                     {/* Border outline - rendered on top */}
                     <polygon
                       points="0,10 -40,80 40,80"
                       fill="none"
                       stroke="#22c55e"
                       strokeWidth="2.5"
                       strokeOpacity="1"
                       vectorEffect="non-scaling-stroke"
                     />
                   </>
                 )}
                
                {/* Camera triangle */}
                <polygon
                  points="0,-14 -12,10 12,10"
                  fill={camera.isActive ? "#dc2626" : "#9ca3af"}
                  stroke={camera.isActive ? "#ffffff" : "#6b7280"}
                  strokeWidth="2"
                />
                
                {/* Green circle at top vertex (apex) for active cameras */}
                {camera.isActive && camera.id !== 'CAM-03' && (
                  <circle
                    cx="0"
                    cy="-14"
                    r="4"
                    fill="#22c55e"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                )}
              </g>
            </svg>
            
            {/* Camera Label - positioned below the triangle */}
            <div
              className="absolute text-white text-xs font-bold whitespace-nowrap bg-black/70 px-2 py-0.5 rounded z-10"
              style={{
                left: '50%',
                top: '20px',
                transform: 'translateX(-50%)',
                textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
              }}
            >
              {camera.id}
            </div>
          </div>
        );
      })}
    </div>
  );
}

