
import { Navbar, Footer } from "@/components";
import Hero from "./hero";
import Clients from "./clients";
import Projects from "./projects";
import ContactForm from "./contact-form";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Projects />
    
      <ContactForm />
      <Footer />
    </>
  );
}
