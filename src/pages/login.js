import React, {Component} from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import AppIcon from '../images/cafe.jpg'
import {Typography} from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import axios from 'axios'

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

    }

}




class login extends Component {
    
    state= {
        email: "",
        password: "",
        loading: false,
        error: {}
    }


    handleSubmit = (e) => {
        const {email, password} =  this.state
        e.preventDefault()
        this.setState({loading:true})
        const userData = {
            email: email,
            password: password
        }
        axios.post('/login', userData )
        .then(res => {
            this.setState({loading:false})
        })
        .catch(err => {
            this.setState({error:err.response.data, loading:false})

        })
        
        
    }

    hangleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        const {classes} = this.props 
        return (
           <Grid container className={classes.form}>
               <Grid item sm />
               <Grid item sm>
                    <img src={AppIcon} alt="monkey" width="50%" height="70%" className={classes.image} />
                    <Typography variant="h4" className={classes.pageTitle}>Login</Typography>
                    <form noValidate onSubmit={this.handleSubmit}>
                        <TextField id="email" name="email" type="email" label="Email" className={classes.textField}
                        value={this.state.email} onChange={this.hangleChange} fullWidth />
                    
                    <TextField id="password" name="password" type="password" label="Password" className={classes.textField}
                        value={this.state.password} onChange={this.hangleChange} fullWidth />
                    <Button type="submit" variant="contained" color="primary" className={classes.button}>Submit</Button>

                    </form>
               </Grid>
               <Grid item sm />
           </Grid>
        )
    }
}

login.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(login)
