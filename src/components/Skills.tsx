import {
  Badge,
  Box,
  HStack,
  Heading,
  Icon,
  SimpleGrid,
  Wrap,
} from "@chakra-ui/react";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "../details";

function Skills() {
  return (
    <Box as="section" id="skills" marginY={5}>
      <SectionHeading>Skills</SectionHeading>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
        {skillGroups.map(({ group, icon: GroupIcon, items }) => (
          <Box key={group}>
            <HStack marginBottom={2}>
              <Icon fontSize={22}>
                <GroupIcon />
              </Icon>
              <Heading as="h3" size="lg">
                {group}
              </Heading>
            </HStack>
            <Wrap gap={2}>
              {items.map((item) => (
                <Badge key={item} colorPalette="green" size="lg">
                  {item}
                </Badge>
              ))}
            </Wrap>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Skills;
