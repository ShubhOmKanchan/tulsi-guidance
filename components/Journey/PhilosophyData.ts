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
      "Reconnect with your authentic self by understanding your strengths, emotions and inner patterns.",
  },

  {
    id: "understand",
    title: "Understand",
    icon: Brain,
    position: "right",
    description:
      "Gain clarity about your thoughts, relationships and life experiences through conscious reflection.",
  },

  {
    id: "heal",
    title: "Heal",
    icon: HeartHandshake,
    position: "bottom",
    description:
      "Release emotional burdens, nurture inner peace and create space for balance and acceptance.",
  },

  {
    id: "grow",
    title: "Grow",
    icon: Sprout,
    position: "top",
    description:
      "Develop resilience, wisdom and confidence while embracing continuous personal evolution.",
  },

  {
    id: "bloom",
    title: "Bloom",
    icon: Flower2,
    position: "left",
    description:
      "Express your fullest potential and live with purpose, harmony and joyful abundance.",
  },
];