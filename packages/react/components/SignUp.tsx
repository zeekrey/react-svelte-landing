import { styled, keyframes } from "../stitches.config";
import { useState } from "react";
import { blackA } from "@radix-ui/colors";
import { Cross2Icon } from "@modulz/radix-icons";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import Image from "next/image";

import Button from "./Button";

import SignUpImage from "../public/signup.jpg";

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: blackA.blackA9,
  position: "fixed",
  inset: 0,
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});

//@ts-ignore
function Root({ children, ...props }) {
  return (
    <DialogPrimitive.Root {...props}>
      <StyledOverlay />
      {children}
    </DialogPrimitive.Root>
  );
}

const StyledContent = styled(DialogPrimitive.Content, {
  backgroundColor: "$sage12",
  borderRadius: 6,
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "600px",
  maxHeight: "85vh",
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    willChange: "transform",
  },
  "&:focus": { outline: "none" },
});

// Exports
const Dialog = Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogContent = StyledContent;
const DialogClose = DialogPrimitive.Close;

const IconButton = styled("button", {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: 25,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$green1",
  position: "absolute",
  top: 10,
  right: 10,
  cursor: "pointer",

  "&:hover": { backgroundColor: "$green7" },
  "&:focus": { boxShadow: `0 0 0 2px $green6` },

  transition: "all 0.1s",
});

const Fieldset = styled("fieldset", {
  all: "unset",
  display: "flex",
  flexDirection: "column",
  padding: "$1 0",

  "&:first-of-type": {
    marginTop: "$2",
  },
});

const Label = styled("label", {
  fontSize: 12,
  color: "$green8",
  paddingBottom: "$1",
  fontWeight: "bold",
});

const Input = styled("input", {
  all: "unset",
  flex: "1",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "$2",
  fontSize: 15,
  lineHeight: 1,
  color: "$sage1",
  boxShadow: `0 0 0 1px $green7`,

  "&:focus": { boxShadow: `0 0 0 2px $green8` },
});

const Box = styled("div", {});

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

  const submit = async () => {
    setLoading(true);
    if (!name || !email)
      alert("Bitte gib deinen Namen und deine eMail-Adresse ein.❤");

    const { status } = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });

    if (status === 200) {
      setHasBeenSubmitted(true);
    } else alert("Tut uns leid. Wir haben wohl gerade ein Problem.😥");
  };

  return (
    <Dialog>
      <Button as={DialogTrigger}>Termin buchen</Button>
      <DialogContent>
        <Box css={{ display: "flex" }}>
          <Box
            css={{
              flex: 1,
              overflow: "hidden",
              borderTopLeftRadius: 6,
              borderBottomLeftRadius: 6,
              display: "none",
              "@sm": {
                display: "block",
              },
            }}
          >
            <Image
              src={SignUpImage}
              layout="responsive"
              width="3948"
              height="5922"
              alt="barber"
            />
          </Box>
          <Box
            css={{
              flex: 1,
              padding: "$5",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {hasBeenSubmitted ? (
              <p>
                Das hat geklappt! 🥰 Wir melden uns bei dir, wenn es los geht.
              </p>
            ) : (
              <>
                Wir brauchen leider noch ein bisschen Zeit um alles
                vorzubereiten. Bis dahin kannst du uns hier deine eMail-Adresse
                hinterlassen. Dann melden wir uns{" "}
                <strong>- auch wirklich nur dann -</strong> wenn wir unseren
                Salon öffnen.
                <form onSubmit={submit}>
                  <Fieldset>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Fieldset>
                  <Fieldset>
                    <Label htmlFor="email">eMail Adresse</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Fieldset>
                  <Box
                    css={{
                      display: "flex",
                      marginTop: 25,
                      justifyContent: "flex-end",
                    }}
                  >
                    <Button type="submit" disabled={loading}>
                      Sagt Bescheid
                    </Button>
                  </Box>
                </form>
              </>
            )}
          </Box>
        </Box>
        <DialogClose as={IconButton} aria-label="Close">
          <Cross2Icon />
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default SignUp;
