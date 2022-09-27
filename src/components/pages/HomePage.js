import { Box } from '@mui/material';
import { productList } from '../../mockData';
import Layout from '../layout/Layout';
import ProductDisplay from '../ProductDisplay';

function HomePage(props) {
  const { user, addToCart } = props;
  return (
    <Layout user={user}>
      <Box display="flex" flexDirection="column" alignItems="center">
        {productList.map((product) => (
          <Box mb={6} key={product.id}>
            <ProductDisplay productData={product} addToCart={addToCart} />
          </Box>
        ))}
      </Box>
    </Layout>
  );
}

export default HomePage;
