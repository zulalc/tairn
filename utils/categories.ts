import {
  FaBolt,
  FaBook,
  FaBookOpen,
  FaBrain,
  FaBuilding,
  FaCameraRetro,
  FaChild,
  FaCity,
  FaDragon,
  FaFeatherAlt,
  FaFlask,
  FaGhost,
  FaHandsHelping,
  FaHeart,
  FaIdBadge,
  FaLandmark,
  FaLaugh,
  FaOm,
  FaPenFancy,
  FaPlane,
  FaRobot,
  FaRunning,
  FaUserGraduate,
  FaUserSecret,
  FaUtensils,
} from "react-icons/fa";
import { IconType } from "react-icons";

type Category = {
  label: CategoryLabel;
  icon: IconType;
};

export type CategoryLabel =
  | "Fantasy"
  | "Sci-Fi"
  | "Mystery"
  | "Romance"
  | "Horror"
  | "Non-Fiction"
  | "Historical Fiction"
  | "Thriller & Suspense"
  | "Young Adult"
  | "Classics"
  | "Biography"
  | "Self-Help"
  | "Poetry"
  | "Graphic Novels"
  | "Action & Adventure"
  | "Dystopian"
  | "Contemporary"
  | "Humor"
  | "Philosophy"
  | "Science"
  | "Art & Photography"
  | "Religion & Spirituality";

export const categories: Category[] = [
  { label: "Fantasy", icon: FaDragon },
  { label: "Sci-Fi", icon: FaRobot },
  { label: "Mystery", icon: FaUserSecret },
  { label: "Romance", icon: FaHeart },
  { label: "Horror", icon: FaGhost },
  { label: "Non-Fiction", icon: FaBookOpen },
  { label: "Historical Fiction", icon: FaLandmark },
  { label: "Thriller & Suspense", icon: FaBolt },
  { label: "Young Adult", icon: FaUserGraduate },
  { label: "Classics", icon: FaFeatherAlt },
  { label: "Biography", icon: FaIdBadge },
  { label: "Self-Help", icon: FaHandsHelping },
  { label: "Poetry", icon: FaPenFancy },
  { label: "Graphic Novels", icon: FaBook },
  { label: "Action & Adventure", icon: FaRunning },
  { label: "Dystopian", icon: FaCity },
  { label: "Contemporary", icon: FaBuilding },
  { label: "Humor", icon: FaLaugh },
  { label: "Philosophy", icon: FaBrain },
  { label: "Science", icon: FaFlask },
  { label: "Art & Photography", icon: FaCameraRetro },
  { label: "Religion & Spirituality", icon: FaOm },
];
