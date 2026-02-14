"use client";

import NavBar from "@/components/NavBar";
import Particles from "@/components/Particles";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-neutral-950">
      <div className="fixed inset-0 z-0">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>
      <div className="relative z-10 flex flex-col">
        <NavBar />
        <div className="flex flex-1 items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Welcome Home</h1>
        </div>
      </div>
    </div>
  );
}
