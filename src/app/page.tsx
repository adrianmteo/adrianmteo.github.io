import { contact, tech } from "@/assets/data";
import Image from "next/image";
import Link from "next/link";

function calculateSize(
  size: { width: number; height: number },
  maxHeight: number
) {
  return {
    width: (maxHeight / size.height) * size.width,
    height: maxHeight,
  };
}

export default function Home() {
  return (
    <main className="p-4 md:p-12 text-center space-y-24 w-[100%] max-w-screen-md mx-auto min-h-screen flex flex-col justify-center">
      <div>
        <h1 className="text-3xl md:text-4xl leading-normal">
          👋 My name is Adrian Mateoaea
          <br />
          and I am a 🧑‍💻 full-stack developer
          <br /> living in 🇷🇴 Cluj-Napoca, Romania.
        </h1>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-xl mb-8">
          I have experience with the following technologies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {tech.map((tech, index) => (
            <div
              key={String(index)}
              className="group rounded-md border border-gray-100 bg-white flex items-center justify-center p-6 relative overflow-hidden"
            >
              <Image
                priority
                src={tech.src}
                alt={tech.name}
                {...calculateSize(tech, 80)}
                style={{ ...calculateSize(tech, 80) }}
              />

              <div className="absolute p-2 w-full h-full backdrop-blur-md bg-white bg-opacity-75 flex flex-col justify-center opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity">
                <h3 className="font-medium">{tech.name}</h3>
                <p className="text-sm">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center space-y-4">
        <p>Contact me</p>

        {contact.map((contact, index) => (
          <Link key={String(index)} href={contact.href} target="_blank">
            <Image
              priority
              src={contact.src}
              alt={contact.name}
              {...calculateSize(contact, 24)}
              style={{ ...calculateSize(contact, 24) }}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
