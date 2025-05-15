export type Project = {
  title: string;
  description: string;
  link: string;
  image: string;
  tech: string[];
  slug: string;
  details: string;
  employer: string;
};

export const projects: Project[] = [
  {
    title: "Whatsoever.biz",
    description:
      "A web app for naming work, bringing the steps of the naming process under one roof.",
    link: "https://whatsoever.biz",
    image: "/whatsoever-biz.png",
    tech: [
      "Next.js",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Clerk",
      "Vercel",
      "Zustand",
    ],
    slug: "whatsoever-biz",
    details:
      "Whatsoever is a home for naming work, providing tools and structure to facilitate and enrich the naming process for creative agencies, freelancers, and anyone naming companies, products, or services. The app guides users through industry best practices, from briefing to ideation, shortlisting, validation, and decision-making.",
    employer: "Whatsoever",
  },
  {
    title: "Grid.lol",
    description:
      "Create and share video grids and pairs. Organize your favorite videos into customizable layouts and share them with friends or keep them private.",
    link: "https://www.grid.lol",
    image: "/grid-lol.png",
    tech: [
      "Next.js",
      "Appwrite",
      "TailwindCSS",
      "YouTube API",
      "Vercel",
      "Zustand",
    ],
    slug: "grid-lol",
    details:
      "Grid.lol is a web app for curating, organizing, and sharing collections of videos in grid or pair formats. Users can create topic-based video collections, playlists, educational content, or direct video comparisons, and share them publicly or privately. The platform features easy YouTube integration, customizable layouts, and a community-driven showcase of featured grids and pairs.",
    employer: "Solo",
  },
  {
    title: "Aimi Dashboard",
    description:
      "A device management dashboard for Aimi Player Pro, enabling users to manage device licenses, subscriptions, and more.",
    link: "#",
    image: "/aimi-dashboard.png",
    tech: [
      "Next.js",
      "Stripe",
      "TailwindCSS",
      "Shadcn/UI",
      "GraphQL",
      "Vercel",
      "Nx",
    ],
    slug: "aimi-dashboard",
    details:
      "Aimi Dashboard is a web interface for managing devices and subscriptions for Aimi Player Pro. Users can view eligible devices, add or remove devices, and manage their Pro features, including commercial licenses, multi-device playback, and offline access. The dashboard provides a clear overview of device status and subscription management, streamlining the user experience for commercial and public use.",
    employer: "Aimi.fm",
  },
  {
    title: "Aimi Sync",
    description:
      "A web app for synchronizing royalty-free music with video. The music is generated and synced in real time.",
    link: "https://sync.aimi.fm",
    image: "/aimi-sync.png",
    tech: ["Next.js", "Svelte", "TailwindCSS", "Google Cloud", "Zustand"],
    slug: "aimi-sync",
    details:
      "Aimi Sync allows users to synchronize royalty-free music with video in real time. Designed for ease of use with commercial and short form video, ensuring everyone stays in perfect sync. The app features controls and options for music genres and preferences.",
    employer: "Aimi.fm",
  },
  {
    title: "Aimi Studio",
    description:
      "A collaborative music creation platform that empowers users to compose, edit, and share generative music experiences.",
    link: "https://studio.aimi.fm",
    image: "/aimi-studio.png",
    tech: ["Next.js", "Electron", "TailwindCSS", "Nx", "GraphQL", "Vercel"],
    slug: "aimi-studio",
    details:
      "Aimi Studio was an innovative web-based platform for creating and sharing generative music. It provides intuitive tools for composing, editing, and creating generative music experiences, leveraging the power of Aimi's generative music models and premium samples for real-time audio creation. Users can experiment with generative elements, and publish their creations to the Aimi ecosystem. The platform is designed for musicians, producers, and enthusiasts seeking new ways to explore and share music.",
    employer: "Aimi.fm",
  },
  {
    title: "Splice Desktop",
    description:
      "A desktop application for seamless sample, plugin, and preset management, and integration with music production workflows.",
    link: "#",
    image: "/splice-desktop.png",
    tech: ["Electron", "TypeScript", "Angular", "GraphQL", "Nx"],
    slug: "splice-desktop",
    details:
      "Splice Desktop is a cross-platform desktop app designed for music producers to manage, sync, and organize their sample, plugin, and preset libraries. It offers integration with DAWs, a large sample library, and intuitive tools for browsing, auditioning, and importing samples. Built with Electron and Angular, Splice Desktop streamlines the creative workflow, making it easy to access and use samples in any production environment.",
    employer: "Splice",
  },
  {
    title: "1stDibs",
    description:
      "A premier online marketplace for luxury furniture, art, jewelry, and fashion from the world's best dealers and designers.",
    link: "#",
    image: "/1stDibs.png",
    tech: ["React", "Relay", "gRPC", "GraphQL", "Redux", "Jest"],
    slug: "1stdibs",
    details:
      "1stDibs is a leading online platform connecting discerning buyers with top dealers and galleries around the globe. The site features a curated selection of high-end furniture, fine art, jewelry, and fashion, offering a seamless shopping experience with advanced search, personalized recommendations, and secure transactions. Built with modern web technologies, 1stDibs delivers a visually rich and user-friendly interface for luxury shopping.",
    employer: "1stDibs",
  },
  {
    title: "MasterPass",
    description:
      "A digital wallet and payment service by Mastercard, designed to simplify and secure online and in-store purchases worldwide.",
    link: "#",
    image: "/masterpass.png",
    tech: ["Vue", "SCSS", "Mastercard APIs", "Vuex", "Jest"],
    slug: "masterpass",
    details:
      "MasterPass by Mastercard was a global digital wallet platform enabling users to store payment and shipping information for fast, secure online and in-store checkouts. Supporting cards from multiple networks, MasterPass offered seamless integration with web and mobile merchants, advanced security features like tokenization, and a user-friendly experience. It was available in over 70 countries and helped millions of consumers and merchants streamline digital payments before transitioning to 'Click to Pay.'",
    employer: "InRhythm",
  },
  {
    title: "NikeID",
    description:
      "An innovative online platform by Nike that allowed users to design and customize their own shoes with unique colors, materials, and personal touches.",
    link: "#",
    image: "/NikeID.png",
    tech: ["jQuery", "Handlebars", "SCSS", "Mocha", "Sinon"],
    slug: "nikeid",
    details:
      "NikeID was a groundbreaking digital experience enabling customers to personalize Nike footwear online. Users could select models, choose colors, materials, and add custom text or graphics, previewing their designs in real time. The platform combined advanced 3D visualization with seamless e-commerce, empowering self-expression and creativity in sneaker culture. NikeID set the standard for mass customization in the footwear industry and evolved into Nike By You.",
    employer: "R/GA",
  },
];

export type PastWork = {
  client: string;
  project: string;
  year: number;
};

export const pastWork: PastWork[] = [
  { client: "Alchemy Distillery", project: "WordPress Website", year: 2019 },
  { client: "One Sight", project: "Ruby on Rails", year: 2015 },
  {
    client: "Friends of the Children",
    project: "Craft CMS",
    year: 2014,
  },
  { client: "Bluer Denim", project: "E-commerce WordPress", year: 2013 },
  { client: "Nike WE", project: "jQuery/HTML5", year: 2012 },
  {
    client: "Vagrant Records",
    project: "Hybrid Flash/HTML5/jQuery",
    year: 2009,
  },
  { client: "Nike Corre", project: "WordPress Running Blog", year: 2009 },
  { client: "Nike Spark", project: "Flash Website", year: 2008 },
  { client: "The Shins", project: "Flash Website", year: 2007 },
];
