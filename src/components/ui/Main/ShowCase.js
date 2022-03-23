import { useState } from "react";
import { Grid, VStack } from "@chakra-ui/react";
import useFetch from "../../../hook/useFetch";
import useMediaView from "../../../hook/useMediaView";
import Typography from "../../common/Typography";
import Card from "./Card";

const ShowCase = ({ category, query }) => {
  const [hovered, setHovered] = useState(-1);
  const { movies, loading, error } = useFetch(category);
  const { mobileView } = useMediaView();

  const handleHovered = (index) => setHovered(index);
  const handleMouseOut = () => setHovered(-1);

  let content = <Typography children={"Found no movies"} />;

  if (movies.length > 0) {
    content = (
      <Grid
        overflowX="scroll"
        css={{
          "&::-webkit-scrollbar": {
            width: "0",
            height: "0",
          },
        }}
        w="100vw"
        gridAutoFlow="column"
        gap={13}
      >
        {movies
          .filter((item) => item.Title.toLowerCase().includes(query || ""))
          .map((movie, i) => (
            <Card
              handleHovered={handleHovered}
              handleMouseOut={handleMouseOut}
              hovered={hovered}
              movie={movie}
              key={i}
            />
          ))}
      </Grid>
    );
  }

  if (error) content = <Typography children={"Error fetching movies"} />;
  if (loading) content = <Typography children={"Loading..."} />;

  return (
    <VStack
      mt={12}
      pl={mobileView ? "28px" : 20}
      alignItems="flex-start"
      spacing={mobileView ? "28px" : "18px"}
    >
      <Typography
        children={`${category.charAt(0).toUpperCase()}${category.slice(1)}`}
      />
      {content}
    </VStack>
  );
};

export default ShowCase;
