import { Separator } from "@chakra-ui/react";
import Bio from "./Bio";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";

function Main() {
  return (
    <>
      <Bio />
      <Separator />
      <Experience />
      <Projects />
      <Skills />
      <Education />
    </>
  );
}

export default Main;
