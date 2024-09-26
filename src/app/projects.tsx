"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";
import { Carousel } from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";
import { CardBody } from "@material-tailwind/react";
import { Card } from "@material-tailwind/react";

import GithubIcon from '../components/GithubIcon'; 





export function Projects() {
  return (
    <section className="py-28 px-8">
      <div className=" mb-5 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          My Projects 
        </Typography>       
      </div>
      <Card shadow={true} className="container mx-auto border border-gray/50 ">
      <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10 w-full flex justify-center">
      <div className="w-full flex justify-center ">
      <div className="w-full h-fit    ">


<Carousel loop={true} autoplay={true} className="rounded ">
<img
  src="/image/img-profile1.png"
  alt="image 1"
  className="h-full w-full object-cover object-center"
/>
<img
  src="/image/img-profile2.png"
  alt="image 2"
  className="h-full w-full object-cover object-center"
/>
<img
  src="/image/img-profile3.png"
  alt="image 3"
  className="h-full w-full object-cover object-center"
/>
<img
  src="/image/img-profile4.png"
  alt="image 3"
  className="h-full w-full object-cover object-center"
/>
<img
  src="/image/img-profile5.png"
  alt="image 3"
  className="h-full w-full object-cover object-center"
/>
<img
  src="/image/img-profile6.png"
  alt="image 3"
  className="h-full w-full object-cover object-center"
/>
</Carousel>

</div>
</div>
</CardBody>
        </Card>
<div className=" mb-5 text-center flex  flex-col mt-5">
<div className="flex justify-center" >
<a href="https://github.com/phomin/react-redeem-point.git">
  < GithubIcon/>
  </a>
  </div>
        <Typography variant="h2" color="blue-gray" className="mb-4 ">
         GitHub
        </Typography>       
        <Typography variant="h5" color="blue-gray" className="mb-4">
        
        </Typography>     
       

      </div>
      
      
    </section>
  );
}

export default Projects;
