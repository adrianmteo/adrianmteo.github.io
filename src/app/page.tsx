"use client";

import { contact, words } from "@/assets/data";
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-screen-lg">
        <h1 className="leading-snug text-3xl md:text-4xl text-gray-300 md:leading-normal">
          Hello, my name is{" "}
          <span className="font-semibold text-white">Adrian Mateoaea</span>
          <br />
          and I work remotely from{" "}
          <Link
            target="_blank"
            className="font-semibold text-white"
            href="https://www.google.com/maps/place/Cluj-Napoca"
          >
            Cluj-Napoca
          </Link>
          .
          <br />I{" "}
          <span className="font-semibold text-white">
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
      </div>
    </main>
  );
}
