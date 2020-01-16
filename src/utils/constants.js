export const LETTERS = ["E", "L", "J", "A", "M", "E", "Z"];
export const SECTION_NAMES = [
  "Me",
  "Code",
  "Work",
  "Space",
  "Contact",
  "Music",
  "More"
];

export const BACKGROUNDS = [
  "/images/synthwave-3941721.jpg",
  "/images/stars-964022.png",
  "/images/retro-2426631.png",
  "/images/wormhole-739872.png"
];

export const SECTIONS = [
  {
    name: "Me",
    letterIndex: 0,
    description:
      "My name is James Augustus Hall and I write code for websites and make music for ears. I also enjoy comedy and other forms of content. Thanks for stopping by my homepage."
  },
  {
    name: "Code",
    letterIndex: 1,
    description: "JavaScript, CSS, PHP, Ruby (on Rails)",
    content: [
      {
        title: "CodePen ✍️",
        link: {
          href: "http://codepen.io/eljamez/",
          text: "codepen.io/eljamez/"
        }
      },
      {
        title: "GitHub 🐙",
        link: {
          href: "https://github.com/eljamez",
          text: "github.com/eljamez"
        }
      },
      {
        title: "JavaScript ☕️",
        link: {
          href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          text: "javascript (MDN)"
        }
      }
    ]
  },
  {
    name: "Work",
    letterIndex: 2,
    description: "I have worked with many illustrious clients in the past.",
    link: {
      href: "https://1stdibs.com",
      text: "I'm a Senior Frontend Engineer at 1stdibs.com"
    },
    content: [
      {
        title: "Nike"
        //image: "swoosh.jpg"
      },
      {
        title: "Mastercard"
        //image: "mastercard.jpg"
      },
      {
        title: "Aquafina"
        //image: "aquafina.jpg"
      },
      {
        title: "Kombucha Wonder Drink"
        //image: "kombucha.jpg"
      },
      {
        title: "Kettle Chips"
        //image: "kettls.jpg"
      },
      {
        title: "HBO"
        //image: "hbo.jpg"
      },
      {
        title: "Travelocity Business"
        //image: "kettls.jpg"
      },
      {
        title: "Vagrant Records"
        //image: "kettls.jpg"
      }
    ]
  },
  {
    name: "Space",
    letterIndex: 3,
    description: ""
  },
  {
    name: "Contact",
    letterIndex: 4,
    content: [
      {
        title: "email",
        link: {
          href: "mailto://eljamez@gmail.com",
          text: "eljames(at)gmail(dot)com"
        }
      },
      {
        title: "linkedin",
        link: {
          href: "http://www.linkedin.com/in/eljamez",
          text: "linkedin.com/in/eljamez"
        }
      }
    ]
  },
  {
    name: "Music",
    letterIndex: 5,
    description: "I write, record, and sometimes perform music",
    content: [
      {
        title: "Ensly Mogul 🎹",
        //image: "./images/mogul.jpg",
        link: {
          href: "https://enslymogul.com",
          text: "enslymogul.com"
        }
      },
      {
        title: "Soundcloud 🎸",
        //image: "./images/mogul.jpg",
        link: {
          href: "https://soundcloud.com/eljamez",
          text: "soundcloud.com/eljamez"
        }
      },
      {
        title: "Spotify 🔈",
        //image: "./images/mogul.jpg",
        link: {
          href:
            "https://open.spotify.com/playlist/4yQ0U5YrMbK2IKqFYT0O0n?si=cPlAiI-0QLaWdLKmYgO7ug",
          text: "spotify.com"
        }
      }
    ]
  },
  {
    name: "More",
    letterIndex: 6,
    description: "More to come"
  }
];
