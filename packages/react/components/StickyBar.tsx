import { styled } from "../stitches.config";
import { useIntersectionObserver } from "../util/hooks";

import SignUp from "./SignUp";

const Wrapper = styled("div", {
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  padding: 30,

  boxShadow: `0 0 0 1px $green9`,
  background: "rgba(91, 185, 140, 0)",
  backdropFilter: "blur(40px)",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  flexDirection: "column",
  "@sm": {
    flexDirection: "row",
  },

  variants: {
    shouldBeVisible: {
      true: {
        visibility: "visible",
      },
      false: {
        visibility: "hidden",
      },
    },
  },

  defaultVariants: {
    shouldBeVisible: false,
  },
});

const Text = styled("div", {
  color: "$sage12",
  fontFamily: "Work Sans",
  fontSize: 24,
  flex: 1,

  marginBottom: "$3",
  "@sm": {
    marginBottom: 0,
  },
});

const StickyBar: React.FunctionComponent<{
  elementControllingVisibility: React.MutableRefObject<HTMLDivElement | null>;
}> = ({ elementControllingVisibility }) => {
  const entry = useIntersectionObserver(elementControllingVisibility, {});

  return (
    <Wrapper shouldBeVisible={!entry?.isIntersecting}>
      <Text>Schon entschieden? Dann buch doch einfach mal einen Termin.</Text>
      <SignUp />
    </Wrapper>
  );
};

export default StickyBar;
