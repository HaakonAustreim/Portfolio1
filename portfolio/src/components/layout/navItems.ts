import { Home, FolderKanban, Wrench, Mail } from "lucide-react";
import type { NavItem } from "../../types";

export const navItems: NavItem[] = [
  { id: "about", label: "Om meg", icon: Home },
  { id: "projects", label: "Prosjekter", icon: FolderKanban },
  { id: "skills", label: "Mestringer", icon: Wrench },
  { id: "contact", label: "Kontakt", icon: Mail },
];
