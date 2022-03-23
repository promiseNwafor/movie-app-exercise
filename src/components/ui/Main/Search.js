import { Box, Input } from "@chakra-ui/react";
import useMediaView from "../../../hook/useMediaView";
import Typography from "../../common/Typography";

const Search = ({ handleSearch, value }) => {
  const { tabView, mobileView } = useMediaView();

  return (
    <Box
      w="100%"
      pl={"10px"}
      pr={mobileView ? "28px" : tabView ? "77px" : "57px"}
      color="white"
    >
      <Typography mb="4px" children="Search" />
      <Input
        borderRadius={0}
        borderColor="black"
        color="black"
        h={mobileView ? "34px" : "54px"}
        variant="outline"
        size="lg"
        type="search"
        onChange={handleSearch}
        value={value}
      />
    </Box>
  );
};

export default Search;
