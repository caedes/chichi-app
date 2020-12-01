import {
  AppBar,
  Badge,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { number } from "prop-types";

export default function Header({ shoppingCartItemsCount }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Chi-Chi Sushis</Typography>
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
