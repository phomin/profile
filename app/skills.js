"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import icon1 from "/app/logos/logo-html.png";
import icon2 from "/app/logos/logo-css.png";
import icon3 from "/app/logos/logo-js.png";
import icon4 from "/app/logos/logo-react.png";
import icon5 from "/app/logos/logo-next.png";

const image = [icon1, icon2, icon3, icon4, icon5];

function Skills() {
  return (
    <section className="px-8 py-5">
      <div className="container mx-auto text-center">
        <Typography variant="h2" color="blue-gray" className="mb-8">
          MY SKILLS
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {image.map((logo, key) => (
            <Image
              key={key}
              alt={logo}
              width={768}
              height={768}
              className="w-32"
              src={logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
