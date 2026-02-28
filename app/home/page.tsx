"use client";

import NavBar from "@/components/NavBar";
import Particles from "@/components/Particles";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-neutral-950">
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
      <div className="relative z-10 flex min-h-screen flex-col">
        <NavBar />
        <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pb-16 pt-8 md:px-6 md:pt-14">
          <section className="hero rounded-box border border-base-300 bg-base-100/80 shadow-xl backdrop-blur">
            <div className="hero-content text-center py-10 md:py-14">
              <div className="max-w-2xl">
                <div className="badge badge-primary badge-outline mb-4">Portfolio Hub</div>
                <h1 className="text-4xl font-bold text-base-content md:text-5xl">Build. Learn. Connect.</h1>
                <p className="py-4 text-base-content/80">
                  Explore who I am, what I build, and how we can work together through a clean interactive experience.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <a href="/projects" className="btn btn-primary">See Projects</a>
                  <a href="/contact" className="btn btn-outline">Get in Touch</a>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-8 rounded-box border border-base-300 bg-base-100/80 p-4 shadow-xl backdrop-blur md:p-8">
            <h2 className="mb-5 text-center text-xl font-semibold text-base-content md:text-2xl">Explore Sections</h2>

            <div className="carousel w-full rounded-box">
              <div id="slide1" className="carousel-item relative w-full justify-center py-8 md:py-12">
                <Card
                  title="Learn About Me"
                  description="Discover my background, experience, and passion for development.
                             Learn about my journey and what drives me."
                  mobileSize="card-xs"
                  desktopSize="card-lg"
                  bgColor="bg-purple-700"
                  actions={
                    <a href="/about" className="btn btn-xs md:btn-md btn-neutral">Learn More</a>
                  }
                />
                <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between md:left-6 md:right-6">
                  <a href="#slide3" className="btn btn-circle btn-sm md:btn-md">❮</a>
                  <a href="#slide2" className="btn btn-circle btn-sm md:btn-md">❯</a>
                </div>
              </div>

              <div id="slide2" className="carousel-item relative w-full justify-center py-8 md:py-12">
                <Card
                  title="View My Projects"
                  description="Explore my portfolio of web applications, tools, and creative
                             solutions that showcase my technical skills."
                  mobileSize="card-xs"
                  desktopSize="card-lg"
                  bgColor="bg-blue-700"
                  actions={
                    <a href="/projects" className="btn btn-xs md:btn-md btn-neutral">Learn More</a>
                  }
                />
                <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between md:left-6 md:right-6">
                  <a href="#slide1" className="btn btn-circle btn-sm md:btn-md">❮</a>
                  <a href="#slide3" className="btn btn-circle btn-sm md:btn-md">❯</a>
                </div>
              </div>

              <div id="slide3" className="carousel-item relative w-full justify-center py-8 md:py-12">
                <Card
                  title="How To Contact Me"
                  description="Get in touch for collaborations, opportunities, or just to say hello.
                             Multiple ways to connect."
                  mobileSize="card-xs"
                  desktopSize="card-lg"
                  bgColor="bg-green-700"
                  actions={
                    <a href="/contact" className="btn btn-xs md:btn-md btn-neutral">Learn More</a>
                  }
                />
                <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between md:left-6 md:right-6">
                  <a href="#slide2" className="btn btn-circle btn-sm md:btn-md">❮</a>
                  <a href="#slide1" className="btn btn-circle btn-sm md:btn-md">❯</a>
                </div>
              </div>
            </div>

            <div className="mt-5 flex justify-center gap-2">
              <a href="#slide1" className="btn btn-xs">1</a>
              <a href="#slide2" className="btn btn-xs">2</a>
              <a href="#slide3" className="btn btn-xs">3</a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
