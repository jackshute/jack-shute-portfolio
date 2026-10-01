/* =====================================================================
   CASE STUDIES
   ---------------------------------------------------------------------
   Every case study on the site comes from this list, in this order.
   Section numbers (01, 02 …) and the "Selected work" index are
   generated automatically.

   TO ADD A NEW CASE STUDY
   1. Copy one of the blocks below — from its opening {  to its closing },
   2. Paste it where you want it to appear in the list.
   3. Change the words and Vimeo links. That's it.

   FIELDS
   client     Big serif title (required)
   tagline    Short line under the title
   role       Small label, e.g. "Integrated creative & media"
   intro      One or more paragraphs — each in its own "quotes", separated by commas
   feature    (optional) A hero film with extra detail — see Lexus International
                title, description, quote { text, by }, stats [ [number, label] ], video
   films      List of films: { title, video, description (optional) }
              1 film = full width · 2 = side by side · 3 = row of three · 4 = 2×2 grid
   stats      (optional) Big orange numbers shown under the films
              [ ["#1", "Label"], ["38M", "Views"] ]   (up to 4 per row)
              Add a third item for a small note underneath, e.g. ["#1", "Label", "2026"]

   VIDEO LINKS
   Paste the normal Vimeo link, e.g. "https://vimeo.com/143075930".
   For an unlisted video, paste its full link including the private
   code, e.g. "https://vimeo.com/123456789/abc123def4".

   IMAGES (optional, for later)
   Add  image: "assets/your-image.jpg"  to a case study to show a large
   image above the films. Put the file in the site/assets folder.
   ===================================================================== */

window.CASE_STUDIES = [
  {
    client: "Toyota Canada",
    tagline: "The Showroom",
    role: "Integrated creative & media",
    intro: [
      "I’m proud to lead “The Showroom”, our integrated team serving Toyota Canada and the 247 Toyota dealers across the country.",
      "The Showroom brings together the creative and media remits for Toyota’s Canadian retail business, combining the skills of eighty team members across three offices and five provinces."
    ],
    films: [
      { title: "The Showroom — overview film", video: "https://vimeo.com/1230790454" }
    ]
  },

  {
    client: "TELUS",
    tagline: "Partners since 2010",
    role: "Brand, Mobility, Internet, TV, Home Security & Health",
    intro: [
      "T&P and TELUS have worked together since 2010. During that time I have been fortunate to lead teams across their Brand, Mobility, Internet, TV, Home Security and Health businesses.",
      "As one of the world’s most philanthropic brands, and Canada’s most giving company, TELUS has an incredible legacy of community impact as well as excellence in telco services."
    ],
    films: [
      { title: "iPhone GOAT", video: "https://vimeo.com/1230789083" },
      { title: "Unlimited Ducks", video: "https://vimeo.com/1230790206" },
      { title: "Cyberbullying — Cannes Lion winner", video: "https://vimeo.com/1230790106" },
      { title: "iPhone Crowd Pleaser", video: "https://vimeo.com/1230789126" }
    ]
  },

  {
    client: "Lexus International",
    tagline: "Amazing in Motion",
    role: "Global brand campaign",
    intro: [
      "The first ever global brand campaign for Lexus. ‘Amazing in Motion’ was a series of projects designed to showcase the imagination and creativity at the heart of the Lexus brand — awarded across the globe for innovation and creativity."
    ],
    feature: {
      title: "Project SLIDE: The Lexus Hoverboard",
      description: [
        "The fourth, and most ambitious, of the ‘Amazing in Motion’ series.",
        "Together with Lexus we designed and built the world’s first fully working hoverboard, and then revealed it to the amazement of a global audience."
      ],
      quote: {
        text: "There’s no such thing as impossible, it’s just a matter of figuring out how.",
        by: "Haruhiko Tanahashi, Lexus Chief Engineer"
      },
      stats: [
        ["38M", "Views"],
        ["1.7B", "Impressions"],
        ["18", "International awards"],
        ["3", "Cannes Lions"]
      ],
      video: "https://vimeo.com/143075930"
    },
    films: [
      {
        title: "Project SWARM",
        description: "Technology and imagination combine to bring a swarm of flying quadrotors to life, releasing them across a city.",
        video: "https://vimeo.com/83334206"
      },
      {
        title: "Project STROBE",
        description: "Technology and engineering combine to create an illuminated man’s incredible journey across the Kuala Lumpur skyline.",
        video: "https://vimeo.com/99712097"
      },
      {
        title: "Project STEPS",
        description: "The story of two stunning Lexus figures, built and brought to life.",
        video: "https://vimeo.com/68068005"
      }
    ]
  },

  {
    client: "Lexus Europe",
    tagline: "The European hub",
    role: "Multi-market vehicle launches",
    intro: [
      "We ran the European hub for Lexus, creating marketing campaigns to launch vehicles across multiple markets."
    ],
    films: [
      { title: "Lexus GS — Million Miles", video: "https://vimeo.com/64712583" },
      { title: "Lexus CT", video: "https://vimeo.com/64736114" }
    ]
  }
];
