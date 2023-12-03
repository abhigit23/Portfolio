import { Alert, Heading, Text, VStack } from "@chakra-ui/react";
import { profileDetails } from "../details";

function WhatIDo() {
  return (
    <VStack marginY={5}>
      <Alert status="success" bg="none" variant="left-accent">
        <Heading as="h3" fontSize={25}>
          What I do
        </Heading>
      </Alert>
      {profileDetails.map((val, i) => (
        <Text key={i}>{val.myJob}</Text>
      ))}
    </VStack>
  );
}

export default WhatIDo;
