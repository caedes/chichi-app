import SushiCard from "./";

const csf = {
  title: "SushiCard",
  component: SushiCard,
};
export default csf;

export const Default = () => (
  <SushiCard id={1} title="Sushi" description="Ingrédients : riz, poisson" />
);

export const WithImage = () => (
  <SushiCard
    id={1}
    title="Sushi"
    description="Ingrédients : riz, poisson"
    image="https://picsum.photos/seed/sushi1/400/300"
  />
);
