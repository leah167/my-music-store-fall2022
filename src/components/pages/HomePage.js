import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Axios from "../../utils/Axios";
import Layout from "../layout/Layout";
import ProductDisplay from "../ProductDisplay";

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //We fetch out product data here, after the first render
    const fetchProducts = async () => {
      const response = await Axios.get("/get-products");
      setProducts(response.data.products);
    };
    fetchProducts();
    //OR
    // Axios.get("/get-products").then((response) =>
    //   setProducts(response.data.products)
    // );
  }, []);

  return (
    <Layout>
      <Box display="flex" flexDirection="column" alignItems="center">
        {products.map((product) => (
          <Box mb={6} key={product.id}>
            <ProductDisplay productData={product} />
          </Box>
        ))}
      </Box>
    </Layout>
  );
}

export default HomePage;
