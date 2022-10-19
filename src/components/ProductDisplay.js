import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux-state/shoppingCartSlice";
import Axios from "../utils/Axios";
import { signIn } from "../redux-state/userSlice";

function ProductDisplay(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { productData } = props;
  const isFavorite = user && user.favorites.includes(productData.id);

  const onAddToCart = () => {
    dispatch(addToCart(productData));
  };

  const addToFavorites = async () => {
    if (user) {
      const response = await Axios.post("/update-favorites", {
        productId: productData.id,
      });
      dispatch(signIn(response.data.user));
    }
  };

  console.log("productData: ", productData);

  console.log("isFavorite:", isFavorite);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={productData.title} subheader={productData.brand} />
      <CardMedia
        component="img"
        height="294"
        image={productData.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Box display="flex" justifyContent="space-between" width={1}>
          <Button onClick={onAddToCart}>Add to cart</Button>
          <IconButton aria-label="add to favorites" onClick={addToFavorites}>
            <FavoriteIcon color={isFavorite ? "error" : undefined} />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
}

export default ProductDisplay;
