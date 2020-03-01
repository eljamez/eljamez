export const LETTERS = ["E", "L", "J", "A", "M", "E", "Z"];
export const SECTION_NAMES = [
  "Me",
  "Code",
  "Work",
  "Fun",
  "Links",
  "Music",
  "All this space"
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
      "My name is James Augustus Hall and I write code for websites and make music for ears. I also enjoy comedy and other forms of content. Thanks for stoping by my homepage.",
    content: [
      {
        title: "Work 🕸",
        details: "I created my first website in 1996"
      },
      {
        title: "Music 🎹",
        details: "I purchased my first drumset at 15"
      },
      {
        title: "Other Things 🤔",
        details: "I'm pretty sure I did all this other stuff too..."
      }
    ]
  },
  {
    name: "Code",
    letterIndex: 1,
    description:
      "I mostly write code JavaScript, though I have PHP and Ruby knowledge as well. ",
    content: [
      {
        title: "JavaScript ☕️",
        details: "My language of choice",
        link: {
          href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          text: "javascript (MDN)"
        }
      },
      {
        title: "CodePen ✍️",
        details: "I add some crazy things here sometime",
        link: {
          href: "http://codepen.io/eljamez/",
          text: "codepen.io/eljamez/"
        }
      },
      {
        title: "GitHub 🐙",
        details: "Push, Pull, Merge, and all that",
        link: {
          href: "https://github.com/eljamez",
          text: "github.com/eljamez"
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
    contentType: "list",
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
    name: "Fun",
    letterIndex: 3,
    description: "I like making videos on occasion",
    content: [
      {
        title: "youTube 📺",
        details: "Just a bit of fun",
        link: {
          href: "https://youtube.com/user/eljamez",
          text: "youtube.com/user/eljamez"
        }
      },
      {
        title: "Tumblr 🥤",
        details: "An old stash of funny stuff",
        link: {
          href: "https://jaugustus.tumblr.com/",
          text: "jaugustus.tumblr.com/"
        }
      }
    ]
  },
  {
    name: "Links",
    letterIndex: 4,
    description: "I don't play much golf these days 🏌️‍♂️",
    content: [
      {
        title: "Contact Me",
        link: {
          href: "mailto://eljamez@gmail.com",
          text: "eljames(at)gmail(dot)com"
        }
      }
    ]
  },
  {
    name: "Music",
    letterIndex: 5,
    description: "I write, record, and sometimes perform music.",
    content: [
      {
        title: "Ensly Mogul 🎹",
        //image: "./images/mogul.jpg",
        details: "Electronical Musics",
        link: {
          href: "https://enslymogul.com",
          text: "enslymogul.com"
        }
      },
      {
        title: "Soundcloud 🎸",
        //image: "./images/mogul.jpg",
        details: "A Variety, good times",
        link: {
          href: "https://soundcloud.com/eljamez",
          text: "soundcloud.com/eljamez"
        }
      },
      {
        title: "Spotify 🔈",
        //image: "./images/mogul.jpg",
        details: "A playlist of song I have played on and/or written",
        link: {
          href:
            "https://open.spotify.com/playlist/4yQ0U5YrMbK2IKqFYT0O0n?si=cPlAiI-0QLaWdLKmYgO7ug",
          text: "spotify.com"
        }
      }
    ]
  },
  {
    name: "All this space",
    letterIndex: 6,
    description:
      "With all this extra space on my webpage, I'm going to have to put something cool up here soon."
  }
];
