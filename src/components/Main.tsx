import { Divider } from "@chakra-ui/react";
import Bio from "./Bio";
import Skills from "./Skills";
import WhatIDo from "./WhatIDo";

function Main() {
  return (
    <>
      <Bio />
      <Divider />
      <WhatIDo />
      <Skills />
    </>
  );
}

export default Main;
