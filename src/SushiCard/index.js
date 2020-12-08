import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { number, string } from "prop-types";

import PlaceholderCardMedia from "../PlaceholderCardMedia";
import useStyles from "./styles";

export default function SushiCard({ id, image, title, description }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {image ? (
        <CardMedia className={classes.media} image={image} title={title} />
      ) : (
        <PlaceholderCardMedia className={classes.media} />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          className={classes.addToShoppingCart}
          aria-label="add to shopping cart"
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export const types = {
  id: number.isRequired,
  title: string.isRequired,
  description: string.isRequired,
  image: string,
};

SushiCard.propTypes = types;

SushiCard.propTypes = {
  image: null,
};
