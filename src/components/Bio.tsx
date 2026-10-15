import { Box, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { FaArrowCircleRight, FaFileInvoice } from "react-icons/fa";
import CustomButton from "./CustomButton";
import img from "../assets/coding.jpg";
import { profile, resumeUrl } from "../details";

function Bio() {
  const viewProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const openResume = () => {
    window.open(resumeUrl, "_blank", "noopener");
  };
  return (
    <HStack as="section" id="about" align="flex-start" gap={10}>
      <Box>
        <Heading as="h1" size={{ base: "3xl", md: "4xl" }}>
          {profile.name}
        </Heading>
        <Heading as="h3" size={{ base: "lg", md: "xl" }}>
          {profile.role}
        </Heading>
        <Text color="fg.muted">{profile.location}</Text>
        <Text marginTop={5}>{profile.summary}</Text>
        <HStack marginY={5} gap={3} wrap="wrap">
          <CustomButton
            color="green"
            icon={FaArrowCircleRight}
            handleClick={viewProjects}
          >
            View Projects
          </CustomButton>
          <CustomButton icon={FaFileInvoice} handleClick={openResume}>
            View Resume
          </CustomButton>
        </HStack>
      </Box>
      <Image src={img} width="325px" hideBelow="lg" />
    </HStack>
  );
}

export default Bio;
