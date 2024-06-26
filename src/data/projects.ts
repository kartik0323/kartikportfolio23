import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "AI Virtual Mouse",
    href: "/projects",
    tags: ["python", "Machinine Learning"],
    image: {
      LIGHT: "/images/projects/volumecontrol.webp",
      DARK: "/images/projects/volumecontrol.webp",
    },
  },
  {
    index: 1,
    title: "Poster",
    href: "/projects",
    tags: [],
    image: {
      LIGHT: "/images/projects/extemporeposter.webp",
      DARK: "/images/projects/extemporeposter.webp",
    },
  },
  {
    index: 2,
    title: "Doubvcet",
    href: "/projects",
    tags: ["Reactjs", "Nodejs", "MongoDB", "Expressjs", "Verce;", "Rest API"],
    image: {
      LIGHT: "/images/projects/doubtvcet.webp",
      DARK: "/images/projects/doubtvcet.webp",
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
    description:
      "It is and virtual mouse used for controlling your pc just by gestures ",
    sourceCodeHref:
      "https://github.com/kartik2303/virtual-mouse-using-hand-gestures",
  },
  {
    name: "Adobe PS",
    favicon: "/images/projects/logos/PS.ico",
    imageUrl: [
      "/images/projects/extemporeposter.webp",
      "/images/projects/litfest.webp",
    ],
    description: "",
    sourceCodeHref: "https://github.com/",
    liveWebsiteHref: "https:",
  },
  {
    name: "Doubtvcet",
    favicon: "/images/projects/logos/reactjs.ico",
    imageUrl: [
      "/images/projects/doubtvcet.webp",
      "/images/projects/doubtvcet.webp",
    ],
    description:
      "Many short and fun games using Reactjs, Typescript and Tailwindcss with collaboration with other developers",
    sourceCodeHref: "https://github.com/kartik0323/doubtvcet12",
    liveWebsiteHref: "https://doubtvcet.me",
  },
  {
    name: "My portfolio",
    favicon: "/favicon.ico",
    imageUrl: [],
    description:
      "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
    sourceCodeHref: "",
    liveWebsiteHref: siteMetadata.siteUrl,
  },
];
