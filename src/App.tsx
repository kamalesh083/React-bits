import TargetCursor from "./ui/TargetCursor";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Prism from "./ui/Prism";
import About from "./components/About";
import Crosshair from "./components/Crosshair";
import { useRef } from "react";

function App() {
  const containerRef = useRef(null);
  return (
    <>
      <div className="fixed inset-0 -z-10 pointer-events-none bg-black">
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5}
          scale={4}
          hueShift={0}
          colorFrequency={1}
          noise={0.1}
          glow={0.5}
        />
      </div>
      <div className="fixed inset-0 z-[9999] pointer-events-none">
        <Crosshair containerRef={containerRef} color="#ffffff" />
      </div>

      <div className="min-h-max w-full flex flex-col items-center p-6 text-white">
        <Navbar />
        <Hero />
        <About />

        <TargetCursor
          spinDuration={2}
          hideDefaultCursor={true}
          parallaxOn={true}
        />
      </div>
    </>
  );
}

export default App;
