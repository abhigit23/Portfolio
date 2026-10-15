import {
  Badge,
  Box,
  Card,
  Icon,
  Link,
  SimpleGrid,
  Text,
  Wrap,
} from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { projects } from "../details";

function Projects() {
  return (
    <Box as="section" id="projects" marginY={5}>
      <SectionHeading>Key Projects</SectionHeading>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
        {projects.map((project) => (
          <Card.Root key={project.name} variant="outline">
            <Card.Body gap={2}>
              <Card.Title>{project.name}</Card.Title>
              <Text color="fg.muted" fontSize="sm">
                {project.client && `${project.client} · `}
                {project.period}
              </Text>
              <Card.Description>{project.description}</Card.Description>
              {project.tech && (
                <Wrap gap={2}>
                  {project.tech.map((item) => (
                    <Badge key={item} colorPalette="green">
                      {item}
                    </Badge>
                  ))}
                </Wrap>
              )}
            </Card.Body>
            {(project.link || project.repo) && (
              <Card.Footer gap={4}>
                {project.link && (
                  <Link
                    href={project.link}
                    colorPalette="green"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit site
                    <Icon fontSize="xs">
                      <FaExternalLinkAlt />
                    </Icon>
                  </Link>
                )}
                {project.repo && (
                  <Link
                    href={project.repo}
                    colorPalette="green"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon>
                      <AiFillGithub />
                    </Icon>
                    Source
                  </Link>
                )}
              </Card.Footer>
            )}
          </Card.Root>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Projects;
