import React, {useContext} from 'react';

import {
    REGISTRATION,
    REGISTRATION_FAILED,
    REGISTRATION_SUCCESS} from "../../../user/UserContextProvider";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {performRegistration} from "../../../utils/auth-utils";

import PopUpSuccessRegister from "../../popups/PopUpSuccessRegister";
import PopUpFailedRegistration from "../../popups/PopUpFailedRegistration";
import {UserDispatchContext, UserStateContext} from "../../../user/UserContext";
import {useFormik} from "formik";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    registrationBox: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        '@media (min-width: 412px, max-width: 599px)': {
            minWidth: "400px"
        },
        '@media (min-width:600px)': {
            maxWidth: "500px"
        }
    },
    logo: {
        width: '60%',
        height: '60%'
    },
    logoPlacement: {
        paddingTop: theme.spacing(3),
        textAlign: "center"
    }
}));

export default function RegistrationForm() {
    const classes = useStyles();

    const dispatch = useContext(UserDispatchContext);

    const {registrationStatus} = useContext(UserStateContext);

    const formik = useFormik({
        initialValues: {
            name: '',
            lastname: '',
            username: '',
            email: '',
            password: '',
            confirmpassword: ''
        }
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
        <Box className={classes.registrationBox}>
            <Box>
                <Typography variant="h4" color="primary" align="center">
                    Registrierung
                </Typography>
            </Box>
            <Box className={classes.logoPlacement}>
                <img src={helloLogo} alt="Lunchbreak logo for registration" className={classes.logo}/>
            </Box>
            <Box>
                <form>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />

                    <label htmlFor='lastname'>Lastname</label>
                    <input
                        type='text'
                        id='lastname'
                        name='lastname'
                        onChange={formik.handleChange}
                        value={formik.values.lastname}
                    />

                    <label htmlFor='username'>Username</label>
                    <input
                        type='text'
                        id='username'
                        name='username'
                        onChange={formik.handleChange}
                        value={formik.values.username}
                    />

                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />

                    <label htmlFor='password'>Password</label>
                    <input
                        type='text'
                        id='password'
                        name='password'
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />

                    <label htmlFor='confirmpassword'>ConfirmPassword</label>
                    <input
                        type='text'
                        id='confirmpassword'
                        name='confirmpassword'
                        onChange={formik.handleChange}
                        value={formik.values.confirmpassword}
                    />

                    <Button>Submit</Button>
                </form>
            </Box>


            <PopUpSuccessRegister openStatus={registrationStatus === 'SUCCESS'}/>
            <PopUpFailedRegistration openStatus={registrationStatus === 'FAILED'}/>
        </Box>
    )
}