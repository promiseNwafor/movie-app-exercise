import { Flex } from "@chakra-ui/react";
import bg from "../../../assets/img/hero-img.svg";
import useMediaView from "../../../hook/useMediaView";
import Typography from "../../common/Typography";

const Hero = () => {
  const { tabView, mobileView } = useMediaView();

  return (
    <Flex
      bgImage={bg}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      w="100vw"
      h={mobileView ? "257px" : "550px"}
      px={20}
      justifyContent={tabView ? "center" : "initial"}
      align="center"
    >
      <Typography
        width={490}
        lineHeight={mobileView ? "36px" : "94px"}
        letterSpacing="-0.05em"
        color="white"
        fontSize={mobileView ? "28px" : "72px"}
        as="h1"
        fontWeight="bold"
        textAlign={tabView ? "center" : "initial"}
        children="Watch something incredible."
      />
    </Flex>
  );
};

export default Hero;
