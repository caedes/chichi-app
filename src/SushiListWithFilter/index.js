import { TextField } from "@material-ui/core";
import { arrayOf, shape } from "prop-types";

import { types as sushiCardTypes } from "../SushiCard";
import SushiList from "../SushiList";
import useStyles from "./styles";
import useFilteredSushis from "../useFilteredSushis";

export default function SushiListWithFilter({ sushis }) {
  const classes = useStyles();

  const [search, filteredSushis, { filterSushis }] = useFilteredSushis(sushis);

  return (
    <form noValidate autoComplete="off" className={classes.form}>
      <TextField
        label="Search"
        type="search"
        variant="outlined"
        className={classes.search}
        value={search}
        onChange={filterSushis}
      />
      <SushiList sushis={filteredSushis} />
    </form>
  );
}

SushiListWithFilter.propTypes = {
  sushis: arrayOf(shape(sushiCardTypes)),
};

SushiListWithFilter.defaultProps = {
  sushis: [],
};
