import { extendTheme } from "@chakra-ui/react";

const Text = {
  baseStyle: {
    lineHeight: "31px",
    fontSize: "24px",
    color: "black",
    fontWeight: 400,
  },
};

const customTheme = {
  colors: {
    black: "#000",
    white: "#fff",
    gray: {
      800: "#292929",
    },
  },
  styles: {
    global: {
      body: {
        fontFamily: "DM Sans",
        color: "black",
      },
    },
  },
  space: {
    20: "77px",
  },

  components: {
    Text,
  },
};

export const theme = extendTheme(customTheme);
