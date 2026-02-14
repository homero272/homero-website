"use client";

import Link from "next/link";
import LiquidEther from "@/components/LiquidEther";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const [loading, setloading] = useState(false);
  const router = useRouter();
  const continueHandler = (btn: React.MouseEvent<HTMLButtonElement>) => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
      router.push("/home");
    }, 2000);
  };
  return (
    <div className="relative overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <LiquidEther
            colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
            mouseForce={20}
            cursorSize={100}
            isViscous
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>
      </div>
      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-start gap-8 px-6 pt-10 md:pt-14">
        <h1 className="whitespace-nowrap text-2xl md:whitespace-nowrap md:text-4xl font-semibold text-white text-center">
          Welcome to Homero's {""}
          <span className="inline-flex items-center gap-2 text-rotate">
            <span>
              <span className="bg-teal-400 text-teal-800 px-2">Website</span>
              <span className="bg-red-400 text-red-800 px-2">Portfolio</span>
              <span className="bg-blue-400 text-blue-800 px-2">Story</span>
            </span>
          </span>
        </h1>
        <div className="mockup-code typewriter w-full max-w-3xl min-h-[25vh] py-8 text-base leading-relaxed md:text-xl mt-50">
          <pre data-prefix="$">
            <code>npm i homero-website</code>
          </pre>
          <pre data-prefix=">" className="text-warning">
            <code>installing...</code>
          </pre>
          <pre data-prefix=">" className="text-success">
            <code>Done!</code>
          </pre>
        </div>
        {!loading ? (
          <button className="btn btn-success" onClick={continueHandler}>
            Continue
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        ) : (
          <button className="btn">
            <span className="loading loading-spinner"></span>
            getting things ready...
          </button>
        )}
      </main>
    </div>
  );
}
