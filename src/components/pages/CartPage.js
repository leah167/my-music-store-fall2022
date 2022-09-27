import { Box } from '@mui/material';
import Layout from '../layout/Layout';

function CartPage(props) {
  const {
    shoppingCart, addToCart, removeFromCart, emptyCart,
  } = props;

  return (
    <Layout>
      <Box
        width={1}
        display="flex"
        flexDirection="column"
        alignItems="center"
      />
      {shoppingCart.map((cartItem) => (
        <Box>
          <div>{cartItem.title}</div>
          <div>{cartItem.description}</div>
          <div>{cartItem.price}</div>
          <div>{cartItem.quantity}</div>
        </Box>
      ))}
    </Layout>
  );
}

export default CartPage;
