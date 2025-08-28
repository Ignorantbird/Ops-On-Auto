import React, { useState } from 'react';
import Logo3D from './Logo3D'; // Import your existing Logo3D component

interface OpsOnAutoIntegratedLogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
  gearColor?: string;
  textColor?: string;
}

const OpsOnAutoIntegratedLogo: React.FC<OpsOnAutoIntegratedLogoProps> = ({ 
  size = 64, 
  showText = true,
  className = "",
  gearColor = "#17a2b8",
  textColor = "#0f6674"
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Calculate responsive sizing
  const gearSize = size;
  const fontSize = size * 0.4;
  
  return (
    <div 
      className={`flex items-center ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Your existing 3D Gear as the first 'O' */}
      <div 
        className="relative transition-all duration-300"
        style={{
          width: `${gearSize}px`,
          height: `${gearSize}px`,
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        }}
      >
        <Logo3D 
          width={gearSize} 
          height={gearSize} 
          gearColor={gearColor}
          accentColor="#ff6b35"
        />
      </div>
      
      {/* Rest of the text "psOnAuto" */}
      {showText && (
        <div 
          className="font-bold transition-all duration-300 select-none hidden sm:block"
          style={{ 
            fontSize: `${fontSize}px`,
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
            textShadow: `0 ${size * 0.02}px ${size * 0.04}px rgba(0, 0, 0, 0.1)`,
            color: textColor,
            lineHeight: '1',
            marginLeft: `${-size * 0.1}px`, // Slight negative margin for better visual connection
            letterSpacing: '0.5px',
            transform: isHovered ? 'translateX(2px)' : 'translateX(0px)',
          }}
        >
          psOnAuto
        </div>
      )}
    </div>
  );
};

// Fallback component for environments without 3D support
const OpsOnAutoFallbackLogo: React.FC<OpsOnAutoIntegratedLogoProps> = ({ 
  size = 64, 
  showText = true,
  className = "",
  gearColor = "#17a2b8",
  textColor = "#0f6674"
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const fontSize = size * 0.4;
  
  return (
    <div 
      className={`flex items-center ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 2D Gear Icon as fallback - simulating your existing gear style */}
      <div 
        className="relative transition-all duration-300"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          transform: isHovered ? 'scale(1.05) rotate(10deg)' : 'scale(1) rotate(0deg)',
        }}
      >
        {/* Outer gear ring */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: `${size * 0.9}px`,
            height: `${size * 0.9}px`,
            background: `linear-gradient(145deg, ${gearColor} 0%, #138496 100%)`,
            boxShadow: `0 ${size * 0.1}px ${size * 0.2}px rgba(23, 162, 184, 0.3)`
          }}
        >
          {/* Inner circle */}
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: `${size * 0.4}px`,
              height: `${size * 0.4}px`,
              background: `linear-gradient(145deg, #4169E1 0%, #1E3A8A 100%)`,
            }}
          >
            {/* Play button triangle */}
            <div
              className="absolute top-1/2 left-1/2 transform -translate-y-1/2"
              style={{
                marginLeft: `${size * 0.02}px`,
                width: 0,
                height: 0,
                borderLeft: `${size * 0.08}px solid #FF6B35`,
                borderTop: `${size * 0.05}px solid transparent`,
                borderBottom: `${size * 0.05}px solid transparent`,
              }}
            />
          </div>
          
          {/* Gear teeth simulation */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-current rounded-sm"
              style={{
                width: `${size * 0.15}px`,
                height: `${size * 0.08}px`,
                top: '50%',
                left: '50%',
                transformOrigin: `${-size * 0.075}px 0`,
                transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(${-size * 0.35}px)`,
                color: gearColor
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Rest of the text */}
      {showText && (
        <div 
          className="font-bold transition-all duration-300 select-none hidden sm:block"
          style={{ 
            fontSize: `${fontSize}px`,
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
            textShadow: `0 ${size * 0.02}px ${size * 0.04}px rgba(0, 0, 0, 0.1)`,
            color: textColor,
            lineHeight: '1',
            marginLeft: `${-size * 0.05}px`,
            letterSpacing: '0.5px',
            transform: isHovered ? 'translateX(2px)' : 'translateX(0px)',
          }}
        >
          psOnAuto
        </div>
      )}
    </div>
  );
};

// Main export with error boundary
const OpsOnAutoLogo: React.FC<OpsOnAutoIntegratedLogoProps> = (props) => {
  try {
    return <OpsOnAutoIntegratedLogo {...props} />;
  } catch (error) {
    console.warn('3D logo failed, falling back to 2D version:', error);
    return <OpsOnAutoFallbackLogo {...props} />;
  }
};

export default OpsOnAutoLogo;
export { OpsOnAutoIntegratedLogo, OpsOnAutoFallbackLogo };