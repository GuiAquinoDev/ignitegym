import { HStack, Text, Heading, VStack } from "native-base";
import { UserPhoto } from "./UserPhoto";

export function HomeHeader() {
  return (
    <HStack bg="gray.600" pt={16} pb={5} alignItems="center">
      <UserPhoto
        source={{
          uri: "https://github.com/guiaquinodev.png",
        }}
        alt="Imagem do usuário"
        size={16}
        mr={4}
      />
      <VStack>
        <Text color="gray.100" fontSize="md">
          Olá,
        </Text>

        <Heading color="gray.100" fontSize="md">
          Gui
        </Heading>
      </VStack>
    </HStack>
  );
}