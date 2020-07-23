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

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        paddingTop: theme.spacing(4),
    },
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
                <div>
                    <TextField
                        label="Username"
                        type="text"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div>
                    <TextField
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <Button onClick={login}>Login</Button>
            </Grid>
        </Grid>
    );
}

export default LoginPage;
