import ServiceChip from "./ServiceChip";

const services = [
  {
    title: "Tarot Guidance",
    category: "Guidance",
  },
  {
    title: "Angel Card Reading",
    category: "Guidance",
  },
  {
    title: "Inner Child Healing",
    category: "Healing",
  },
  {
    title: "Emotional Healing",
    category: "Healing",
  },
  {
    title: "Relationship Guidance",
    category: "Relationships",
  },
  {
    title: "Career Guidance",
    category: "Life",
  },
  {
    title: "Life Guidance",
    category: "Life",
  },
  {
    title: "Decision Guidance",
    category: "Life",
  },
  {
    title: "Switch Words",
    category: "Energy",
  },
  {
    title: "Affirmations",
    category: "Energy",
  },
  {
    title: "Manifestation Guidance",
    category: "Growth",
  },
  {
    title: "Energy Cleansing",
    category: "Energy",
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