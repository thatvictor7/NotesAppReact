import React from 'react';
import { makeStyles, InputAdornment, InputLabel, Input, FormControl, Typography, Button } from '@material-ui/core';
// import FormControl from '@material-ui/core/FormControl';
// import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Vpn_key from '@material-ui/icons/VpnKey'

const useStyles = makeStyles(theme => ({
    container: {
        // backgroundColor: 'red',
        // height: '100rem',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'

    },
    title: {
        color: 'rgba(31,31,31,.8)',
        // paddingTop: '25%',
        // paddingBottom: '25%',
    },
    formContainer: {
        // margin: 'auto'
        display: 'flex',
        flexDirection: 'column',
        width: '20rem',
    },
    loginButton: {
        marginTop: '8%',
        backgroundColor: '#fdd835',
        color: 'rgb(255,255,255)'
    },
    appName: {
        color: '#fdd835',
        // alignSelf: 'flex-start',
        paddingBottom: '3rem',
        paddingTop: '8%'
    }
}))

const Login = () => {

    const classes = useStyles()

    return (
        <div className={classes.container}>
                <Typography className={`${classes.appName}`} variant="h1" component="h1">
                    Notesy
                </Typography>
            <div className={classes.formContainer}>
                <Typography className={`test ${classes.title}`} variant="h2" component="h2">
                    Login
                </Typography>
                <FormControl >
                    <InputLabel htmlFor="input-with-icon-adornment">Username</InputLabel>
                    <Input
                        id="input-with-icon-adornment"
                        type='email'
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl >
                    <InputLabel htmlFor="input-with-icon-adornment">Password</InputLabel>
                    <Input
                        id="input-with-icon-adornment"
                        type='password'
                        startAdornment={
                            <InputAdornment position="start">
                                {/* <AccountCircle /> */}
                                <Vpn_key />
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <Button type='button' className={classes.loginButton} variant="contained" size='large'>
                    Login
                </Button>
            </div>
        </div>
    )
}

export default Login