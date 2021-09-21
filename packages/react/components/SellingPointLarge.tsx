import { styled } from "../stitches.config";
import { CheckIcon } from "@modulz/radix-icons";

const Box = styled("div", {});

const Headline = styled("h3", {
  color: "$sage12",
  fontFamily: "Work Sans",
  fontSize: 28,

  marginTop: "$2",
  marginBottom: "$4",

  "@sm": {
    paddingRight: "50%",
  },
});

const Description = styled("div", {
  color: "$sage12",
  fontSize: 16,

  "p:first-of-type": {
    marginTop: 0,
  },
});

const KeyBox = styled("span", {
  padding: 6,
  background: "$green7",
  color: "$green10",
  borderRadius: 4,
  fontSize: 12,
  fontWeight: "bold",
});

const IconWrapper = styled("div", {
  borderRadius: 99,
  background: "$green8",
  color: "$green 10",
  display: "inline-grid",
  placeContent: "center",
  padding: 16,
  marginRight: 12,
});

const BulletPointList = styled("ul", {
  listStyle: "none",
  color: "$sage12",
  margin: 0,
  padding: 0,

  marginTop: "$2",

  "@sm": {
    marginTop: 0,
    marginLeft: "$2",
  },

  li: {
    marginBottom: 12,
    display: "flex",
    alignItems: "center",

    "&:last-of-type": {
      marginBottom: 0,
    },
  },
});

const Container = styled("div", {
  display: "flex",

  variants: {
    flexDirection: {
      row: { flexDirection: "row" },
      column: {
        flexDirection: "column",
      },
    },
  },
});

const BulletPoints: React.FunctionComponent<{ bulletPoints: string[] }> = ({
  bulletPoints,
}) => {
  return (
    <BulletPointList>
      {bulletPoints.map((bulletPoint) => (
        <li key={bulletPoint}>
          <IconWrapper>
            <CheckIcon />
          </IconWrapper>
          <div>{bulletPoint}</div>
        </li>
      ))}
    </BulletPointList>
  );
};

const SellingPointLarge: React.FunctionComponent<{
  tag: string;
  headline: string;
  description: string[];
  bulletPoints: string[];
}> = ({ tag, headline, description, bulletPoints }) => {
  return (
    <>
      <KeyBox>{tag}</KeyBox>
      <Headline>{headline}</Headline>
      <Container flexDirection={{ "@initial": "column", "@sm": "row" }}>
        <Box css={{ flex: 1 }}>
          <Description>
            {description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </Description>
        </Box>
        <Box css={{ flex: 1 }}>
          <BulletPoints bulletPoints={bulletPoints} />
        </Box>
      </Container>
    </>
  );
};

export default SellingPointLarge;
