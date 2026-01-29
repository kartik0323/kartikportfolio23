import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
// Remove the following line if siteMetadata is not used
// import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "AI Virtual Mouse",
    href: "/projects",
    tags: ["Python", "Machine Learning"],
    image: {
      LIGHT: "/images/projects/volumecontrol.webp",
      DARK: "/images/projects/volumecontrol.webp",
    },
  },
  {
    index: 1,
    title: "Doubtvcet",
    href: "/projects",
    tags: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Vercel",
      "REST API",
    ],
    image: {
      LIGHT: "/images/projects/doubtvcet.webp",
      DARK: "/images/projects/doubtvcet.webp",
    },
  },
  {
    index: 2,
    title: "UX CASE STUDY",
    href: "/projects",
    tags: ["Adobe XD", "Figma"],
    image: {
      LIGHT: "/images/projects/uxstudy.png",
      DARK: "/images/projects/uxstudy.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "AI Virtual Mouse",
    favicon: "/images/projects/logos/ML.ico",
    imageUrl: [
      "/images/projects/volumecontrol.webp",
      "/images/projects/volumecontrol.webp",
    ],
    description: "A virtual mouse that uses gestures to control your PC.",
    sourceCodeHref:
      "https://github.com/kartik2303/virtual-mouse-using-hand-gestures",
  },
  {
    name: "Doubtvcet",
    favicon: "/images/projects/logos/reactjs.ico",
    imageUrl: [
      "/images/projects/doubtvcet.webp",
      "/images/projects/doubtvcet.webp",
    ],
    description:
      "This website is designed for students who are shy about asking questions in front of the whole class.",
    sourceCodeHref: "https://github.com/kartik0323/doubtvcet12",
    liveWebsiteHref: "https://doubtvcet.me",
  },
  {
    name: "My Portfolio",
    favicon: "/favicon.ico",
    imageUrl: ["/static/homepage.png"],
    description:
      "My personal portfolio website built using Next.js, Tailwind CSS, and Framer Motion.",
    sourceCodeHref: "https://github.com/kartik0323/kartikportfolio23",
    liveWebsiteHref: "https://kartikpoojary.tech",
  },
  {
    name: "UTS UX Case Study",
    favicon: "/images/projects/logos/figma.ico",
    imageUrl: [
      "/images/projects/uxstudy1.png",
      "/images/projects/uxstudy2.png",
      "/images/projects/uxstudy3.png",
      "/images/projects/uxstudy4.png",
      "/images/projects/uxstudy5.png",
      "/images/projects/uxstudy6.png",
      "/images/projects/uxstudy7.png",
      "/images/projects/uxstudy8.png",
      "/images/projects/uxstudy9.png",
      "/images/projects/uxstudy10.png",
      "/images/projects/uxstudy11.png",
      "/images/projects/uxstudy12.png",
      "/images/projects/uxstudy13.png",
    ],
    description: "A Case study on User Experience of UTS App.",
    sourceCodeHref:
      "https://github.com/kartik2303/virtual-mouse-using-hand-gestures",
  },
  {
    name: "Anmol Furniture",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/anmol.png"],
    description:
      "An Ecommerce website for furniture business with admin panel.",
    sourceCodeHref:
      "https://github.com/anmolfurniturebazaar/anmolfurniturebazar",
    liveWebsiteHref: "https://anmolfurniturebazar.vercel.app/",
  },

  {
    name: "Padmavati travels",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/padmavati.png"],
    description:
      "An invoice generator and business management system for padmavati travels.",
    sourceCodeHref: "https://github.com/PadmavatiTravels/Padmavati-Travels",
    liveWebsiteHref: "https://padmavati-travels.vercel.app/",
  },

  {
    name: "bluewhale restro",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/bluewhale.png"],
    description:
      "An Asian cuisine restaurant website for booking purpose built using Next.js, Tailwind CSS, and Framer Motion.",
    sourceCodeHref: "https://github.com/Bluewhalelagos/Blue-Whale-Asian",
    liveWebsiteHref: "http://blue-whale-asian.vercel.app/",
  },
];
