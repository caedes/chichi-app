import { Grid, Typography } from "@material-ui/core";
import { arrayOf, shape } from "prop-types";

import SushiCard, { types as sushiCardTypes } from "../SushiCard";
import useStyles from "./styles";

export default function SushiList({ sushis }) {
  const classes = useStyles();

  if (sushis.length === 0) return <Typography>Aucun sushi trouvé.</Typography>;

  return (
    <Grid container spacing={4} className={classes.sushiList}>
      {sushis.map((sushi) => (
        <Grid item xs={3} key={sushi.id}>
          <SushiCard {...sushi} />
        </Grid>
      ))}
    </Grid>
  );
}

SushiList.propTypes = {
  sushis: arrayOf(shape(sushiCardTypes)),
};

SushiList.defaultProps = {
  sushis: [],
};
