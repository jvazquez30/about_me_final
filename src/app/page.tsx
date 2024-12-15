import React from "react";
import { GrLocationPin } from "react-icons/gr";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Technologies from "./technologies"


export default function Home() {

  return (
    <div className="">
      <header className="p-8 flex justify-center">
        <ul className="flex text-center border border-neutral-500 rounded-md px-2 bg-zinc-800 text-sm">
          <li className="py-2 px-2">Home</li>
          <li className="py-2 px-2">Work</li>
          <li className="py-2 px-2">About</li>
          <li className="py-2 px-2">Contact</li>
        </ul>

      </header>


      <main className="p-8 w-full">
        <div className="w-full text-center p-64 row-span-1">
          <h1 className="font-extrabold text-7xl text-indigo-400">Jose Vazquez{" "}
          </h1>
          <h2 className="text-xl p-1">Full Stack Developer with 1+ year experience</h2>
          <h3 className="p-1 flex justify-center "> <GrLocationPin className="text-2xl p-1"/>Based in Los Angeles, CA</h3>

          <div className="flex justify-center">
            <button className="px-3 text-xs font-semibold border rounded-lg bg-zinc-800 border-neutral-500">
              Download CV
            </button>
            <ul className="flex p-1">
              <li> <FaGithub className="text-2xl ml-1 cursor-pointer"/> </li>
              <li>< FaLinkedin className="text-2xl ml-1 cursor-pointer"/> </li>
              <li></li>
            </ul>
          </div>
        </div>



        <section id="projects">
          <div className="w-full p-64 text-6xl">
            <h1>Projects</h1>
          </div>
        </section>

        <section id="current_tech">
          <div className="w-full p-64">
            <h1 className="text-5xl pb-4">Current Technologies</h1>
            <Technologies />
          </div>
        </section>


      </main>



      <footer className="">

      </footer>
    </div>
  );
}
