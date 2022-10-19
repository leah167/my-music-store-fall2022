import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signIn, signOut } from "../../redux-state/userSlice";
import Axios from "../../utils/Axios";
import Layout from "../layout/Layout";

function SignInPage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [error, setError] = useState();

  useEffect(() => {
    if (user) {
      navigate("/user");
    }
  }, [user]);

  const [signInForm, setSignInForm] = useState({
    email: "",
    password: "",
  });

  const onSubmit = async () => {
    // call the backend with credential data
    const response = await Axios.post("/sign-in", { credentials: signInForm });

    // insert the response user in the state
    const fetchedUser = response.data.user;

    dispatch(signIn(fetchedUser));
  };

  return (
    <Layout>
      <Box mb={4}>
        <Typography>Sign In</Typography>
      </Box>
      <Box mb={4}>
        <TextField
          id="email"
          label="Email"
          value={
            console.log("signInForm.email: ", signInForm.email) ||
            signInForm.email
          }
          onChange={(event) =>
            setSignInForm({ ...signInForm, email: event.target.value })
          }
        />
      </Box>
      <Box mb={4}>
        <TextField
          id="password"
          label="Password"
          type="password"
          value={signInForm.password}
          onChange={(event) =>
            setSignInForm({ ...signInForm, password: event.target.value })
          }
        />
      </Box>
      <Box>
        <Button variant="contained" onClick={onSubmit}>
          Sign In
        </Button>
      </Box>
      <Box py={2}>
        <Link to="/register-user">
          <Typography sx={{ textDecoration: "underline" }}>
            Create New Account
          </Typography>
        </Link>
      </Box>
    </Layout>
  );
}

export default SignInPage;
