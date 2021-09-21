import { styled } from "../stitches.config";
import { StarFilledIcon } from "@modulz/radix-icons";

const Wrapper = styled("div", {});

const Headline = styled("h3", {
  color: "$sage12",
  fontFamily: "Work Sans",
  fontSize: 22,
});

const Description = styled("p", {
  color: "$sage11",
});

const IconWrapper = styled("div", {
  background: "$green7",
  width: 50,
  height: 50,
  borderRadius: 99,
  display: "inline-grid",
  placeContent: "center",
  color: "$sage12",
});

const SellingPoint: React.FunctionComponent<{
  headline: string;
  description: string;
  Icon: JSX.Element;
}> = ({
  headline = "The Headline",
  description = "Here goes the description",
  Icon = StarFilledIcon,
}) => {
  return (
    <Wrapper>
      <IconWrapper>{Icon}</IconWrapper>
      <Headline>{headline}</Headline>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default SellingPoint;
