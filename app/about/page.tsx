import NavBar from "@/components/NavBar";
import { Github, Briefcase, GraduationCap, User, Layers } from "lucide-react";

const skills = [
  "C++",
  "JavaScript",
  "Python",
  "HTML",
  "CSS",
  "SQL",
  "Go",
  "Assembly",
  "React",
  "Git",
  "Ext JS",
  "DB2 SQL",
  "MySQL",
  ".NET",
  "Unreal",
  "PowerApps",
  "SSRS",
  "PowerAutomate",
];

const badgeVariants = [
  "badge-primary",
  "badge-secondary",
  "badge-accent",
  "badge-neutral",
  "badge-info",
  "badge-success",
  "badge-warning",
  "badge-error",
];

const experiences = [
  {
    title: "Associate Software Developer",
    company: "Jackson Family Wines",
    date: "Oct 2025 - Present",
    bullets: [
      "Built enterprise applications with Ext JS, DB2 SQL, and backend endpoints.",
      "Led bilingual Spanish/English meetings to align stakeholders and development teams.",
      "Helped drive a mobile automation initiative with potential six-figure savings.",
    ],
  },
  {
    title: "Application Developer Intern",
    company: "County of Sonoma",
    date: "Oct 2023 - Aug 2024",
    bullets: [
      "Modernized legacy MS Access apps using PowerApps, .NET, and SQL.",
      "Created clear reporting with Power BI and SSRS for client-ready insights.",
      "Delivered progress reports in a Scrum workflow and improved team communication.",
    ],
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-base-200 text-base-content">
      <NavBar />

      <section className="hero min-h-[calc(100vh-4rem)] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.15),_transparent_25%)] py-10">
        <div className="hero-content flex-col gap-10 lg:flex-row lg:items-start">
          <div className="space-y-6 max-w-2xl">
            <div className="badge badge-primary badge-lg gap-2 px-4 py-3 text-base">
              <User className="h-5 w-5" />
              About Me
            </div>
            <h1 className="text-4xl font-extrabold sm:text-5xl">Hi, I&apos;m Homero.</h1>
            <p className="text-lg text-muted-foreground sm:text-xl">
              A Summa Cum Laude Computer Science graduate building enterprise-grade applications and modern web experiences. I combine strong technical skill with clear communication and a practical focus on automation, performance, and user-centered delivery.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="/contact" className="btn btn-primary btn-lg gap-2">
                Contact Me
              </a>
              <a href="https://github.com/homero272" target="_blank" rel="noreferrer" className="btn btn-outline btn-lg gap-2">
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
            <div>
              <a href="#details" className="btn btn-secondary btn-lg mt-4">
                Scroll to learn more
              </a>
            </div>
          </div>

          <div className="card w-full max-w-xl bg-base-100 shadow-xl shadow-primary/10">
            <div className="card-body space-y-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-secondary font-bold">Contact</p>
                  <h2 className="text-2xl font-bold">Professional details</h2>
                </div>
                <div className="avatar">
                  <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="/images/profile_headshot.jpeg" alt="Homero headshot" />
                  </div>
                </div>
              </div>

              <div className="grid gap-4 justify-items-center">
                <div className="space-y-3 rounded-2xl border border-base-300 bg-base-200 p-4 max-w-xl w-full">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Education</p>
                  <p className="font-semibold">Sonoma State University</p>
                  <p className="text-sm">BS Computer Science, Summa Cum Laude</p>
                  <p className="text-sm">GPA: 3.97 / 4.00</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="card rounded-3xl bg-primary text-primary-content p-5">
                  <div className="flex items-center gap-4">
                    <Briefcase className="h-6 w-6" />
                    <div>
                      <p className="text-sm uppercase opacity-80">Current role</p>
                      <p className="font-semibold">Associate Software Developer</p>
                    </div>
                  </div>
                </div>
                <div className="card rounded-3xl bg-secondary text-primary p-5">
                  <div className="flex items-center gap-4">
                    <GraduationCap className="h-6 w-6" />
                    <div>
                      <p className="text-sm uppercase opacity-80">Academic honors</p>
                      <p className="font-semibold">Department Distinction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="details" className="mx-auto w-full max-w-7xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <div className="prose max-w-none dark:prose-invert">
              <h2>What I build</h2>
              <p>
                I design dependable software for real teams: enterprise workflows, modern dashboards, and automation tools that reduce manual work. My work is driven by practical clarity, strong collaboration, and precise execution across both frontend and backend systems.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {experiences.map((experience) => (
                <div key={experience.title} className="card rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <Layers className="h-5 w-5 text-white" />
                    <div>
                      <h3 className="text-xl font-semibold">{experience.title}</h3>
                      <p className="text-sm uppercase ">{experience.company}</p>
                    </div>
                  </div>
                  <p className="mb-4 text-sm">{experience.date}</p>
                  <ul className="space-y-3 text-sm leading-6">
                    {experience.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-secondary" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="card rounded-[2rem] border border-base-300 bg-base-100 p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em]">Strengths</p>
                  <h3 className="text-2xl font-semibold">Skills & tools</h3>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span key={skill} className={`badge ${badgeVariants[index % badgeVariants.length]} badge-lg`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="card rounded-[2rem] border border-base-300 bg-base-100 p-6 shadow-sm">
              <div className="mb-4">
                <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Education</p>
                <h3 className="text-2xl font-semibold">Sonoma State University</h3>
              </div>
              <div className="space-y-3 text-sm">
                <p>BS in Computer Science</p>
                <p>Summa Cum Laude · Department Distinction</p>
                <p>GPA: 3.97 / 4.00</p>
                <p>Computer Science Club Treasurer (2022 - 2023)</p>
              </div>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}
