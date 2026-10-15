import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import SectionHeading from "./SectionHeading";
import { education } from "../details";

function Education() {
  return (
    <Box as="section" id="education" marginY={5}>
      <SectionHeading>Education</SectionHeading>
      <Flex justify="space-between" wrap="wrap" columnGap={4}>
        <Heading as="h3" size="lg">
          {education.degree}
        </Heading>
        <Text color="fg.muted">{education.period}</Text>
      </Flex>
      <Text color="fg.muted">
        {education.institution} · {education.grade}
      </Text>
    </Box>
  );
}

export default Education;
