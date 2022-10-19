import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { sampleUserData } from "../../mockData";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const user = useSelector((state) => state.user);

  const shoppingCart = useSelector((state) => state.shoppingCart);

  const cartCount = shoppingCart.reduce(
    (acc, cartItem) => acc + cartItem.quantity,
    0
  );
  let navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1, m: 1 }}>
            <Link to="/">
              <Typography variant="h6" fontWeight="bold" component="div">
                MyMusicStore.com
              </Typography>
            </Link>
          </Box>
          <Box alignContent="center">
            <Link to="/user">
              {user ? (
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <img
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "20px",
                      border: "2px solid white",
                    }}
                    alt="user profile"
                    src={user.profilePicture}
                  />
                </IconButton>
              ) : (
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              )}
            </Link>
            <Link to="/cart">
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <Badge badgeContent={cartCount} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
