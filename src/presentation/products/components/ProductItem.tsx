import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from "@material-ui/core";

const ProductItem: React.FC = () => {
  return (
    <Grid item xs={6} sm={4} md={3} lg={2}>
      <Card>
        <CardMedia title="Image title" />
        <CardContent>
          <Typography gutterBottom variant="subtitle1"></Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductItem;
