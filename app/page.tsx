import { Spotlight } from "@/components/animations/Spotlight";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 w-full  bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      <Spotlight />
      <nav className="flex items-center justify-center gap-8 w-full h-24 space-x-6 pt-6 text-slate-100/80 font-bold text-lg sticky top-0 z-50 ">
        <Link
          className="hover:scale-110 hover:text-slate-100 transition-all duration-300"
          href="#home"
        >
          Home
        </Link>
        <Link
          className="hover:scale-110 hover:text-slate-100 transition-all duration-300"
          href="#projects"
        >
          Projects
        </Link>
        <Link
          className="hover:scale-110 hover:text-slate-100 transition-all duration-300"
          href="#about"
        >
          About
        </Link>
        <Link
          className="hover:scale-110 hover:text-slate-100 transition-all duration-300"
          href="#contact"
        >
          Contact
        </Link>
      </nav>
      <section
        id="home"
        className="flex items-center justify-center h-screen w-full mx-auto"
      >
        <div className="flex-1 flex-col items-center justify-center space-x-6 space-y-3 px-10 py-5 ">
          <h1 className="text-4xl font-bold text-slate-100">
            Hello I&apos;m <span> Önder Şabahat, a full stack developer</span>
          </h1>
        </div>
        <div className="flex-1 items-center justify-center space-x-6 space-y-3 px-10 py-5">
          <h1 className="text-7xl font-bold text-slate-100">Hello world</h1>
        </div>
      </section>
      <section
        id="projects"
        className="flex items-center justify-center h-screen w-full mx-auto"
      >
        <h1 className="text-4xl font-bold text-slate-100">Projects</h1>
      </section>
      <section
        id="about"
        className="flex items-center justify-center h-screen w-full mx-auto"
      >
        <h1 className="text-4xl font-bold text-slate-100">About</h1>
      </section>
      <section
        id="contact"
        className="flex items-center justify-center h-screen w-full mx-auto"
      >
        <h1 className="text-4xl font-bold text-slate-100">Contact</h1>
      </section>
    </main>
  );
}
