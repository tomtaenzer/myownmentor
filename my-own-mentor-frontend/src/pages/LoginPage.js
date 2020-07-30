import React, { useContext, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {
    LOGIN,
    LOGIN_FAILED,
    LOGIN_SUCCESS,
} from '../user/UserContextProvider';
import { performLogin } from '../utils/auth-utils';
import { Redirect } from 'react-router-dom';
import { getDecodedJWTToken, setJWTToken } from '../utils/jwt-utils';
import { Grid, makeStyles } from '@material-ui/core';
import {UserDispatchContext, UserStateContext} from "../user/UserContext";
import logo from "../ContentImages/LogoAppBar.png";

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        paddingTop: theme.spacing(4),
        backgroundColor: "#7399c5",
        opacity: "0.75",
        marginTop: "200px"

    },

    loginPerform: {
        margin: "10px",
        color: "white"
    },
    textStyle: {
        color: "white"
    },
    authBox: {
        marginTop: "10px"
    }

}));

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useContext(UserDispatchContext);

    const classes = useStyles();

    function login() {
        dispatch({ type: LOGIN });
        performLogin(username, password)
            .then((data) => {
                setJWTToken(data);
                const userData = getDecodedJWTToken();
                dispatch({ type: LOGIN_SUCCESS, payload: userData });
            })
            .catch(() => {
                dispatch({ type: LOGIN_FAILED });
            });
    }

    const { authStatus } = useContext(UserStateContext);
    if (authStatus === 'SUCCESS') {
        return <Redirect to={'/'} />;
    }

    return (
        <Grid
            className={classes.gridContainer}
            container
            alignContent="center"
            justify="center"
        >
            <Grid item>
                <div><img src={logo} width="25%"/></div>
                <div className={classes.authBox}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Username"
                        defaultValue="Username"
                        variant="outlined"
                        type="Username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>

                <div className={classes.authBox}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Password"
                        defaultValue="Password"
                        variant="outlined"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <Button className={classes.loginPerform} onClick={login}>Login</Button>
            </Grid>
        </Grid>
    );
}

export default LoginPage;
