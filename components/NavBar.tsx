"use client";
export default function NavBar() {
  return (
    <div className="navbar bg-black shadow-sm z-20">
      <div className="flex-1">
        <a className="btn btn-ghost text-xs md:text-2xl" href="/home">
          Homero Arellano
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="text-xs md:text-lg" href="/">Landing Page</a>
          </li>
          <li>
            <a className="text-xs md:text-lg" href="/home">Home</a>
          </li>
          <li>
            <details>
              <summary className="text-xs md:text-lg">Pages</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a className="text-xs md:text-lg" href="/about">About</a>
                </li>
                <li>
                  <a className="text-xs md:text-lg" href="/projects">Projects</a>
                </li>
                <li>
                  <a className="text-xs md:text-lg" href="/contact">Contact</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
