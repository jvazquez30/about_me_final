'use client';
import React from "react";



export default function Home() {

  return (
    <div className="">
      <header className="p-8 flex justify-center">
        <ul className="flex text-center border border-neutral-500 rounded-md px-2 bg-zinc-800">
          <li className="py-2 px-2">Home</li>
          <li className="py-2 px-2">Work</li>
          <li className="py-2 px-2">About</li>
          <li className="py-2 px-2">Contact</li>
        </ul>

      </header>


      <main className="p-8 w-full">
        <div className="w-full text-center p-64 row-span-1">
          <h1 className="text-sm font-light p-2">Based in Los Angeles</h1>
          <h2 className="font-extrabold text-6xl">Quality {" "}
            <span className="text-violet-400">Web Development</span>
            {" "} 
          </h2>
        </div>




        <div className="flex w-full p-32">
          <div className="ml-3">
            <p className="font-extrabold py-2 ">I&apos;m a passionate Full-Stack Developer dedicated to delivering exceptional results from Front-End to Back-End, with a strong work ethic and a love for learning the latest technologies.
              My current stack includes JavaScript, React, HTML/CSS, Node.js, and Tailwind CSS, with expertise in quality assurance through unit and integration testing.
              Always eager to expand my network and explore new opportunities, I welcome the chance to connect and collaborate!</p>
          </div>





        </div>



      </main>



      <footer className="">

      </footer>
    </div>
  );
}
