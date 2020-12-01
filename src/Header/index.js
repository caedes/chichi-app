import {
  AppBar,
  Badge,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { number } from "prop-types";

import useStyles from "./styles";

export default function Header({ shoppingCartItemsCount }) {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Chi-Chi Sushis
        </Typography>
        <IconButton aria-label="show 17 new notifications" color="inherit">
          <Badge badgeContent={shoppingCartItemsCount} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  shoppingCartItemsCount: number,
};

Header.defaultProps = {
  shoppingCartItemsCount: 0,
};
