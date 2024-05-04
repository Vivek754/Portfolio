import React from "react";
import { Typewriter } from "react-simple-typewriter";
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
import { Image, Card, CardFooter, Button } from "@nextui-org/react";
import { Navigate, Link } from "react-router-dom";

function Home() {
  return (
    <>
      <main className="flex flex-wrap justify-center gap-36 mt-20">
        <section>
          <Image
            isBlurred
            width={360}
            src="https://avatars.githubusercontent.com/u/68178450?v=4"
            alt="Profile Picture"
            className="m-5"
          />
        </section>
        <section>
          <p className="text-8xl font-[90] mb-5">
            <code>{"<coder>"}</code>
          </p>
          <p className="w-96 text-justify tracking-normal leading-relaxed font-['consolas'] text-sm">
            Hello there! I'm a Frontend Developer 💻, or as I like to call
            myself, a "Web Picasso". I paint the canvas of the web with my
            coding brush 🎨, using vibrant strokes of React, Tailwind, and
            Bootstrap. My passion lies in crafting interfaces that are so
            intuitive, even my grandma can use them! I believe in transforming
            caffeine into code, and ideas into digital realities. And remember,
            I don't just write code, I compose symphonies in JavaScript, one
            line at a time! I'm just a semicolon away!
          </p>
          <Button
            variant="flat"
            color="danger"
            className="border-2 border-red-400 Rooster text-4xl w-full my-2 py-6 float-right"
          >
            Hire Me
          </Button>
        </section>
      </main>
      <main className="bg-gray-100 py-7 my-10 dark:bg-[#161617]">
        <p className="text-center text-4xl animate-typing">
          <code>
            {"<"}
            <Typewriter words={["Front-End Technologies>"]} />
          </code>
        </p>
        <section className="flex justify-center gap-7 mt-8 animate-bounce">
          <FaHtml5 className="w-14 h-auto text-red-400" />
          <FaCss3Alt className="w-14 h-auto text-blue-600" />
          <IoLogoJavascript className="w-14 h-auto text-yellow-500" />
          <FaBootstrap className="w-14 h-auto text-purple-600" />
          <SiTailwindcss className="w-14 h-auto text-blue-500" />
          <FaReact className="w-14 h-auto text-blue-400 animate-[spin_10s_linear_infinite]" />
          <FaGitAlt className="w-14 h-auto text-red-500" />
        </section>
      </main>
      <main>
        <p className="text-center text-4xl animate-typing">
          <code>
            {"<"}
            <Typewriter words={["Projects>"]} />
          </code>
        </p>
        <section className="grid grid-cols-5 gap-10 my-10 px-64">
          <Card
            isFooterBlurred
            radius="lg"
            className="border-none col-span-2 max-h-72"
          >
            <Image
              alt="Woman listing to music"
              className="object-fill h-72"
              src="../src/assets/pexels-pixabay-270408.jpg"
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80">Live Now</p>
              <Button
                className="text-tiny text-white bg-black/20"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                Visit
                <FaExternalLinkAlt />
              </Button>
            </CardFooter>
          </Card>
          <Card
            isFooterBlurred
            radius="lg"
            className="border-none col-span-3 max-h-72"
          >
            <Image
              alt="Woman listing to music"
              className="object-fill min-h-72"
              src="../src/assets/pexels-athena-2582937.jpg"
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80">Live Now</p>
              <Button
                className="text-tiny text-white bg-black/20"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                Visit
                <FaExternalLinkAlt />
              </Button>
            </CardFooter>
          </Card>
          <Card
            isFooterBlurred
            radius="lg"
            className="border-none col-span-3 max-h-72"
          >
            <Image
              alt="Woman listing to music"
              className="object-fill min-h-72"
              src="../src/assets/pexels-johannes-plenio-1105379.jpg"
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80">Live Now</p>
              <Button
                className="text-tiny text-white bg-black/20"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                Visit
                <FaExternalLinkAlt />
              </Button>
            </CardFooter>
          </Card>
          <Card
            isFooterBlurred
            radius="lg"
            className="border-none col-span-2 max-h-72"
          >
            <Image
              alt="Woman listing to music"
              className="object-fill min-h-72"
              src="../src/assets/pexels-pixabay-38568.jpg"
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80">Live Now</p>
              <Button
                className="text-tiny text-white bg-black/20"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                Visit
                <FaExternalLinkAlt />
              </Button>
            </CardFooter>
          </Card>
          <Link className="col-span-5 place-self-center" to={"/projects"}>
            <Button
              variant="flat"
              color="primary"
              className="border-2 border-blue-400"
            >
              <code>{"<Show More/>"}</code>
            </Button>
          </Link>
        </section>
      </main>
    </>
  );
}

export default Home;
