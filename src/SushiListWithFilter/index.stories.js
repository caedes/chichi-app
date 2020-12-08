import SushiListWithFilter from "./";
import { listOfOneSushi, listOfSushis } from "../fixtures/sushis";

const csf = {
  title: "SushiListWithFilter",
  component: SushiListWithFilter,
};
export default csf;

export const Default = () => <SushiListWithFilter />;

export const WithSomeSushis = () => (
  <SushiListWithFilter sushis={listOfSushis} />
);

export const WithOneSushi = () => (
  <SushiListWithFilter sushis={listOfOneSushi} />
);
