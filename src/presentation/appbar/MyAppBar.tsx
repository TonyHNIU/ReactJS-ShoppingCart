import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles((theme: Theme) => ({
  toolbar: {
    justifyContent: "space-between",
    maxWidth: "800"
  }
}));

interface AppProps {
  totalCartItems: number;
  onShoppingCartHandler: () => void;
}

const MyAppBar: React.FC<AppProps> = ({
  totalCartItems,
  onShoppingCartHandler
}) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <IconButton edge="start" color="inherit" aria-label="open drawer">
          <MenuIcon />
        </IconButton>
        <IconButton color="inherit">
          <Badge badgeContent={totalCartItems} color="secondary">
            <ShoppingCartIcon onClick={onShoppingCartHandler} />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;
