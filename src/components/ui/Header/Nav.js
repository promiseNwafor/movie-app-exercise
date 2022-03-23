import { Link } from "react-router-dom";
import { Flex, Image } from "@chakra-ui/react";
import useMediaView from "../../../hook/useMediaView";
import Logo from "../../../assets/img/Logo.svg";

const Nav = () => {
  const { tabView, mobileView } = useMediaView();

  return (
    <Flex
      justifyContent={tabView ? "center" : "initial"}
      bg="gray.800"
      w="100%"
      px={20}
      py={10}
      pt={mobileView ? "16px" : 10}
      pb={mobileView ? "17.42px" : 10}
      color="white"
    >
      <Link to="">
        <Image src={Logo} width={mobileView ? "108px" : "auto"} alt="Logo" />
      </Link>
    </Flex>
  );
};

export default Nav;
