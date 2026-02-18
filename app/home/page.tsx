"use client";

import NavBar from "@/components/NavBar";
import Particles from "@/components/Particles";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="relative bg-neutral-950">
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
        <div className="flex flex-col mt-1 items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Welcome Home</h1>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col mt-20 space-y-4 items-center md:flex-row md:mt-40 md:space-y-0 md:space-x-16">
              <Card
                title="Learn About Me"
                description="Discover my background, experience, and passion for development. 
                             Learn about my journey and what drives me."
                mobileSize="card-xs"
                desktopSize="card-lg"
                bgColor="bg-purple-700"
                actions={
                  <a href="/about">
                    <button className="btn btn-xs md:btn-md btn-neutral">Learn More</button>
                  </a>
                }
              />
              <Card
                title="View My Projects"
                description="Explore my portfolio of web applications, tools, and creative 
                             solutions that showcase my technical skills."
                mobileSize="card-xs"
                desktopSize="card-lg"
                bgColor="bg-blue-700"
                actions={
                  <a href="/projects">
                    <button className="btn btn-xs md:btn-md btn-neutral">Learn More</button>
                  </a>
                 }
              />
            </div>
            <div className="flex flex-col mt-4 space-y-4 items-center md:flex-row md:mt-40 md:space-y-0 md:space-x-16">
              <Card
                title="How To Contact Me"
                description="Get in touch for collaborations, opportunities, or just to say hello. 
                             Multiple ways to connect."
                mobileSize="card-xs"
                desktopSize="card-lg"
                bgColor="bg-green-700"
                actions={
                  <a href="/contact">
                    <button className="btn btn-xs md:btn-md btn-neutral">Learn More</button>
                  </a>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
