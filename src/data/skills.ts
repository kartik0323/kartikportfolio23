import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";
import { SiExpress, SiFlask } from "react-icons/si";

// Languages
import CPP from "@/public/icons/C++.svg";
import CsssSvg from "@/public/icons/css.svg";
import HtmlSvg from "@/public/icons/html.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import PythonSvg from "@/public/icons/python.svg";

// Libraries
import AE from "@/public/icons/AE.svg";
import AI from "@/public/icons/AI.svg";
import CI from "@/public/icons/CI.svg";
import FI from "@/public/icons/FI.svg";
import PR from "@/public/icons/PR.svg";
import PS from "@/public/icons/PS.svg";
import XD from "@/public/icons/XD.svg";

// Backend
import NodejsSvg from "@/public/icons/nodejs.svg";
import react from "@/public/icons/reactjs.svg";

// Database and ORMS
import MongoDBSvg from "@/public/icons/mongodb.svg";
import mysqlicon from "@/public/icons/mysql-icon.svg";

// Tools and Tech
import AwsSvg from "@/public/icons/aws.svg";
import GitSvg from "@/public/icons/git.svg";
import PostmanSvg from "@/public/icons/postman.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "HTML",
        icon: HtmlSvg,
      },
      {
        name: "CSS",
        icon: CsssSvg,
      },
      {
        name: "Javascript",
        icon: JavascriptSvg,
      },
      {
        name: "Python",
        icon: PythonSvg,
      },
      {
        name: "C++",
        icon: CPP,
      },
    ],
  },
  {
    sectionName: "UI/UX & GRAPHIC DESIGNING",
    skills: [
      {
        name: "XD",
        icon: XD,
      },
      {
        name: "PHOTOSHOP",
        icon: PS,
      },
      {
        name: "ILLUSTRATOR",
        icon: AI,
      },
      {
        name: "FIGMA",
        icon: FI,
      },
      {
        name: "CANVA",
        icon: CI,
      },
      {
        name: "PREMIERE PRO",
        icon: PR,
      },
      {
        name: "AFTER EFFECTS",
        icon: AE,
      },
    ],
  },
  {
    sectionName: "Web Development",
    skills: [
      {
        name: "Nodejs",
        icon: NodejsSvg,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      {
        name: "Reactjs",
        icon: react,
      },
      {
        name: "Flask",
        icon: SiFlask,
      },
    ],
  },
  {
    sectionName: "Databases and ORMs",
    skills: [
      {
        name: "MongoDB",
        icon: MongoDBSvg,
      },
      {
        name: "mysql",
        icon: mysqlicon,
      },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Git",
        icon: GitSvg,
      },
      {
        name: "AWS",
        icon: AwsSvg,
      },
      {
        name: "Postman",
        icon: PostmanSvg,
      },
    ],
  },
];
