import { VStack } from "@chakra-ui/react";
import Hero from "./Hero";
import Nav from "./Nav";

const Header = () => {
  return (
    <VStack spacing={0}>
      <Nav />
      <Hero />
    </VStack>
  );
};

export default Header;
