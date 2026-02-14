"use client";
export default function NavBar() {
  return (
    <div className="navbar bg-black shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" href="/home">
          Homero's Website
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/">Landing Page</a>
          </li>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <details>
              <summary>Pages</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/projects">Projects</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
