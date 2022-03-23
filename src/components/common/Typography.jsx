import { Text } from "@chakra-ui/react";
import useMediaView from "../../hook/useMediaView";

const Typography = ({ children, ...rest }) => {
  const { mobileView } = useMediaView();

  return (
    <Text
      transition="font-size 300ms ease"
      fontSize={mobileView ? "18px" : "24px"}
      children={children || "Add Text"}
      {...rest}
    />
  );
};

export default Typography;
