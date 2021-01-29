import React, {Component} from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import {connect} from 'react-redux'
import Grid from '@material-ui/core/Grid'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField'
import {submitComment} from '../store/actions/commitcomment'
import Button from '@material-ui/core/Button';



const styles = theme => ({
    ...theme.spreadThis,
    invis: {
        border : 'none',
        margin: 4
    },
})


class CommentForm extends Component {

    state = {
        body: '',
        

    }


    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.submitcomment(this.props.screemId, {body: this.state.body} ,this.props.token)
        console.log(this.props.screemId)
        this.setState({body: ''})
    }

    render() {
        const {authen} = this.props.authen
        const {classes} = this.props
        const errors = this.state.errors;

        const commentFormMark =  (
            <Grid item sm={12} style={{textAlign: 'center'}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                name= "body"
                type="text"
                label = "comment on Scream"
              
           
                onChange= {this.handleChange}
                fullWidth
                className={classes.textField}
                />
                <Button type="submit" 
                variant="contained"
                 color="primary"
                 className={classes.button}
                 >Submit</Button>
                </form>
                <hr className={classes.vis} />
                
            </Grid>

        ) 

        return (
            <React.Fragment>
                {commentFormMark}
            </React.Fragment>
        )
    }
    
}

const mapStatetoProps = state => {
    return {
        authen: state.user.authenticated,
        token: state.user.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitcomment: (screamId, commentData ,token) => dispatch(submitComment(screamId, commentData ,token))
    }
}


export default connect(mapStatetoProps, mapDispatchToProps)(withStyles(styles)(CommentForm))