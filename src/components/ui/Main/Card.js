import { Flex, GridItem } from "@chakra-ui/react";
import Typography from "../../common/Typography";

const Card = ({ movie, handleHovered, hovered, handleMouseOut }) => {
  const overlay = {
    backgroundColor: "rgba(17, 17, 17, 0.7)",
    borderRadius: 12,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    align: "center",
    justifyContent: "center",
    flexDirection: "column",
    px: 2,
  };

  return (
    <GridItem
      bgColor="black"
      bgImage={movie.Poster}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      borderRadius={12}
      w="300px"
      h="300px"
      position="relative"
      onMouseOver={() => handleHovered(movie.imdbID)}
      onMouseOut={handleMouseOut}
    >
      <Flex {...overlay}>
        <Typography align="center" color="white" children={movie.Title} />
        <Typography
          fontStyle="italic"
          fontSize={hovered === movie.imdbID ? 20 : 0}
          align="center"
          color="white"
          opacity={0.7}
          children={`Year ${movie.Year}`}
        />
      </Flex>
    </GridItem>
  );
};

export default Card;
