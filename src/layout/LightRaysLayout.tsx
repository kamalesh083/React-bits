import React from "react";
import LightRays from "../ui/LightRays";

interface LayoutProps {
  children: React.ReactNode;
}

const LightRaysLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen text-white bg-black overflow-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>
      {children}
    </div>
  );
};

export default LightRaysLayout;
