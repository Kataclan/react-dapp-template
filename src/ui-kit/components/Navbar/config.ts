import { DropdownMenuItem } from "../MenuDropdown";

export const TOOLS_MENU_ITEMS: DropdownMenuItem[] = [
  {
    title: "Notifications",
    href: "/tools/notifications",
    disabled: false,
  },
];

export const NAVBAR_MENU: {
  title: string;
  to: string;
  children: DropdownMenuItem[];
  disabled?: boolean;
}[] = [
  {
    title: "Home",
    to: "/",
    children: [],
  },
  {
    title: "Tools",
    to: "/tools",
    children: TOOLS_MENU_ITEMS,
  },
  {
    title: "Other",
    to: "",
    children: [],
    disabled: true,
  },
];
