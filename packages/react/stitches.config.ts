import { green, sage, greenDark, sageDark } from "@radix-ui/colors";
import { createStitches } from "@stitches/react";

export const { styled, getCssText, globalCss, keyframes, createTheme } =
  createStitches({
    theme: {
      colors: {
        ...green,
        ...sage,
      },
      space: {
        1: "5px",
        2: "10px",
        3: "15px",
        4: "20px",
        5: "25px",
      },
      shadows: {
        ...greenDark,
        ...sageDark,
      },
    },
    media: {
      sm: "(min-width: 640px)",
      md: "(min-width: 768px)",
      lg: "(min-width: 1024px)",
    },
  });

export const darkTheme = createTheme({
  colors: {
    ...greenDark,
    ...sageDark,
  },
});

export const globalStyles = globalCss({
  html: {
    height: "100%",
    margin: 0,
    padding: 0,
    background: "$green1",
    fontFamily: "Roboto, sans-serif",
  },
  body: {
    minHeight: "100%",
    margin: 0,
    padding: 0,
  },
});
