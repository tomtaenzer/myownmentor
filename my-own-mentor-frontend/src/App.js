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
import MyMentorTheme from "./theme/MyMentorTheme";
import {ThemeProvider} from "@material-ui/core";
import Header from "./components/Header";
import PrivateRoute from "./pages/PrivateRoute";


const useStyles = makeStyles( () => ({

    image:{
        backgroundImage: 'url(https://images.unsplash.com/photo-1557425493-6f90ae4659fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backGroundPosition: "center",
        minHeight: '100vh',

    },
       mainWrapper: {
       minHeight: "100vh",
       display: "flex",
       alignItems: "flex-start",
    }


}));

function Navigation() {
    const classes = useStyles();
  const dispatch = useContext(UserDispatchContext);

  useEffect(() => {
    if (isJWTTokenValid()) {
      dispatch({ type: LOGIN_SUCCESS, payload: getDecodedJWTToken() });
    }
  }, [dispatch]);

  return (
      <BrowserRouter>
        <Header />
        <Container maxWidth={'md'} component="main" className={classes.mainWrapper}>
          <Switch>
            <Route path="/login" component={LoginPage} exact/>
            <Route path="/register" component={RegisterPage} exact/>
            <PrivateRoute path="/" component={LandingPage} exact/>
            <PrivateRoute path="/profile" component={LandingPage} exact/>
            <Route path="/mentordashboard" component={LandingPage} exact/>

          </Switch>
        </Container>
          <MentorAppBar />
      </BrowserRouter>
  );
}






function App() {

    const classes = useStyles();

  return (
      <ThemeProvider theme={MyMentorTheme}>
  <UserContextProvider>
      <div className={classes.image}>
   <Navigation />
      </div>
  </UserContextProvider>
      </ThemeProvider>
  );
}

export default App;
