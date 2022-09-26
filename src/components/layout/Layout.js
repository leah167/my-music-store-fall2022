import { Box, Button } from '@mui/material';
import Footer from './Footer';
import Header from './Header';

function Layout(props) {
  const { children, user } = props;

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Box>
        <Header user={user} />
      </Box>
      <Box flexGrow={1} py={6} px={4}>
        {children}
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
}

export default Layout;
