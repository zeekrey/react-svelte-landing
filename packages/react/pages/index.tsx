import type { NextPage } from "next";
import { useRef } from "react";
import Link from "next/link";
import { styled } from "../stitches.config";
import { ArrowRightIcon, MoonIcon, SunIcon } from "@modulz/radix-icons";
import { NextSeo } from "next-seo";
import { useTheme } from "next-themes";

import { META, UNIQUESELLINGPOINTS, ABOUTUSPOINTS } from "../website.config";
import { seo } from "../website.config";

import Button from "../components/Button";
import Alert from "../components/Alert";
import SellingPoint from "../components/SellingPoint";
import SellingPointLarge from "../components/SellingPointLarge";
import SignUp from "../components/SignUp";
import StickyBar from "../components/StickyBar";

const Headline = styled("h1", {
  color: "$sage12",
  fontFamily: "Work Sans, sans-serif",
  marginBottom: 0,

  fontSize: 38,
  padding: "20px $5",
  lineHeight: "40px",
  textAlign: "left",

  "@sm": {
    textAlign: "center",
    fontSize: 58,
    padding: "20px 100px",
    lineHeight: "60px",
  },
});

const SubHeadline = styled("h2", {
  color: "$sage11",
  fontFamily: "Roboto, sans-serif",
  fontSize: 20,
  padding: "0 $5",
  textAlign: "left",

  "@md": {
    padding: "0 250px",
    textAlign: "center",
  },
});

const SectionHeadline = styled("h3", {
  color: "$sage12",
  textAlign: "center",
  fontSize: 28,
  fontFamily: "Work Sans",
  padding: "$5",
  margin: 0,
});

const ThemeSwitch = styled("div", {
  color: "$green12",
  cursor: "pointer",
});

const Box = styled("div", {});

const Home: NextPage = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { theme, setTheme } = useTheme();

  return (
    <>
      <NextSeo {...seo} />
      <StickyBar elementControllingVisibility={ref} />
      <Box
        css={{
          background:
            "radial-gradient(circle at 15% 50%, $green4, rgba(255, 255, 255, 0) 25%), radial-gradient(circle at 85% 30%, $sage7, rgba(255, 255, 255, 0) 25%)",
        }}
      >
        <Box css={{ textAlign: "center", padding: "$4" }}>
          {theme === "light" ? (
            <ThemeSwitch onClick={() => setTheme("dark")}>
              <MoonIcon />
            </ThemeSwitch>
          ) : (
            <ThemeSwitch onClick={() => setTheme("light")}>
              <SunIcon />
            </ThemeSwitch>
          )}
        </Box>
        <Box css={{ "@lg": { padding: "0 8%" } }}>
          <Box
            css={{
              display: "grid",
              placeContent: "center",
              textAlign: "center",
              paddingTop: 100,
            }}
          >
            <Headline>{META.headline}</Headline>
            <SubHeadline>{META.subheadline}</SubHeadline>
            <Box
              ref={ref}
              css={{
                paddingTop: 26,
                "@md": { "a:last-of-type": { marginLeft: 12 } },
              }}
            >
              <SignUp />
              <Link href="#about" passHref>
                <Button as="a" outlined>
                  {META.aboutButton}
                </Button>
              </Link>
            </Box>
          </Box>
          <Box css={{ display: "grid", placeContent: "center" }}>
            <Alert role="alert" css={{ svg: { marginLeft: 12 } }}>
              {META.alert}
              <ArrowRightIcon />
            </Alert>
          </Box>
        </Box>
      </Box>
      <Box css={{ "@lg": { padding: "0 8%" } }}>
        <Box
          css={{
            padding: "0 $5",
            display: "grid",
            gridTemplateColumns: "1fr",
            gridGap: "38px",
            "@sm": { gridTemplateColumns: "1fr 1fr", gridGap: "48px" },
            "@lg": { gridTemplateColumns: "1fr 1fr 1fr 1fr", gridGap: "36px" },
          }}
        >
          {UNIQUESELLINGPOINTS.map(({ headline, description, Icon }) => (
            <SellingPoint
              key={headline}
              headline={headline}
              description={description}
              Icon={<Icon />}
            />
          ))}
        </Box>
        <SectionHeadline id="about">{META.aboutButton}</SectionHeadline>
        {ABOUTUSPOINTS.map((aboutUsPoint) => (
          <Box key={aboutUsPoint.tag} css={{ padding: "40px $5" }}>
            <SellingPointLarge {...aboutUsPoint} />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Home;
