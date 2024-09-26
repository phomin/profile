"use client";

import Image from "next/image";
import { useState } from "react";
import { Input } from "@material-tailwind/react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Avatar,
  IconButton,
  Typography,
  Card,
} from "@material-tailwind/react";
import {
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

function Hero() {
  const [show, setShow] = useState(false);
  
  const handleClick = () => {
    setShow((cur )=> !cur)
    console.log('click', show)
  }

  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Phomin  <br /> Phromsri
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            I&apos;m Phomin Phrosri, a passionate web developer based. Here,
            you&apos;ll get a glimpse of my journey in the world of web
            development, where creativity meets functionality.
          </Typography>

          <div className="grid">
           <Typography variant="h2" color="blue-gray">
            My Resume
          </Typography>
          <Typography className="mb-4 mt-3 w-9/12 font-normal !text-gray-500"  variant="lead">
          In the future, to become a full-stack developer, I started as a front-end developer by myself from online platforms. I learned about tools, web design, and creating websites for CRUD data.
          To practice doing mini projects by myself, I am committed to improving myself, being ready to work in a team, and learning new experiences.
          </Typography>
          <Button
            variant="text"
            color="gray"
            className="flex items-center gap-2 w-fit"
            onClick={handleClick}
          >
            view more
            <ArrowRightIcon
              strokeWidth={3}
              className="h-3.5 w-3.5 text-gray-900"
            />
          </Button>
            
          </div>
          
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src="/image/avarta1.jpg"
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
      <Dialog size="xxl" open={show} handler={handleClick} className="bg-blue-gray-600">
        <DialogHeader className="justify-between">
          <div className="flex items-center gap-3">
          
            <div className=" flex flex-col">
              <Button onClick={handleClick}>
                BACK
              </Button>
              
            </div>
          </div>
        
        </DialogHeader>
        <DialogBody className="flex justify-center">
          <img
            alt="nature"
            className="h-fit w-1/3  rounded-lg object-cover object-center"
            src="/image/resume.png"
          />
        </DialogBody>
        <DialogFooter className="justify-between">
          <div className="flex items-center gap-16">
            <div>
              
            </div>
            <div>
              
            </div>
          </div>
         
        </DialogFooter>
      </Dialog>
    </header>

    
  );
}

export default Hero;
