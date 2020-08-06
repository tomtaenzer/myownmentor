import {makeStyles} from "@material-ui/core";
import React, {useContext, useState} from "react";
import {UserDispatchContext, UserStateContext} from "../user/UserContext";
import {LOGIN, LOGIN_FAILED, LOGIN_SUCCESS} from "../user/UserContextProvider";
import {performLogin, performRegistration} from "../utils/auth-utils";
import {getDecodedJWTToken, setJWTToken} from "../utils/jwt-utils";
import {Redirect} from "react-router-dom";
import Box from "@material-ui/core/Box";
import logo from "../ContentImages/Weiß und blau Maus Computer Logo (2).png";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        paddingTop: theme.spacing(4),
        backgroundColor: "#7399c5",
        opacity: "0.75",
        marginTop: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center"
    },

    itemContainer: {
        marginBottom: "10px",
        marginRight: "20px",
        marginLeft: "20px",
        color: "white",
        maxWidth: "400px"

    },

    loginPerform: {


    },
    textStyle: {
        color: "white"
    },
    authBox: {
        marginTop: "10px",
        marginLeft: "10px",
        marginRight: "10px"

    }



}));

function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useContext(UserDispatchContext);

    const classes = useStyles();

    function login() {
        dispatch({ type: LOGIN });
        performRegistration(username, password)
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
        return <Redirect to={'/cardsdashboard'} />;
    }

    return (

        <Box
            className={classes.gridContainer}
        >
            <img className={classes.itemContainer} src={logo} width="50%"/>
            <TextField className={classes.itemContainer}
                       required
                       id="outlined-required"
                       label="Username"
                       defaultValue="Username"
                       variant="outlined"
                       type="Username"
                       value={username}
                       onChange={(event) => setUsername(event.target.value)}
            />



            <TextField className={classes.itemContainer}

                       required
                       id="outlined-required"
                       label="Password"
                       defaultValue="Password"
                       variant="outlined"
                       type="password"
                       value={password}
                       onChange={(event) => setPassword(event.target.value)}
            />

            <Button className={classes.itemContainer} onClick={login}>Login</Button>
            <Button className={classes.itemContainer} onClick={login}>Register</Button>


        </Box>
    );
}

export default UserLoginPage;
