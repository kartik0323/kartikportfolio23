import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

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
    name: "Doubtvcet",
    favicon: "/images/projects/logos/reactjs.ico",
    imageUrl: [
      "/images/projects/doubtvcet.webp",
      "/images/projects/doubtvcet.webp",
    ],
    description:
      "This website is designed for those students who are shy about to ask doubts in front of whole class.",
    sourceCodeHref: "https://github.com/kartik0323/doubtvcet12",
    liveWebsiteHref: "https://doubtvcet.me",
  },
  {
    name: "My portfolio",
    favicon: "/favicon.ico",
    imageUrl: ["/static/homepage.png"],
    description:
      "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
    sourceCodeHref: "https://github.com/kartik0323/kartikportfolio23",
    liveWebsiteHref: "https://kartikpoojary.tech",
  },
];
