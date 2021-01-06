import React, {Component} from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import AppIcon from '../images/cafe.jpg'
import {Typography} from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import Link from 'react-router-dom/Link'
import {CircularProgress} from '@material-ui/core'
import {SignUP} from '../store/actions/user'
import {connect} from 'react-redux'



const styles =  {
    form : {
        textAlign: 'center'
    },
    image: {
        margin: '20px auto 20px auto'
    },
    pageTitle: {
        margin: '10px auto 10px auto'
    },
    textField: {
        margin: '10px auto 10px auto'
    },
    button: {
        marginTop: 20,
        position: 'relative'

    },
    customError:{
        color: 'red',
        fontSize: '0.8rem',
        marginTop: 10
    },
    small : {
        margin: 10
    },
    progress: {
        position: 'absoluate'

    }
    

}




class signup extends Component {
    
    state= {
        email: "",
        password: "",
        confirmPassword: "",
        handle: '',
        loading: false,
        errors: {}
    }


    handleSubmit = (e) => {
        const {email, password, confirmPassword, handle} =  this.state
        e.preventDefault()
        this.props.signup(email, password, confirmPassword, handle)
        
        
    }

    hangleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        const {classes} = this.props 
        const {errors, loading} = this.state
        return (
           <Grid container className={classes.form}>
               <Grid item sm />
               <Grid item sm>
                    <img src={AppIcon} alt="monkey" width="50%" height="50%" className={classes.image} />
                    <Typography variant="h4" className={classes.pageTitle}>Sign Up</Typography>
                    <form noValidate onSubmit={this.handleSubmit}>
                        <TextField
                         id="email"
                         name="email"
                          type="email"
                           label="Email"
                            className={classes.textField}

                        value={this.state.email}
                         onChange={this.hangleChange}
                         helperText={errors.email}
                         error={errors.email ? true: false}
                          fullWidth />
                    
                    <TextField
                     id="password"
                      name="password"
                       type="password"
                        label="Password"
                         className={classes.textField}
                        value={this.state.password}
                         onChange={this.hangleChange}
                         helperText={errors.password}
                         error={errors.password ? true: false}
                          fullWidth />
                    <TextField
                     id="password2"
                      name="confirmPassword"
                       type="password"
                        label="Confirm Password"
                         className={classes.textField}
                        value={this.state.confirmPassword}
                         onChange={this.hangleChange}
                         helperText={errors.password}
                         error={errors.password ? true: false}
                          fullWidth />
                    
                    <TextField
                     id="handle"
                      name="handle"
                       type="text"
                        label="Handle"
                         className={classes.textField}
                        value={this.state.handle}
                         onChange={this.hangleChange}
                         helperText={errors.handle}
                         error={errors.password ? true: false}
                          fullWidth />

                    {errors.general && (
                        <Typography variant="body2" className={classes.customError}>
                            {errors.general}
                        </Typography>
                    )}
                    <Button type="submit" variant="contained" color="primary" disabled={loading}  className={classes.button}>
                        Sign up
                        {loading && (
                            <CircularProgress size={30} className={classes.progress} />
                        )}
                        </Button>
                    <br />
                    <small className="small" >Have an account ? Login <Link to="/login">Here</Link>  </small>
                    </form>
               </Grid>
               <Grid item sm />
           </Grid>
        )
    }
}

signup.propTypes = {
    classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return {
        auth: state.user.token
    }
}

const mapDispatchToProps  = dispatch => {
    return {
        signup: (email, password, confirmPassword, handle) => dispatch(SignUP(email, password, confirmPassword, handle))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(signup))
