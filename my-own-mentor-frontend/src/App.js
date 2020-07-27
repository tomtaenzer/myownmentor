import React, {useContext, useEffect} from 'react';
import UserContextProvider, {LOGIN_SUCCESS} from "./user/UserContextProvider";
import LoginPage from "./pages/LoginPage";
import {getDecodedJWTToken, isJWTTokenValid} from "./utils/jwt-utils";
import Container from "@material-ui/core/Container/Container";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {UserDispatchContext} from "./user/UserContext";
import LandingPage from "./pages/LandingPage";
import MentorAppBar from "./components/MentorAppBar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import RegisterPage from "./pages/RegisterPage";
import LogoutPage from "./pages/LogoutPage";

const useStyles = makeStyles( () => ({

    image:{
        backgroundImage: 'url(https://cdn.pixabay.com/photo/2018/05/19/00/53/online-3412473_1280.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backGroundPosition: "center",
        minHeight: '100vh',

    }
}));

function Navigation() {
  const dispatch = useContext(UserDispatchContext);

  useEffect(() => {
    if (isJWTTokenValid()) {
      dispatch({ type: LOGIN_SUCCESS, payload: getDecodedJWTToken() });
    }
  }, [dispatch]);

  return (
      <BrowserRouter>
        <MentorAppBar />
        <Container maxWidth={'md'} component="main">
          <Switch>
            <Route path={"/login"}>
              <LoginPage />
            </Route>
            <Route path={"/landingpage"}>
              <LandingPage />
            </Route>
              <Route path={"/registerpage"}>
                  <RegisterPage />
              </Route>
              <Route path={"/logourtpage"}>
                  <LogoutPage />
              </Route>
          </Switch>
        </Container>
      </BrowserRouter>
  );
}






function App() {

    const classes = useStyles();

  return (
  <UserContextProvider>
      <div className={classes.image}>
   <Navigation />
      </div>
  </UserContextProvider>
  );
}

export default App;
