import SushiList from "./";

const csf = {
  title: "SushiList",
  component: SushiList,
};
export default csf;

const sushis = [
  {
    id: 1,
    title: "Maki",
    description: "poisson, riz",
  },
  {
    id: 2,
    title: "Temaki",
    description: "poisson, riz",
  },
  {
    id: 3,
    title: "Uramaki",
    description: "poisson, riz",
  },
  {
    id: 4,
    title: "Sashimi",
    description: "poisson, riz",
  },
];

export const Default = () => <SushiList />;

export const WithSomeSushis = () => <SushiList sushis={sushis} />;
