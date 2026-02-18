"use client";
import NavBar from "@/components/NavBar";
import LightPillar from "@/components/LightPillar";

export default function ContactPage() {
  return (
    <div className="relative">
      <div className="fixed inset-0 z-0">
        <LightPillar
          topColor="#5227FF"
          bottomColor="#FF9FFC"
          intensity={1}
          rotationSpeed={0.3}
          glowAmount={0.002}
          pillarWidth={3}
          pillarHeight={0.4}
          noiseIntensity={0.5}
          pillarRotation={25}
          interactive={false}
          mixBlendMode="screen"
          quality="high"
        />
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-screen flex-col items-center justify-center">
        <NavBar />
        <h1 className="mt-8 text-2xl font-bold md:text-4xl">Contact Me!</h1>
        <div className="mt-40 flex flex-row items-stretch space-x-4 md:space-x-80">
          <div className="hover-3d flex w-48 flex-col text-center md:w-64">
            {/* content */}
            <figure className="w-full rounded-2xl">
              <a
                href="https://github.com/homero272"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/github-logo.png"
                  alt="3D card"
                  className="h-28 w-full object-contain md:h-40"
                />
              </a>
            </figure>
            {/* 8 empty divs needed for the 3D effect */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <p className="mt-4 text-sm md:text-lg">GitHub</p>
          </div>
          <div className="hover-3d flex w-48 flex-col text-center md:w-64">
            {/* content */}
            <figure className="w-full rounded-2xl">
              <a
                href="https://www.linkedin.com/in/homeroarellano/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/linkedin-logo.png"
                  alt="3D card"
                  className="h-28 w-full object-contain md:h-40"
                />
              </a>
            </figure>
            {/* 8 empty divs needed for the 3D effect */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <p className="mt-4 text-sm md:text-lg">LinkedIn</p>
          </div>
        </div>
        <div className="mt-20 flex flex-row items-stretch space-x-4 md:space-x-80">
          <div className="hover-3d flex w-48 flex-col text-center md:w-64">
            {/* content */}
            <figure className="w-full rounded-2xl">
              <a
                href="mailto:homeroarellano272@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/gmail-logo.png"
                  alt="3D card"
                  className="h-28 w-full object-contain md:h-40"
                />
              </a>
            </figure>
            {/* 8 empty divs needed for the 3D effect */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <p className="mt-4 text-sm md:text-lg">
              Email
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
