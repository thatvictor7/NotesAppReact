import React, { Component } from 'react';
import { makeStyles, InputAdornment, InputLabel, Input, FormControl, Typography, Button } from '@material-ui/core';
import axios from 'axios'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getUser } from '../actions/getUser'
import AccountCircle from '@material-ui/icons/AccountCircle';
import Vpn_key from '@material-ui/icons/VpnKey'

// const useStyles = makeStyles(theme => ({
const classes = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'

    },
    title: {
        color: 'rgba(31,31,31,.8)',
    },
    formContainer: {
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
            email: '',
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
                    <form style={classes.form} onSubmit={this.onSubmitForm} method='POST'>
                        <FormControl >
                            <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
                            <Input
                                id="input-with-icon-adornment"
                                type='email'
                                name='email'
                                placeholder='example@email.com'
                                onChange={this.onChangeForm}
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
                                name='password'
                                placeholder='password'
                                onChange={this.onChangeForm}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Vpn_key style={classes.logos} />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <Button type='submit' 
                                content='submit'
                                style={classes.loginButton} 
                                variant="contained" 
                                // onClick={this.handleSubmitButton}
                                size='large'>
                            Login
                        </Button>
                    </form>
                </div>
            </div>
        )
    }

    onChangeForm = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmitForm = (e) => {
        e.preventDefault()
        const userInfo = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.getUser(userInfo)
    }
}

Login.proptype = {
    getUser: PropTypes.func.isRequired
}

export default connect(null, { getUser })(Login)