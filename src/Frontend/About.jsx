import React from "react";
import { FiDownload } from "react-icons/fi";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { Button, Chip } from "@nextui-org/react";
function About() {
  return (
    <div className="py-10 mx-64">
      <main className="flex mb-10 justify-center items-center">
        <section className="basis-1/2">
          <div class="shape-container">
            <div class="shape">
            </div>
          </div>
        </section>
        <section className="flex flex-col basis-1/2">
          <p className="text-3xl text-danger font-bold">
            <code>{"< Why Did You Choose Me ? />"}</code>
          </p>
          <p className=" my-5 text-justify tracking-wide leading-relaxed font-[consolas] text-lg">
            We are the architects of the digital realm. With a blend of
            creativity and technical acumen, we construct digital
            infrastructures that not only stand the test of time but also serve
            as a beacon for your brand in the vast expanse of the internet. We
            don't just write code, we etch your digital footprint with precision
            and finesse. Ready to leave a mark?
          </p>
          <div className="flex gap-x-5">
            <Button
              variant="flat"
              color="success"
              className="border-2 border-success-400 font-['Red_Rose'] w-max text-xl px-10 py-6"
            >
              Download CV
              <FiDownload />
            </Button>
            <Button
              variant="flat"
              color="danger"
              className="border-2 border-danger-400 font-['Red_Rose'] w-max text-xl px-10 py-6"
            >
              Hire Me
            </Button>
          </div>
        </section>
      </main>
      <hr />
      <main className="flex justify-between mt-10">
        <section className="">
          <p className="text-4xl text-danger-300 font-bold mb-10">
            <code>{"<Experiences />"}</code>
          </p>
          <div className="grid grid-cols-2 place-items-center gap-y-2 my-3 text-xl font-['consolas']">
            <div className="flex items-center justify-center gap-x-3">
              <Chip
                variant="flat"
                color="warning"
                className="border-2 border-yellow-200"
              >
                Now
              </Chip>
              <span>April 2023 - May 2024</span>
            </div>
            <div>
              <p>Full Time Freelancer</p>
            </div>
            <div className="grid grid-cols-subgrid place-items-center col-span-2">
              <div className="col-start-2">
                <Chip
                  variant="dot"
                  color="secondary"
                  className="border-2 border-purple-400"
                >
                  Oracle Corporation
                </Chip>
              </div>
            </div>
          </div>
          <hr />
        </section>
        <section className="text-center">
          <p className="text-4xl text-danger-300 mb-10 font-bold">
            <code>{"<Skills />"}</code>
          </p>
          <div className="flex flex-col text-xl gap-y-5 justify-center font-['consolas']">
            <div className="flex items-center gap-x-5">
              <IoLogoJavascript className="w-10 h-auto text-yellow-500" />
              <span>JAVASCRIPT</span>
            </div>
            <div className="flex items-center gap-x-5">
              <FaReact className="w-10 h-auto text-blue-400 animate-[spin_10s_linear_infinite]" />
              <span>REACT</span>
            </div>
            <div className="flex items-center gap-x-5">
              <FaBootstrap className="w-10 h-auto text-purple-600" />
              <span>BOOTSTRAP</span>
            </div>
            <div className="flex items-center gap-x-5">
              <SiTailwindcss className="w-10 h-auto text-blue-500" />
              <span>TAILWIND</span>
            </div>
            <div className="flex items-center gap-x-5">
              <FaGitAlt className="w-10 h-auto text-red-500" />
              <span>GIT</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
