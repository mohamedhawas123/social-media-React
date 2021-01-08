import React, {Component} from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import {connect} from 'react-redux'
import {editDetail} from '../store/actions/data'
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

const styles = (theme) => ({
    ...theme
})


class EditDetail extends Component {


    state = {
        bio: "",
        website: "",
        location: "",
        open: false
    }

    

    handleOpen = () => {
        this.setState({open: true})
        this.mapUserDetail(this.props.data.credentials)
    }
    handleClose = () => {
        this.setState({open: false})
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
        
    }

    handleSubmit() {
        
    }

    
    componentDidUpdate() {
        const {credentials} = this.props.data
        this.mapUserDetail(credentials)
        
    }

    mapUserDetail = (credentials) => {
        this.setState({
            bio: credentials.bio ? credentials.bio : '',
            website: credentials.website ? credentials.website : '',
            location: credentials.location ? credentials.location : '',
        })
    }



    render() {
        const {classes} = this.props
        return (
            <React.Fragment>
                <Tooltip title="Edit detail" placement="top">
                <IconButton onClick={this.handleOpen} className={classes.button}>
                    <EditIcon color="primary" />
                </IconButton>
                </Tooltip>
                <Dialog open={this.state.open} onClose={this.handleClose} fullWidth
                maxWidth="sm">
                    <DialogTitle>Edit you details</DialogTitle>
                    <DialogContent>
                        <form>
                            <TextField name="bio"
                            type="text" 
                            label="Bio"
                            multiline
                            row="3"
                            placeholder="A short bio about yourself"
                            classes={classes.TextField} value={this.state.bio}
                            onChange={this.handleChange} fullWidth />

                             <TextField name="website"
                            type="text" 
                            label="website"
                            multiline
                            row="3"
                            placeholder="your website"
                            classes={classes.TextField} value={this.state.website}
                            onChange={this.handleChange} fullWidth />

                            <TextField name="location"
                            type="text" 
                            label="location"
                            multiline
                            row="3"
                            placeholder="your location"
                            classes={classes.TextField} value={this.state.location}
                            onChange={this.handleChange} fullWidth />
                            

                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleSubmit} color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
            

            
        )
    }
}



const mapStateToProps = state => {
    return {
        data: state.data.data

    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(EditDetail))
