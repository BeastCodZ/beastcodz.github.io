export interface Project {
  title: string;
  href: string;
  image: string;
  imageAlt: string;
  status: string;
  statusColor?: string;
  description: string;
}

export const projects: Project[] = [
  {
    title: "WinKey",
    href: "/projects/WinKey",
    image: "/projects/WinKey/winkey.webp",
    imageAlt: "WinKey",
    status: "[Archived] Successor: FallenKey",
    statusColor: "text-(--accent-soft)",
    description:
      "A desktop authenticator featuring TOTP generation, backup and restore functionality, Google Drive synchronization, and a refined user experience. Designed to make managing two-factor authentication effortless while keeping security and reliability at the core.",
  },

  {
    title: "Project Fallen",
    href: "/projects/Fallen",
    image: "/projects/Fallen/arch.webp",
    imageAlt: "Arch Linux",
    status: "In Development",
    description:
      "Fallen is a custom ecosystem that connects Arch Linux and Android into a seamless platform. Built around secure device integration, an integrated two-factor authenticator, and developer-focused utilities, it aims to simplify workflows while maintaining full user control, privacy, and performance.",
  },

  {
    title: "UniLost",
    href: "https://unilost.vercel.app",
    image: "/projects/UniLost/tiet.webp",
    imageAlt: "UniLost",
    status: "In Development",
    description:
      "Accessibility-focused platform built to solve everyday campus problems and improve the student experience.",
  },
];