import NavBar from "@/components/NavBar";

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-screen flex flex-col items-center justify-center">
      <NavBar />
      <h1 className="text-2xl md:text-4xl mt-8 font-bold">Contact Me!</h1>
      <div className="flex flex-row mt-40 items-stretch space-x-4 md:space-x-80">
        <div className="hover-3d flex w-48 flex-col text-center md:w-64">
          {/* content */}
          <figure className="w-full rounded-2xl">
              <a href="https://github.com/homero272" target="_blank" rel="noopener noreferrer">
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
      <div className="flex flex-row mt-20 items-stretch space-x-4 md:space-x-80">
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
          <p className="mt-4 text-sm md:text-lg">Email: homeroarellano272@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
