import React, {useContext, useEffect} from 'react';
import UserContextProvider, {LOGIN_SUCCESS} from "./user/UserContextProvider";
import LoginPage from "./pages/LoginPage";
import {getDecodedJWTToken, isJWTTokenValid} from "./utils/jwt-utils";
import Container from "@material-ui/core/Container/Container";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {UserDispatchContext} from "./user/UserContext";



function Navigation() {
  const dispatch = useContext(UserDispatchContext);

  useEffect(() => {
    if (isJWTTokenValid()) {
      dispatch({ type: LOGIN_SUCCESS, payload: getDecodedJWTToken() });
    }
  }, [dispatch]);

  return (
      <BrowserRouter>

        <Container maxWidth={'md'} component="main">
          <Switch>
            <Route>
              <LoginPage />
            </Route>
          </Switch>
        </Container>
      </BrowserRouter>
  );
}






function App() {

  return (
  <UserContextProvider>
    <Navigation />
  </UserContextProvider>
  );
}

export default App;
