export type MenuItem = {
  id: number;
  title: string;
  link: string;
  subMenu?: { id: number; title: string; link: string }[];
};

export const NavbarMenu: MenuItem[] = [
  {
    id: 1,
    title: "Product",
    link: "#", // Keeps dropdown clickable
    subMenu: [
      { id: 11, title: "Business Plans", link: "#business-plans" },
      { id: 12, title: "Features", link: "#features" },
    ],
  },
  {
    id: 2,
    title: "Resources",
    link: "#business-analyze",
  },
  {
    id: 3,
    title: "Contacts",
    link: "#contacts",
  },
  // Uncomment if needed
  // {
  //   id: 4,
  //   title: "Blog",
  //   link: "/blogs",
  // },
];
