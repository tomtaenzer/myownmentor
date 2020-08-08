import React, {useContext} from 'react';

import {
    REGISTRATION,
    REGISTRATION_FAILED,
    REGISTRATION_SUCCESS} from "../../../user/UserContextProvider";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {performRegistration} from "../../../utils/auth-utils";

import {UserDispatchContext, UserStateContext} from "../../../user/UserContext";
import {useFormik} from 'formik';
import Button from "@material-ui/core/Button";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import logo from "/Users/tomherkrath/Desktop/neuefische/my-own-mentor-project/my-own-mentor/my-own-mentor-frontend/src/ContentImages/LogoAppBar.png";


const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

    registrationBox: {
        flexGrow: 1,
        alignSelf: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: 15,
        marginBottom: 15,
        padding: 20,
        backgroundColor: "#7399c5",
        opacity: "0,75",


        '@media (min-width: 412px, max-width: 599px)': {
            minWidth: "400px"
        },
        '@media (min-width:600px)': {
            maxWidth: "500px"
        }
    },

    itemContainer: {
        alignSelf: "center"
    }

}));


export default function RegistrationForm() {
    const classes = useStyles();

    const dispatch = useContext(UserDispatchContext);

    const {registrationStatus} = useContext(UserStateContext);

    const formik = useFormik({
        initialValues: {
            username: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmpassword: '',
            isMentor: false
        },
        onSubmit: values => {
            register(values)
                console.log(values)
        },

        validate: values => {
            // values.name values.email values.channel
            // errors.name errors.email errors.channel
            // errors.name = 'This field is required'


            },


    })


    function register(userInput) {
        dispatch({type: REGISTRATION});
        performRegistration(userInput)
            .then(data => {
                dispatch({type: REGISTRATION_SUCCESS, payload: data});
            })
            .catch(() => {
                dispatch({type: REGISTRATION_FAILED});
            });
    }

    return (
                <div>
                    <Grid container className={classes.registrationBox}>
                    <Grid item xs className={classes.itemContainer}>
                    <img src={logo} width="50%"/>
                    </Grid>
                <form onSubmit={formik.handleSubmit}>
                    <Grid item xs style={{padding: 10, marginTop: 10, marginBottom: 10, alignSelf: 'center'}}>
                        <TextField
                        required
                        id='outlined required'
                        label='UserName'
                        defaultValue="username"
                        variant='outlined'
                        type="text"
                        name='username'
                        onChange={formik.handleChange}
                        value={formik.values.username}
                    />
                    </Grid>
                    <Grid item xs style={{padding: 5, marginTop: 10, marginBottom: 10, alignSelf: 'center'}}>
                        <TextField
                            required
                            id='outlined required'
                            label='First Name'
                            defaultValue="firstName"
                            variant='outlined'
                            type="text"
                            name="firstName"
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                        />
                    </Grid>
                    <Grid item xs style={{padding: 5, marginTop: 10, marginBottom: 10, alignSelf: 'center'}}>
                        <TextField
                            required
                            id='outlined required'
                            label='Lastname'
                            defaultValue="lastName"
                            variant='outlined'
                            type="text"
                            name='lastName'
                            onChange={formik.handleChange}
                            value={formik.values.lastName}
                        />
                    </Grid>
                    <Grid item xs style={{padding: 5, marginTop: 10, marginBottom: 10, alignSelf: 'center'}}>
                        <TextField
                            required
                            id='outlined required'
                            label='Email'
                            defaultValue="email"
                            variant='outlined'
                            type="text"
                            name='email'
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                    </Grid>
                    <Grid item xs style={{padding: 5, marginTop: 10, marginBottom: 10, alignSelf: 'center'}}>
                        <TextField
                            required
                            id='outlined required'
                            label='Password'
                            defaultValue="password"
                            variant='outlined'
                            type="password"
                            name="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                    </Grid>
                    <Grid item xs style={{padding: 5, marginTop: 10, marginBottom: 10, alignSelf: 'center'}}>
                        <TextField
                            required
                            id='outlined required'
                            label='Confirm Password'
                            defaultValue="confirmpassword"
                            variant='outlined'
                            type="password"
                            name='confirmpassword'
                            onChange={formik.handleChange}
                            value={formik.values.confirmpassword}
                        />
                    </Grid>

                    <Grid item sm>
                    <Button type='submit'>Submit</Button>
                    </Grid>
                </form>
                </Grid>
    </div>
    )
}