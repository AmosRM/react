// Skills icons - https://react-icons.github.io/react-icons/
import {
  FaGitAlt,
  FaGithubSquare,
  FaLink,
  FaPython,
} from "react-icons/fa";
import { SiJavascript, SiStyledcomponents, SiRedux, SiMysql, SiSqlite, SiTableau, SiRstudio, SiR } from "react-icons/si";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "AmosRM";

// Blog link icon (imported above)
export const Blog = <FaLinkedinIn />;


/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "Hi! I am Amos, an Israeli living in Asia.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, there must be one icon imported above per skill below.
*/
export const skillData = [
  {
    id: 1,
    skill: <FaPython className="display-4" />,
    name: "Python",
  },
  {
    id: 2,
    skill: <SiSqlite className="display-4" />,
    name: "SQLite",
  },
  {
    id: 3,
    skill: <SiTableau className="display-4" />,
    name: "Tableau",
  },
  {
    id: 4,
    skill: <SiR className="display-4" />,
    name: "R",
  },
  {
    id: 5,
    skill: <FaGithubSquare className="display-4" />,
    name: "GitHub",
  },
  {
    id: 6,
    skill: <SiMysql className="display-4" />,
  }
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "example-2", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 13-14)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/xwkzpyzq";
