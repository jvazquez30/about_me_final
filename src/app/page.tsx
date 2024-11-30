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

        <ul className="justify-between">
          <li className="font-semibold ">Home</li>
          <li className="font-semibold ">About</li>
          <li className="font-semibold ">Contact</li>
        </ul>

      </header>


      <main className="p-8">
        <div className="flex">
        <Image 
        alt="" 
        src={"/Futuristic_Profile_Pic.png"} 
        width={200} 
        height={200}
        className="border rounded-full mr-2"
        />

        <div className="ml-3">
        <h1 className="font-extrabold text-2xl">Hello, I am 
        </h1>
        <h2 className="font-extrabold text-9xl">Jose</h2>
        <h3 className="font-extrabold text-2xl">A tech enthusiast </h3>
        </div>
        
        
        </div>



      </main>



      <footer className="">

      </footer>
    </div>
  );
}
