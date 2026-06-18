import React from "react";

interface DrainCoLogoProps {
  className?: string;
  variant?: "full" | "icon";
}

export function DrainCoLogo({ className = "h-12", variant = "full" }: DrainCoLogoProps) {
  if (variant === "icon") {
    return (
      <svg
        className={className}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="drainco-logo-icon"
      >
        {/* Solid Red Square Background - matches branding exact hex #E31B23 */}
        <rect width="100" height="100" rx="14" fill="#E31B23" />
        
        {/* Stylized plumbing dynamic U-bend with drop */}
        {/* Underline line sitting at y=64 */}
        <path
          d="M 18,64 L 42,64"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
        />
        
        {/* U Bend - loop dips down to y=81, thickness matches or slightly exceeds the underline */}
        <path
          d="M 42,64 C 42,80 58,80 58,64"
          stroke="white"
          strokeWidth="4.5"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Right Underline line starting from right side of U-bend */}
        <path
          d="M 58,64 L 82,64"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
        />
        
        {/* Drop of water represents the dot of stylized 'i-pipe' */}
        <path
          d="M 42,47 C 42,43 45,41 45,41 C 45,41 48,43 48,47 C 48,50 45,52 45,52 C 45,52 42,50 42,47 Z"
          fill="white"
        />

        {/* Big styled "D" in the center background */}
        <text
          x="50"
          y="54"
          textAnchor="middle"
          fill="white"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontWeight="900"
          fontSize="28"
          letterSpacing="-1"
        >
          D
        </text>
      </svg>
    );
  }

  // Full brand Logo: red square containing "DrainCo" with styled U-Trap pipeline
  return (
    <svg
      className={className}
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id="drainco-logo-full"
    >
      {/* Red container background with sleek premium rounded corners */}
      <rect width="240" height="240" rx="18" fill="#E31B23" />
      
      {/* Logo Typography using standard high-end weights */}
      <g transform="translate(10, -5)">
        {/* "Dra" - Bold Sans font */}
        <text
          x="22"
          y="136"
          fill="#FFFFFF"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontWeight="800"
          fontSize="42"
          letterSpacing="-1.5"
        >
          Dra
        </text>

        {/* Water Droplet (Dot of stylized 'i') */}
        <path
          d="M 103,101 C 103,96 107.5,93 107.5,93 C 107.5,93 112,96 112,101 C 112,105 107.5,108.5 107.5,108.5 C 107.5,108.5 103,105 103,101 Z"
          fill="#FFFFFF"
        />

        {/* Stem of the 'i' that loops down into the U-trap */}
        {/* Left segment, looping down */}
        <path
          d="M 107.5,116 L 107.5,136"
          stroke="#FFFFFF"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* U-Trap pipe bend */}
        <path
          d="M 107.5,136 C 107.5,162 136.5,162 136.5,136"
          stroke="#FFFFFF"
          strokeWidth="6.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Continuous Pipeline Underline connecting the elements */}
        {/* Left side, starting under capital D and stopping at 'i' stem */}
        <path
          d="M 23,148 L 107.5,148"
          stroke="#FFFFFF"
          strokeWidth="5"
          strokeLinecap="square"
        />

        {/* Right side, continuing to the end under Co */}
        <path
          d="M 136.5,148 L 198,148"
          stroke="#FFFFFF"
          strokeWidth="5"
          strokeLinecap="square"
        />

        {/* "n" - Lowcase */}
        <text
          x="142"
          y="136"
          fill="#FFFFFF"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontWeight="800"
          fontSize="42"
          letterSpacing="-1.5"
        >
          n
        </text>

        {/* "Co" - Capitalized C */}
        <text
          x="166"
          y="136"
          fill="#FFFFFF"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontWeight="800"
          fontSize="42"
          letterSpacing="-1.5"
        >
          Co
        </text>
      </g>
    </svg>
  );
}

export default DrainCoLogo;
