import ServiceChip from "./ServiceChip";

const services = [
  {
    title: "Conscious Conversation",
    category: "REFLECTION",
  },
  {
    title: "Intuitive Guidance",
    category: "CLARITY",
  },
  {
    title: "Vibrational Healing",
    category: "REALIGNMENT",
  },
  {
    title: "Bach Flower Remedies",
    category: "EMOTIONAL SUPPORT",
  },
  {
    title: "Switchwords & Affirmations",
    category: "ALIGNMENT",
  },
  {
    title: "Tarot & Oracle Guidance",
    category: "DIVINE GUIDANCE",
  },
  {
    title: "Angelic Therapy",
    category: "ANGELIC SUPPORT",
  },
  {
    title: "Astrological Perspectives",
    category: "INSIGHT",
  },
  {
    title: "Personalised Companioning",
    category: "EVOLUTION",
  },
  {
    title: "Journalling & Reflection",
    category: "PRACTICE",
  },
  {
    title: "Mindfulness & Self-Awareness",
    category: "INTEGRATION",
  },
  {
    title: "Personalised Energy Tools",
    category: "CONTINUITY",
  },
];

const themes = [
  {
    border: "#4F8F5C",
    icon: "rgba(79,143,92,.90)",
    glow: "rgba(79,143,92,.18)",
    bg: "rgba(79,143,92,.06)",
  },
  {
    border: "#4C8CBF",
    icon: "rgba(76,140,191,.90)",
    glow: "rgba(76,140,191,.18)",
    bg: "rgba(76,140,191,.06)",
  },
  {
    border: "#D7B46A",
    icon: "rgba(215,180,106,.90)",
    glow: "rgba(215,180,106,.18)",
    bg: "rgba(215,180,106,.06)",
  },
];

export default function ServicesGrid() {
  return (
    <div
      className="
        mt-16
        grid
        gap-8
        md:grid-cols-2
        xl:grid-cols-3
      "
    >
      {services.map((service, index) => (
        <ServiceChip
          key={service.title}
          title={service.title}
          category={service.category}
          theme={themes[index % themes.length]}
        />
      ))}
    </div>
  );
}