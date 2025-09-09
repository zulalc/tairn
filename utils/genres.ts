import {
  FaBolt,
  FaBook,
  FaBookOpen,
  FaBrain,
  FaBuilding,
  FaCameraRetro,
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
  FaLayerGroup,
  FaOm,
  FaPenFancy,
  FaPlane,
  FaRobot,
  FaRunning,
  FaUserGraduate,
  FaUserSecret,
} from "react-icons/fa";
import { IconType } from "react-icons";

export type Genre = {
  name: string;
  icon: IconType;
  selected: boolean;
};

export const genres: Genre[] = [
  { name: "Mixed Genres", icon: FaLayerGroup, selected: false },
  { name: "Action & Adventure", icon: FaRunning, selected: false },
  { name: "Art & Photography", icon: FaCameraRetro, selected: false },
  { name: "Biography", icon: FaIdBadge, selected: false },
  { name: "Classics", icon: FaFeatherAlt, selected: false },
  { name: "Contemporary", icon: FaBuilding, selected: false },
  { name: "Dystopian", icon: FaCity, selected: false },
  { name: "Fantasy", icon: FaDragon, selected: false },
  { name: "Graphic Novels", icon: FaBook, selected: false },
  { name: "Historical Fiction", icon: FaLandmark, selected: false },
  { name: "Horror", icon: FaGhost, selected: false },
  { name: "Humor", icon: FaLaugh, selected: false },
  { name: "Mystery", icon: FaUserSecret, selected: false },
  { name: "Non-Fiction", icon: FaBookOpen, selected: false },
  { name: "Philosophy", icon: FaBrain, selected: false },
  { name: "Poetry", icon: FaPenFancy, selected: false },
  { name: "Religion & Spirituality", icon: FaOm, selected: false },
  { name: "Romance", icon: FaHeart, selected: false },
  { name: "Science", icon: FaFlask, selected: false },
  { name: "Self-Help", icon: FaHandsHelping, selected: false },
  { name: "Sci-Fi", icon: FaRobot, selected: false },
  { name: "Thriller & Suspense", icon: FaBolt, selected: false },
  { name: "Young Adult", icon: FaUserGraduate, selected: false },
];
