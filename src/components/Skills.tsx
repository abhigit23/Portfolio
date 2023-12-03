import { Box, Heading, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import { skills } from "../details";

function Skills() {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} gap={2}>
      {skills.map((val, i) => (
        <Box key={i} marginY={4}>
          <Icon as={val.icon} fontSize={25} />
          <Heading as="h3" size="md">
            {val.skill}
          </Heading>
          <Text>{val.description}</Text>
        </Box>
      ))}
    </SimpleGrid>
  );
}

export default Skills;
