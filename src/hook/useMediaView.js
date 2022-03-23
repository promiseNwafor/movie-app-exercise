import { useMediaQuery } from "@chakra-ui/react";

const useMediaView = () => {
  const [tabView] = useMediaQuery("(max-width: 850px)");
  const [mobileView] = useMediaQuery("(max-width: 400px)");

  return { tabView, mobileView };
};

export default useMediaView;
