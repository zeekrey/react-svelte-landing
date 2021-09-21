import { styled } from "../stitches.config";

const Button = styled("button", {
  all: "unset",
  background: "$green7",
  border: "1px solid $green8",
  boxSizing: "border-box",
  borderRadius: 99,
  padding: "10px 18px",
  cursor: "pointer",

  fontFamily: "Roboto, sans-serif",
  fontWeight: "bold",
  fontSize: 16,

  color: "$green12",

  //   Reset a styles
  textDecoration: "none",
  /**
   * boxShadow: `0 2px 10px ${blackA.blackA7}`,
//         "&:hover": { backgroundColor: mauve.mauve3 },
//         "&:focus": { boxShadow: `0 0 0 2px black` },
   */

  "&:hover": {
    background: "$green8",
  },

  variants: {
    outlined: {
      true: {
        background: "none",
        border: "none",

        color: "$sage11",

        "&:hover": {
          background: "$sage8",
        },
      },
    },
  },
});

export default Button;
