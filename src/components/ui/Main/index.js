import { useState } from "react";
import { VStack } from "@chakra-ui/react";
import useMediaView from "../../../hook/useMediaView";
import Search from "./Search";
import ShowCase from "./ShowCase";

const Main = () => {
  const [query, setQuery] = useState("");
  const { tabView, mobileView } = useMediaView();

  const handleSearch = (e) => setQuery(e.target.value);

  return (
    <VStack
      my={mobileView ? "56px" : "63px"}
      pl={mobileView ? "28px" : tabView ? "67px" : "67px"}
      spacing={mobileView ? "33px" : "48px"}
    >
      <Search value={query} handleSearch={handleSearch} />
      <ShowCase category={"all"} query={query.toLowerCase()} />
      <ShowCase category={"movie"} />
      <ShowCase category={"series"} />
      <ShowCase category={"episode"} />
    </VStack>
  );
};

export default Main;
