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
import dayjs from 'dayjs'
import {Link} from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'
import CloseIcon from '@material-ui/icons/Close'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import UnfoldMore from '@material-ui/icons/UnfoldMore'
import {fetchoneSCream} from '../store/actions/getScream'
import Comment from './comment'


const styles = theme => ({
    ...theme.spreadThis,
    invis: {
        border : 'none',
        margin: 4
    },
    profileImage: {
        width : '100%',
        height: "100%",
        borderRadius: '50%',
        ObjectFit: 'cover'
    },
    DialogContent: {
        padding : 20
    },
    closeButton: {
        position: 'absolute',
        left: '90%'
    },
    spinner: {
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 50
    },
    vis:{
        width: '100%',
        borderBottom: '1px solid rgba(0,0,0,0,1)',
        marginBottom: 20
    }

})

class ScreamDialog extends Component {


    state = {
        open: false

    }

    handleOpen = () => {
        this.setState({open: true})
        this.props.fetchScream(this.props.screamId)
    }

    handleClose = () => {
        this.setState({open: false})
    }


    render() {
        const {classes} = this.props
        const  {userHandle, body, createdAt, userImage, commentCount, comments} = this.props.scream
        const dialogMarkUP = this.props.loading ? (
            <div className={classes.spinner} >
                <CircularProgress size={200} />
            </div>
        ): (
            <Grid container spacing={16}>
                <Grid item sm={5}>
                    <img src={userImage} alt="Profile" className={classes.profileImage} />
                </Grid>
                <Grid item sm={7}>
                    <Typography
                    component={Link}
                    color="primary"
                    variant="h5"
                    to={`/users/${userHandle}`}>
                        @{userHandle}
                    </Typography>
                    <hr className={classes.invis} />
                    <Typography variant="body2" color="textSecondary">
                        {dayjs(createdAt).format('h:mm a, MMMM DD YYYY')}
                    </Typography>
                    <hr className={classes.invis} />
                    <Typography variant="body1">
                        {body}
                    </Typography>

                  <span>{commentCount} comments </span>
                    
                </Grid>
                <hr className={classes.invis} />
                <Comment comments={comments} />
            </Grid>
        )


        return(
            <React.Fragment>
                <Tooltip title="Expand scream" onClick={this.handleOpen}>
                    <IconButton>
                        <UnfoldMore color="primary" /> 
                    </IconButton>
                
                </Tooltip>
                    
                    <Dialog open={this.state.open} onClose={this.handleClose} fullWidth maxWidth="sm">
                <Tooltip title="close" onClick={this.handleClose}  >
                    <IconButton >
                        <CloseIcon  />
                    </IconButton>
                  </Tooltip> 
                  <DialogContent className={classes.DialogContent}>
                      {dialogMarkUP}
                  </DialogContent>

                    </Dialog>
                  


            </React.Fragment>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        scream: state.data.scream,
        loading: state.data.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchScream : (screamId) => dispatch(fetchoneSCream(screamId))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(withStyles(styles)(ScreamDialog))