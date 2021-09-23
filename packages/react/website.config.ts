export const seo = {
  title: "Neue Frisur? Gibt's bei uns!",
  description:
    "Wir schneiden dir die Harre! Aber mal so richtig! Komm vorbei und überzeug dich selbst.",
  canonical: "https://friseur.vercel.app",
  openGraph: {
    url: "https://friseur.vercel.app",
    title: "Neue Frisur? Gibt's bei uns!",
    description:
      "Wir schneiden dir die Harre! Aber mal so richtig! Komm vorbei und überzeug dich selbst.",
    images: [
      {
        url: "https://friseur.vercel.app/seo-thumbnail-small.png",
        width: 800,
        height: 418,
        alt: "Og Image Alt Small",
      },
      {
        url: "https://friseur.vercel.app/seo-thumbnail.png",
        width: 1012,
        height: 506,
        alt: "Og Image Alt",
      },
    ],
    site_name: "Friseur",
  },
  twitter: {
    cardType: "summary_large_image",
  },
};

import {
  RocketIcon,
  PersonIcon,
  BackpackIcon,
  CrumpledPaperIcon,
} from "@modulz/radix-icons";

export const META = {
  headline: "Looking for a real hairstyle?",
  subheadline:
    "We mean a real one. One with which even coding works again. If so, let's talk!",
  aboutButton: "Tell me more",
  signupButton: "Take my money...",
  alert: "We are getting ready for takeoff. Let us inform you when it starts.",
  callToAction: "Already decided? Then just book an appointment.",
};

export const UNIQUESELLINGPOINTS = [
  {
    headline: "Digital",
    description:
      "Ever heard of a digital haircut? No? We got it! We use state of the art and cutting edge tech and AI (sure, AI) to bring you your favorite haircut right through your screen.",
    Icon: RocketIcon,
  },
  {
    headline: "Real advice",
    description:
      "We now more that just a hair trimmers. We analyze you and your lifestyle and finde the right haircut. Futuristic like the mane of Alf or a more conservative haircut like Yoda?",
    Icon: PersonIcon,
  },
  {
    headline: "Hairdresser craft",
    description:
      "Learned once, mastered forever? Nope. Our AI are constantly learning. Machine Learning, you know?",
    Icon: BackpackIcon,
  },
  {
    headline: "Just a haircut",
    description:
      "With us you get exactly what you need. We are not a wellness temple that wants to give you some creams. Just some AI that cuts hair. No big deal!",
    Icon: CrumpledPaperIcon,
  },
];

export const ABOUTUSPOINTS = [
  {
    headline: "The pay at hairdressers is crap.",
    tag: "Digital",
    description: [
      "Before each visit to the hairdresser, check your change again. And give tip via card payment does not work. Or call first whether there is still an appointment?",
      "That's because most hairdressers have miserable POS systems or billing tools that no one understands.",
      "With us all no problem. Payment via Ethereum? Before or directly with us? Tip directly on it? We do!",
    ],
    bulletPoints: [
      "Cashless payment, whether with us or before.",
      "Crypto, NFTs, PayPal, Apple-/Google Pay.",
    ],
  },
  {
    headline: "Consulting should be a matter of honor and not a nuisance.",
    tag: "Real consulting",
    description: [
      "Are you a man? Then you know the question: 'How many millimeters should it be?' As a woman you might have had the problem: You get a hairstyle that looks good for the moment, but as soon as you take a shower it's all gone.",
      "That's because you often don't get proper advice at all.",
      "Our machines know you even before you contact us. - We just analyzed your browser history. Are you totally fancy or do you like it more minimalistic? How much time do you take for your hair? We now it!",
    ],
    bulletPoints: [
      "Individual consultation to find the right hairstyle.",
      "We remember your wishes so that we get better every time and you get happier.",
    ],
  },
  {
    headline: "We never stop learning to offer you the best craftsmanship.",
    tag: "Hairdresser craft",
    description: [
      "Many hairdressers do not know current trends or even classic cuts.",
      "This is because often not enough is done for the continuing education of hairdressers.",
      "With us, our AI has the chance to develop individually or as part of a team. At night ofcourse.",
    ],
    bulletPoints: [
      "Top trained AI who master their craft.",
      "Further education and training are part of our nightly tasks.",
    ],
  },
];
