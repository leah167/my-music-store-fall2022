import { Card, CardMedia, Box, Typography, IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { removeFromCart } from "../redux-state/shoppingCartSlice";
import { useDispatch } from "react-redux";

function CartItem(props) {
  const dispatch = useDispatch();
  const { productData } = props;

  const onRemoveFromCart = () => {
    dispatch(removeFromCart(productData.id));
  };

  return (
    <Card>
      <Box display="flex" width="100%">
        <Box>
          <CardMedia
            component="img"
            sx={{ width: 80, height: 80, p: 1 }}
            image={productData.image}
          />
        </Box>
        <Box
          px={2}
          display="flex"
          flexDirection="column"
          flexGrow={1}
          justifyContent="center"
        >
          <Box>
            <Typography fontWeight="bold">{productData.title}</Typography>
          </Box>
          <Box>
            <Typography fontWeight="bold">
              ${productData.price / 100}
            </Typography>
          </Box>
        </Box>
        <Box
          px={2}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Typography fontWeight="bold">x{productData.quantity}</Typography>
        </Box>
        <Box
          px={2}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <IconButton onClick={onRemoveFromCart}>
            <DeleteForeverIcon />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}

export default CartItem;
