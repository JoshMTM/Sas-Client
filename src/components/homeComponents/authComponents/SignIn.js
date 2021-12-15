import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../../features/userSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../../config";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © SAS"}{" "}
      {/* <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "} */}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

function SignIn(props) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();
  const [myError, setError] = useState(null);
  const dispatch = useDispatch();

  // const { onSignIn } = props;

  const handleSignIn = async (event) => {
    event.preventDefault();
    console.log("whats happening here?");
    try {
      console.log("am i getting here?");
      const response = await axios.post(
        `${API_URL}/signin`,
        { email, password },
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
      dispatch(
        login({
          email: response.data.email,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          city: response.data.city,
          country: response.data.country,
          photoUrl: response.data.image,
          userId: response.data._id,
        })
      );
    } catch (err) {
      setError(err.response.data.error);
    }
    navigate("/home");
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://i.imgur.com/FUyyljL.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "lightBlue" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSignIn}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                label="Email Address"
                name="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                label="Password"
                type="password"
                id="password"
                helperText={myError ? props.myError : ""}
                error={myError ? true : false}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link to="/signup">{"No account yet? Sign Up"}</Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default SignIn;
