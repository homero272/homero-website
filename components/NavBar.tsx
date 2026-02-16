"use client";

import { useState } from "react";

export default function NavBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="navbar bg-black shadow-sm z-20">
      <div className="flex-1">
        <button
          className="btn btn-sm md:btn-md btn-ghost normal-case text-sm md:text-lg"
          onClick={openModal}
        >
          Homero Arellano
        </button>
        {isModalOpen ? (
          <dialog
            className="modal modal-bottom sm:modal-middle"
            open
            onClose={closeModal}
          >
            <div className="modal-box flex justify-center">
              <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="px-10 pt-10">
                  <img
                    src="/images/profile_headshot.jpeg"
                    alt="Profile Headshot"
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Hello!</h2>
                  <p>
                    Thank you for visiting my portfolio! I'm a passionate
                    software developer with a love for creating innovative
                    solutions. Feel free to explore my projects and get in touch
                    if you'd like to collaborate or learn more about my work.
                  </p>
                  <div className="card-actions">
                    <button className="btn btn-info" onClick={closeModal}>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </dialog>
        ) : null}
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="text-xs md:text-lg" href="/">
              Landing Page
            </a>
          </li>
          <li>
            <a className="text-xs md:text-lg" href="/home">
              Home
            </a>
          </li>
          <li>
            <details>
              <summary className="text-xs md:text-lg">Pages</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a className="text-xs md:text-lg" href="/about">
                    About
                  </a>
                </li>
                <li>
                  <a className="text-xs md:text-lg" href="/projects">
                    Projects
                  </a>
                </li>
                <li>
                  <a className="text-xs md:text-lg" href="/contact">
                    Contact
                  </a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
