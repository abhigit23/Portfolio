import { VStack, Heading, Avatar, Text } from "@chakra-ui/react";
import profileImg from "../assets/profile.jpg";
import { profile } from "../details";

function Profile() {
  return (
    <VStack gap="clamp(6px, 1.2vh, 8px)">
      <Heading size="lg">{profile.name}</Heading>
      <Avatar.Root boxSize="clamp(72px, 15vh, 128px)">
        <Avatar.Fallback name={profile.name} />
        <Avatar.Image src={profileImg} />
      </Avatar.Root>
      <Text
        textAlign="center"
        css={{
          "@media (max-height: 800px)": { fontSize: "sm" },
          "@media (max-height: 640px)": { display: "none" },
        }}
      >
        {profile.about}
      </Text>
    </VStack>
  );
}

export default Profile;
