import SushiList from "./";
import { listOfSushis, listOfOneSushi } from "../fixtures/sushis";

const csf = {
  title: "SushiList",
  component: SushiList,
};
export default csf;

export const Default = () => <SushiList />;

export const WithSomeSushis = () => <SushiList sushis={listOfSushis} />;

export const WithOneSushi = () => <SushiList sushis={listOfOneSushi} />;
