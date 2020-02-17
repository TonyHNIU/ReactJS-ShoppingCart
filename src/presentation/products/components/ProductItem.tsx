import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from "@material-ui/core";
import Product from "../../../domain/products/Product";

const useStyles = makeStyles(theme => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    backgroundSize: "auto 100%",
    paddingTop: "100%",
    margin: theme.spacing(1)
  },
  cardContent: {
    flexGrow: 1
  },
  cardActions: {
    justifyContent: "center"
  },
  productTitle: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    height: 50
  },
  productPrice: {
    textAlign: "center"
  }
}));

interface ProductListProps {
  product: Product;
  onAddProductToCart: (product: Product) => void;
}

const ProductItem: React.FC<ProductListProps> = ({
  product,
  onAddProductToCart
}) => {
  const classes = useStyles();

  return (
    <Grid item xs={6} sm={4} md={3} lg={2}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={product.image}
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography
            className={classes.productTitle}
            gutterBottom
            variant="subtitle1"
          >
            {product.title}
          </Typography>
          <Typography variant="h6" className={classes.productPrice}>
            {product.price.toLocaleString("es-ES", {
              style: "currency",
              currency: "NZD"
            })}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button
            size="small"
            color="primary"
            onClick={() => onAddProductToCart(product)}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductItem;
