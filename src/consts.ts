import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Mihnea Petcu",
  DESCRIPTION: "Hi, I’m Mihnea Petcu. This is my portfolio, where code meets curiosity and cybersecurity.",
  AUTHOR: "Mihnea Petcu",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "mihnea1009@gmail.com",
    HREF: "mailto:mihnea1009@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "M1HNE41",
    HREF: "https://github.com/M1HNE41"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Mihnea Petcu",
    HREF: "https://www.linkedin.com/in/mihnea-petcu-458467216/",
  },
]

