import { Box, HStack, Heading, Image, Show, Text } from "@chakra-ui/react";
import { FaArrowCircleRight, FaFileInvoice } from "react-icons/fa";
import CustomButton from "./CustomButton";
import img from "../assets/coding.jpg";
import { profileDetails } from "../details";

function Bio() {
  const openResume = () => {
    window.open(
      "https://docs.google.com/document/d/1M9gpn6ibBa0IhDza7ccbVBCMKJ6riPmv_GeqE_Jg8HE"
    );
  };
  return (
    <HStack align="flex-start" gap={10}>
      {profileDetails.map((val, i) => (
        <Box key={i}>
          <Heading as="h1" size="xl">
            {val.name}
          </Heading>
          <Heading as="h3" size="md">
            {val.role}
          </Heading>
          <Text marginTop={5}>{val.description}</Text>
          <HStack marginY={5} spacing={3}>
            <CustomButton color="green" icon={FaArrowCircleRight}>
              View Portfolio
            </CustomButton>
            <CustomButton icon={FaFileInvoice} handleClick={openResume}>
              View Resume
            </CustomButton>
          </HStack>
        </Box>
      ))}
      <Show above="lg">
        <Image src={img} width="325px" />
      </Show>
    </HStack>
  );
}

export default Bio;
