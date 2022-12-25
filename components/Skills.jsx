import Image from "next/image";
import React from "react";
import HTML from '../public/assets/skills/html.png'
import CSS from '../public/assets/skills/css.png'
import JavaScript from '../public/assets/skills/javascript.png'
import ReactJs from '../public/assets/skills/react.png'
import Next from '../public/assets/skills/nextjs.png'
import Express from '../public/assets/skills/express.png'
import Mongo from '../public/assets/skills/mongo.png'
import Firebase from '../public/assets/skills/firebase.png'
import Git from '../public/assets/skills/github1.png'
import Bootstrap from '../public/assets/skills/Bootstrap.png'
import Tailwind from '../public/assets/skills/tailwind.png'
import Python from '../public/assets/skills/Python.png'
import Node from '../public/assets/skills/node.png'

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="md:mx-0 mx-3 uppercase tracking-widest font-poppins text-xl">
          Skills
        </p>
        <h2 className="md:mx-0 mx-3 font-poppins py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mx-3">
          <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 items-center justify-center">
              <div className="m-auto">
                <Image
                  src={HTML}
                  width="64"
                  height="64"
                  alt="HTML"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 items-center justify-center">
              <div className="m-auto">
                <Image
                  src={CSS}
                  width="64"
                  height="64"
                  alt="CSS"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 items-center justify-center">
              <div className="m-auto">
                <Image
                  src={JavaScript}
                  width="64"
                  height="64"
                  alt="Javascript"
                />
              </div>
              <div className="flex flex-col items-center justify-center font-poppins">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 items-center justify-center">
              <div className="m-auto">
                <Image
                  src={ReactJs}
                  width="64"
                  height="64"
                  alt="React"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 items-center justify-center">
              <div className="m-auto">
                <Image
                  src={Next}
                  width="64"
                  height="64"
                  alt="Next"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 items-center justify-center">
              <div className="m-auto">
                <Image
                  src={Node}
                  width="64"
                  height="64"
                  alt="Node"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Node</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 items-center justify-center">
              <div className="m-auto">
                <Image
                  src={Mongo}
                  width="64"
                  height="64"
                  alt="Mongo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MongoDb</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 items-center justify-center">
              <div className="m-auto">
                <Image
                  src={Express}
                  width="64"
                  height="64"
                  alt="express"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Express</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 items-center justify-center">
              <div className="m-auto">
                <Image
                  src={Tailwind}
                  width="64"
                  height="64"
                  alt="Tailwind"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 items-center justify-center">
              <div className="m-auto">
                <Image
                  src={Bootstrap}
                  width="64"
                  height="64"
                  alt="Bootstrap"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Bootstrap</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 items-center justify-center">
              <div className="m-auto">
                <Image
                  src={Python}
                  width="64"
                  height="64"
                  alt="Python"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Python</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 items-center justify-center">
              <div className="m-auto">
                <Image
                  src={Firebase}
                  width="64"
                  height="64"
                  alt="Firebase"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 items-center justify-center">
              <div className="m-auto">
                <Image
                  src={Git}
                  width="64"
                  height="64"
                  alt="Git"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
