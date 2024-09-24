"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const CLIENTS = [
  "html",
  "css",
  "js",
  "react",
  "next",

];

export function Clients() {
  return (
    <section className="px-8 py-5">
      <div className="container mx-auto text-center">
        <Typography variant="h2" color="blue-gray" className="mb-8">
        MY SKILLS
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {CLIENTS.map((logo, key) => (
            <Image
              key={key}
              alt={logo}
              width={768}
              height={768}
              className="w-32"
              src={`/logos/logo-${logo}.png`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
