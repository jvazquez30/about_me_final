import React from "react";
import Image from "next/image";
import { TbSquareRoundedLetterJFilled } from "react-icons/tb";


export default function Home() {
  return (
    <div className="">
      <header className="p-8 flex justify-between border-b border-lg border-gray-500">
        <a className="flex items-center font-semibold ">
          <TbSquareRoundedLetterJFilled className="text-4xl"/>
        </a>

        <ul className="flex ">
          <li className="font-semibold p-2">Home</li>
          <li className="font-semibold p-2">About</li>
          <li className="font-semibold p-2">Contact</li>
        </ul>

      </header>


      <main className="p-8 w-full">
        <div className="flex">
        <Image 
        alt="" 
        src={"/Futuristic_Profile_Pic.png"} 
        width={300} 
        height={300}
        className="border rounded-full mr-2"
        />

        <div className="ml-3">
        <h1 className="font-extrabold text-4xl">Hello, I am  
        </h1>
        <h2 className="font-extrabold text-7xl">Jose</h2>
        <h3 className="font-extrabold text-2xl ">A tech enthusiast! </h3>
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
