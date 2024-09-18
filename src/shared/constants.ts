type Project = {
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
  url?: string;
};

export type Link = {
  href: string;
  label: string;
};

export const projects: Project[] = [
  {
    title: "DFK Group",
    description:
      "Real Estate website for a Germany-based company, DFK Group. Built with the Evelan Website Builder with Sanity CMS.",
    tags: ["Next.js (App Router)", "Typescript", "Tailwind", "Sanity CMS"],
    imageSrc: "/dfk-group.png",
    url: "www.dfkgroup.de",
  },
  {
    title: "Evelan Website Builder (Evelan Website)",
    description:
      "The new version of evelan.de, build with Sanity CMS, with pre-built sections for adapting to custom theming",
    tags: ["Next.js (App Router)", "Typescript", "Tailwind", "Sanity CMS"],
    imageSrc: "/evelan.png",
    url: "www.next.evelan.de",
  },
  {
    title: "Shama Travel & Tours Dashboard",
    description:
      "Real Estate website for a Germany-based company, DFK Group. Built with the Evelan Website Builder with Sanity CMS.",
    tags: [
      "Next.js (App Router)",
      "Typescript",
      "Tailwind",
      "Supabase",
      "React Query",
    ],
    imageSrc: "/shama.png",
  },
  {
    title: "sanity-plugin-ui-intl",
    description:
      "Real Estate website for a Germany-based company, DFK Group. Built with the Evelan Website Builder with Sanity CMS.",
    tags: ["NPM Package", "Open-Source", "Typescript", "Github Actions"],
    imageSrc: "/npm.webp",
    url: 'www.github.com/evelan-de/sanity-plugin-ui-intl/'
  },
];

export const links: Link[] = [
  {
    label: "Home",
    href: "/",
  },
  // {
  //   label: "About",
  //   href: "/about",
  // },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const socialLinks: Link[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/giangonzaga5947/",
  },
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/gian-gonzaga-327497281/",
  },
  {
    label: "Github",
    href: "https://github.com/ggonzaga29"
  }
];
