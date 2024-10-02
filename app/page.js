import Image from "next/image";

import Navbar from "./components/navbar";
import Hero from "./hero";
import Skills from "./skills";
import Projects from "./project";
import ContactForm from "./contact-form";
import Footerr from "./components/footersss";

export default function Home() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <Skills/>
   <Projects/>
   <ContactForm/>
   <Footerr/>
   </>
  );
}
