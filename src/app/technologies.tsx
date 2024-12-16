import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { SiExpress, SiTailwindcss, SiSqlite } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";





const technology = [{
  name: "React",
  icon: <FaReact className="text-4xl p-1 text-sky-400" />
}, 
{
  name: "Javascript",
  icon: <IoLogoJavascript className="text-4xl p-1 text-yellow-300"/>
},
{
  name: "Typescript",
  icon: <BiLogoTypescript className="text-4xl p-1 text-sky-600"/>
},
{
  name: "Node.js",
  icon: <FaNodeJs className="text-4xl p-1 text-green-600"/>
},
{
  name: "Express.js",
  icon: <SiExpress className="text-4xl p-2 "/>
},
{
  name: "Tailwind CSS",
  icon: <SiTailwindcss className="text-4xl p-1 text-sky-400"/>
},
{
  name: "Next.js",
  icon: <RiNextjsFill className="text-4xl text-black p-1"/>
},
{
  name: "Sqlite",
  icon: <SiSqlite className="text-4xl text-sky-600 p-1"/>
},
]


export default function Technologies() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {technology.map((tech, index ) => (
        <h1 key={index} className="flex border border-neutral-500 hover:border-neutral-400 hover:scale-110 transtion ease-out duration-300 rounded-md bg-zinc-800 px-2 py-2 mr-16">{tech.icon}
          <a className="pl-2 pt-1">{tech.name}</a>
        </h1>
        )
      )}
    </div>
  )
}