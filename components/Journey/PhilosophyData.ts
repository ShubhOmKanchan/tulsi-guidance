type PopupPosition = "top" | "bottom" | "left" | "right";

import {
  UserRound,
  Brain,
  HeartHandshake,
  Sprout,
  Flower2,
} from "lucide-react";

export const philosophyItems: {
  id: string;
  title: string;
  icon: any;
  position: PopupPosition;
  description: string;
}[] = [
  {
    id: "meet",
    title: "Meet Yourself",
    icon: UserRound,
    position: "bottom",
    description:
      "Pause and recognise where you stand today. Understand the experiences, patterns and values shaping your inner world.",
  },

  {
    id: "understand",
    title: "Awareness",
    icon: Brain,
    position: "right",
    description:
      "Notice your thoughts, emotions, relationships and life situations. See what is asking for attention, understanding or a new perspective.",
  },

  {
    id: "heal",
    title: "Clarity",
    icon: HeartHandshake,
    position: "bottom",
    description:
      "As awareness deepens, confusion begins to settle. Clearer insight brings greater confidence in yourself and your next steps.",
  },

  {
    id: "grow",
    title: "Alignment",
    icon: Sprout,
    position: "top",
    description:
      "Move forward with choices that feel authentic, balanced and aligned with who you are and where you are in life.",
  },

  {
    id: "bloom",
    title: "Integration",
    icon: Flower2,
    position: "left",
    description:
      "Bring new awareness into everyday life through conscious choices. Small, consistent shifts create greater ease and confidence.",
  },
];