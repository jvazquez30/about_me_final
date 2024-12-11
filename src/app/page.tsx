'use client';

import React from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { TbSquareRoundedLetterJFilled } from "react-icons/tb";
import { HiOutlineArrowSmDown } from "react-icons/hi";



export default function Home() {

  return (
    <div className="">
      <header className="p-8 flex justify-between border-b border-lg border-gray-500">
        <a className="flex items-center font-semibold ">
          <TbSquareRoundedLetterJFilled className="text-4xl" />
        </a>

        <ul className="flex ">
          <li className="font-semibold p-2">Home</li>
          <li className="font-semibold p-2">About</li>
          <li className="font-semibold p-2">Contact</li>
        </ul>

      </header>


      <main className="p-8 w-full">
        <div className="w-full text-center p-80">
          <h1 className="font-extrabold text-7xl">Hello, {""}
            <Typewriter
              words={["Friend!", "Colleague!", "World!"]}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={80}
              delaySpeed={1000}
            />
          </h1>
          <h2 className="flex justify-center pt-5 text-xl"> Scroll Down to find out more about me<HiOutlineArrowSmDown className="text-2xl pt-2"/></h2>
        </div>




        <div className="flex">
          <Image
            alt=""
            src={"/Futuristic_Profile_Pic.png"}
            width={300}
            height={300}
            className="border rounded-full mr-2"
          />

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
