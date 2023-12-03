import { VStack, Heading, Avatar, Text } from "@chakra-ui/react";
import profile from "../assets/profile.jpg";
import { profileDetails } from "../details";

function Profile() {
  return profileDetails.map((val, i) => (
    <VStack key={i}>
      <Heading size="md">{val.name}</Heading>
      <Avatar src={profile} size="2xl" />
      <Text align="center">{val.about}</Text>
    </VStack>
  ));
}

export default Profile;
