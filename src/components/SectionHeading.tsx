import { Alert, Heading } from "@chakra-ui/react";

interface Props {
  children: string;
}

function SectionHeading({ children }: Props) {
  return (
    <Alert.Root
      status="success"
      bg="transparent"
      borderStartWidth="4px"
      borderStartColor="green.500"
      borderRadius="none"
      marginBottom={4}
    >
      <Alert.Content>
        <Heading as="h2" fontSize={25}>
          {children}
        </Heading>
      </Alert.Content>
    </Alert.Root>
  );
}

export default SectionHeading;
