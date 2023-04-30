import { HStack, Text, Heading, VStack } from "native-base";

export function HomeHeader() {
  return (
    <HStack>
      <VStack>
        <Text color="gray.100">Olá,</Text>

        <Heading color="gray.100">Gui</Heading>
      </VStack>
    </HStack>
  );
}
