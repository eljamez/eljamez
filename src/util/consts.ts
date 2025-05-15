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
      "For Whatsoever.biz, I scaffolded a web app from scratch using NextJS and TailwindCSS. The app had several requirements, including Auth, which I handled with Clerk integration. For a database, I set up a Postgres database on Railway and added Prisma as an ORM to help me define the database schemas. Fetching web results from a simulated web search was also a requirement. I used google’s api for this. Upon fetching the web results, I save them to the database so I don’t have to repeat the api call when returning to the page. I do a similar thing with uspto trademark results using a uspto api. Stripe handles subscription payments.",
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
      "I built Grid.lol on my own, with a little help from Vercel’s v0 service and Cursor. I prompted a starting point with the basics on v0, iterated a few times, then ejected the code to my Cursor IDE. From here I set up integration with Appwrite to handle auth and database functionality while Stripe handles the payment side of things. It was built using NextJS and TailwindCSS. I also use Resed as an email sending provider.",
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
      "For the Aimi Dashboard I had to build an App within an Nx Monorepo. I set it up using the Nx tooling for a fresh NextJS app and was able to get things together pretty quickly using Shadcn/UI components. This app had to integrate with a GraphQL Apollo Client server to communicate to mobile devices which accounts would have Pro features available. Stripe was used for subscribing to Pro. I used Stripe webhooks to listen for stripe events so we could easily update the users data in our database.",
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
      "I built Aimi Sync from scratch using “create next app”. I did heavy integration with the Aimi Sync API, built custom by the back end team. I set up a step-by-step route for using Aimi Sync. First a user would upload a video, which I would break apart into chunks before sending to the API. From there I would wait for a response from the API that would return data about the generated plan for the music that would sync to the video, beat by beat. On the front end I updated the plan and sent it back to the API. Then the API would return a video url of the updated video with the custom soundtrack, created on the fly.",
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
      "Aimi Studio was a desktop app powered by Electron and NextJS. This app was part of an Nx Monorepo and had to interface with a postgres database and GraphQL. I used canvas to create a plotted UI where each dot on the plot represented a musical sample that could be selected (using a select too built in canvas) and added to a custom musical experience. Creators could select from the samples and make several other adjustments to create music on the fly, and save their experiences to the Aimi echosphere.",
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
