import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

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
      "A virtual mouse that uses hand gestures to control your PC.",
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
      "A website designed for students who are shy to ask doubts in front of the whole class.",
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
];
