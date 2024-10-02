"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import { Carousel } from "@material-tailwind/react";
import { CardBody } from "@material-tailwind/react";
import { Card } from "@material-tailwind/react";
import { GithubIcon} from "./components/github-icon";
import icon1 from"/app/image/image/img-profile1.png"
import icon2 from"/app/image/image/img-profile2.png"
import icon3 from"/app/image/image/img-profile3.png"
import icon4 from"/app/image/image/img-profile4.png"
import icon5 from"/app/image/image/img-profile5.png"
import icon6 from"/app/image/image/img-profile6.png"


const images = [icon1, icon2, icon3, icon4, icon5, icon6];
export function Projects() {
    return (
      <section className="py-28 px-8">
        <div className=" mb-5 text-center">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            My Projects
          </Typography>
        </div>
        <Card shadow={true} className="container mx-auto border border-gray/50 ">
          <CardBody className=" lg:grid-cols-7 md:gap-10 w-full flex justify-center">
            <div className="w-full flex justify-center ">
              <div className="w-full h-fit ">
                <Carousel loop={true} autoplay={true} className="rounded ">
                    {images.map((items, key)=>(
                        <Image
                        key={key}
                        src={items}
                        alt="image 1"
                        className="h-full w-full object-cover object-center"
                      />
                    ))}
                  
                </Carousel>
              </div>
            </div>
          </CardBody>
        </Card>
        <div className=" mb-5 text-center flex  flex-col items-center mt-8">
          <div className="flex justify-center">
            <a href="https://github.com/phomin/react-redeem-point.git">
              <GithubIcon className="" />
            </a>
          </div>
          <Button className="w-fit mt-5 text-xl" variant="outlined" onClick={()=>window.open("https://github.com/phomin/react-redeem-point.git","_blank")}>
            GitHub
          </Button>
        </div>
      </section>
    );
  }
  
  export default Projects;