"use client";

import { contact, projects, words } from "@/assets/data";
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-screen-lg">
        <h1 className="leading-snug text-3xl md:text-4xl text-white md:leading-normal">
          Hello, my name is{" "}
          <span className="font-semibold">Adrian Mateoaea</span>
          <br />
          and I work remotely from{" "}
          <Link
            target="_blank"
            className="font-semibold"
            href="https://www.google.com/maps/place/Cluj-Napoca"
          >
            Cluj-Napoca
          </Link>
          .
          <br />I{" "}
          <span className="font-semibold">
            <Typewriter
              loop={0}
              words={words}
              cursor={false}
              typeSpeed={50}
              deleteSpeed={25}
              delaySpeed={2000}
            />
          </span>
          .
        </h1>

        <h2 className="mt-8 font-bold">Contact</h2>
        <div className="mt-6 flex items-center justify-center gap-2 flex-wrap">
          {contact.map((contact, index) => (
            <Link
              target="_blank"
              key={String(index)}
              href={contact.href}
              className="text-black bg-white rounded-md px-4 py-2 font-semibold inline-flex justify-center"
            >
              <Image
                priority
                width={24}
                height={24}
                src={contact.src}
                alt={`${contact.name} Logo`}
                className="inline-block mr-2"
              />
              <span>{contact.name}</span>
            </Link>
          ))}
        </div>

        <hr className="mt-8 border-none bg-white/25 h-[0.5px]" />

        <h2 className="mt-8 font-bold">Recent Projects</h2>
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          {projects.map((project, index) => (
            <Link
              target="_blank"
              key={String(index)}
              href={project.href}
              className="font-semibold inline-block max-w-[200px]"
            >
              <Image
                priority
                width={64}
                height={64}
                src={project.src}
                alt={`${project.name} Logo`}
                className="inline-block rounded-2xl object-cover"
              />
              <h3 className="mt-4">
                {project.name} ({project.platform})
              </h3>
              <p className="text-sm opacity-60 font-normal mt-2">
                {project.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
