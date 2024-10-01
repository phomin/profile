"use client";

import {
  Typography,
  Card,
  CardBody,
  Radio,
  Input,
  Textarea,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon, TicketIcon } from "@heroicons/react/24/solid";

export function ContactForm() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-5 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Contact Us
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-5/12 !text-gray-500"
        >
          
        </Typography>
      </div>
      <div className="">
        <Card shadow={true} className="container mx-auto border border-gray/50 ">
          <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10 w-full flex justify-center">
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-300 ">
              <Typography variant="h4" color="white" className="mb-2">
                Contact Information
              </Typography>
              <Typography
                variant="lead"
                className="mx-auto mb-8 text-base !text-gray-500"
              >
              </Typography>
              <div className="flex gap-5">
                <PhoneIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  097-193-3364
                </Typography>
              </div>
              <div className="flex my-2 gap-5">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  pmin_t@live.com
                </Typography>
              </div>
              <div className="flex mb-10 gap-5">
                <Typography  className="h-5 w-6 text-white font-bold">
                   Line
                   </Typography>
                <Typography variant="h6" color="white" className="mb-2">
                  minz4151
                </Typography>
              </div>
              <div className="flex items-center gap-5">
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-facebook text-lg" />
                </IconButton>
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-instagram text-lg" />
                </IconButton>
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-github text-lg" />
                </IconButton>
              </div>
            </div>
            
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default ContactForm;
