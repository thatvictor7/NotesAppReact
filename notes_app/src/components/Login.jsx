import React, { Component } from 'react';
import { makeStyles, InputAdornment, InputLabel, Input, FormControl, Typography, Button } from '@material-ui/core';
// import FormControl from '@material-ui/core/FormControl';
// import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Vpn_key from '@material-ui/icons/VpnKey'

// const useStyles = makeStyles(theme => ({
const classes = {
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
    },
    logos: {
        color: 'rgba(31,31,31,.8)'
    },
    form: {
        display: 'flex',
        flexDirection: 'column'
    }
}
// ))

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    render() {

        // const classes = useStyles()

        return (
            <div style={classes.container}>
                <Typography style={classes.appName} variant="h1" component="h1">
                    {/* <Typography className={`${classes.appName}`} variant="h1" component="h1"></Typography> */}
                    Notesy™
                </Typography>
                <div style={classes.formContainer}>
                    {/* <Typography className={`test ${classes.title}`} variant="h2" component="h2"> */}
                    <Typography style={classes.title} variant="h2" component="h2">
                        Login
                    </Typography>
                    <form style={classes.form} method='POST'>
                        <FormControl >
                            <InputLabel htmlFor="input-with-icon-adornment">Username</InputLabel>
                            <Input
                                id="input-with-icon-adornment"
                                type='email'
                                placeholder='example@email.com'
                                onChange={this.handleUsername}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <AccountCircle style={classes.logos} />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormControl >
                            <InputLabel htmlFor="input-with-icon-adornment">Password</InputLabel>
                            <Input
                                id="input-with-icon-adornment"
                                type='password'
                                placeholder='password'
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Vpn_key style={classes.logos} />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <Button type='button' style={classes.loginButton} variant="contained" size='large'>
                            Login
                        </Button>
                    </form>
                </div>
            </div>
        )
    }

    handleUsername = (e) => {

        this.setState({ username: e.target.value })
        // console.log('handle un', this.state)

    }

}

export default Login