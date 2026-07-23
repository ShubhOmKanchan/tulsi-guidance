export interface NavigationItem {
  label: string;
  href: string;
}

export const navigationConfig = {
  philosophy: {
    position: "top",
    links: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Offerings",
        href: "/offerings",
      },
      {
        label: "Reflections",
        href: "/stories",
      },
      {
        label: "Contact",
        href: "/contact",
      },
    ],
    callbackDirection: "horizontal",
  },

  offerings: {
    position: "right",
    links: [
      {
        label: "Philosophy",
        href: "/philosophy",
      },
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Reflections",
        href: "/stories",
      },
    ],
    callbackDirection: "vertical",
  },
  stories: {
    position: "top",
    links: [
        { label: "Home", href: "/" },
        { label: "Philosophy", href: "/philosophy" },
        { label: "Offerings", href: "/offerings" },
        { label: "Contact", href: "/contact" },
    ],
    callbackDirection: "horizontal",
    },
    contact: {
    position: "top",
    callbackDirection: "horizontal",
    links: [
      { label: "Home", href: "/" },
      { label: "Philosophy", href: "/philosophy" },
      { label: "Offerings", href: "/offerings" },
      { label: "Reflections", href: "/stories" },
    ],
  },
  home: {
  position: "top",
  callbackDirection: "horizontal",
  links: [
    { label: "Philosophy", href: "/philosophy" },
    { label: "Offerings", href: "/offerings" },
    { label: "Reflections", href: "/stories" },
    { label: "Contact", href: "/contact" },
  ],
},
} as const;

export type NavigationPage = keyof typeof navigationConfig;