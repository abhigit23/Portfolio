import { Box, Flex, Heading, List, Stack, Text } from "@chakra-ui/react";
import SectionHeading from "./SectionHeading";
import { experience } from "../details";

function Experience() {
  return (
    <Box as="section" id="experience" marginY={5}>
      <SectionHeading>Experience</SectionHeading>
      <Stack gap={6}>
        {experience.map((job) => (
          <Box key={job.company}>
            <Flex justify="space-between" wrap="wrap" columnGap={4}>
              <Heading as="h3" size="lg">
                {job.role} · {job.company}
              </Heading>
              <Text color="fg.muted">{job.period}</Text>
            </Flex>
            <Text color="fg.muted">{job.location}</Text>
            <List.Root marginTop={2} paddingStart={5} gap={1}>
              {job.points.map((point) => (
                <List.Item key={point}>{point}</List.Item>
              ))}
            </List.Root>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

export default Experience;
