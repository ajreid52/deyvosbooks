export type Volume = {
  slug: string;
  volume: string;
  subtitle: string;
  status: string;
  premise: string;
  description: string;
  highlights: Array<{ title: string; text: string }>;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
};

export const volumes: Volume[] = [
  {
    slug: "shadow-of-the-beast-volume-one",
    volume: "Volume One",
    subtitle: "Birthright",
    status: "Currently in editing",
    premise: "One life. Two souls.",
    description: "Maret Beorn survived the birth that killed his magically gifted twin. Years later, the brother he never knew returns as a shadow only Maret can see. As their haunted bond grows stronger, his family must decide whether the spirit is a lost child to be saved or a dangerous power that must be sealed away.",
    highlights: [
      { title: "A haunted brotherhood", text: "Two brothers share a bond that death should have severed." },
      { title: "A family under pressure", text: "Love, grief, and fear pull the Beorns toward an impossible choice." },
      { title: "A power without precedent", text: "Maret’s awakening gift obeys rules no living mage understands." },
    ],
    image: "/telmut-hero-v2.png",
    imageWidth: 1730,
    imageHeight: 909,
    imageAlt: "Telmut Keep beneath storm-gray skies",
  },
  {
    slug: "shadow-of-the-beast-volume-two",
    volume: "Volume Two",
    subtitle: "Inheritance",
    status: "Currently writing",
    premise: "The seal was never meant to break.",
    description: "When Maret’s ghost-twin returns with greater power, and a blood mage’s hidden designs begin to unfold, the Beorn family’s efforts to protect one another turn to suspicion, betrayal, and catastrophe. To survive, Maret must dictate boundaries between the spirit, the flesh, and the soul.",
    highlights: [
      { title: "Power without boundaries", text: "Maret races to teach his ghost twin responsibility before his strength outgrows his patience." },
      { title: "Loyalties under strain", text: "Fear turns belief into suspicion as the Beorn family begins to fracture." },
      { title: "A hidden design", text: "A blood mage’s plans threaten consequences far beyond one family or one nation." },
    ],
    image: "/unreleased-book-placeholder.png",
    imageWidth: 1536,
    imageHeight: 1024,
    imageAlt: "A dark book concealed beneath deep blue fabric",
  },
];

export function getVolume(slug: string) {
  return volumes.find((volume) => volume.slug === slug);
}
