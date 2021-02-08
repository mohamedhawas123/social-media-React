import React, {Component} from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import {connect} from 'react-redux'
import {postSceam} from '../store/actions/postScream'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit'
import TextField from '@material-ui/core/TextField'
import CircularProgress from '@material-ui/core/CircularProgress'
import AddIcon from '@material-ui/icons/Add'
import CloseIcon from '@material-ui/icons/Close'



const styles = theme => ({
    ...theme.spreadThis,
    submitButton:{
        position: 'relative'
    },
    progressSpinner:{
        position: 'absolute'
    },
    closeButton: {
        position: 'absolute',
        left: '90%',
        top: '10%'
    }



})

class PostScream extends Component {


    state= {
        open: false,
        body: '',
        errors: {}
    }

    handleOpen = () => {
        this.setState({open: true})
    }

    handleClose = () => {
        this.setState({open: false})
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log("body is" + this.state.body)
        this.props.post({body: this.state.body})
        this.handleClose()
    }

    render(){
        const {classes} = this.props
        return(
            <React.Fragment>
                  <Tooltip title="Post a scream " onClick={this.handleOpen} >
                    <IconButton >
                        <AddIcon color="primary" />
                    </IconButton>
                  </Tooltip>

                <Dialog open={this.state.open} onClose={this.handleClose} fullWidth maxWidth="sm">
                <Tooltip title="close" onClick={this.handleClose} tipClassName={classes.closeButton} >
                    <IconButton >
                        <CloseIcon  />
                    </IconButton>
                  </Tooltip>

                <DialogTitle>
                    Post a new Scream
                </DialogTitle>
                <DialogContent>
                    <form onSubmit={this.handleSubmit}>
                        <TextField
                        name="body"
                        type="text"
                        label="SCREAM"
                        multiline
                        rows="3"
                        placeholder="Scream"
                        className="classes.textField"
                        onChange={this.handleChange}
                        fullWidth />

                        <Button type="submit" variant="contained" color="primary"
                        className={classes.submitButton}>
                            Submit
                           {this.props.loading && (<CircularProgress size={30} className={classes.progressSpinner} />)}


                        </Button>

                    </form>
                </DialogContent>

                </Dialog>
                  
            </React.Fragment>
        )
    }

}

const mapStateToProps = state => {
    return {
        data: state.data.screams,
        loading: state.data.loading,
    
    }
}

const mapDispatchToProps = dispatch => {
    return {
        post: (scream) =>  dispatch(postSceam(scream))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(PostScream))
