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
import {fetchoneSCream} from '../store/actions/getScream'

const styles = {

}

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
        return(
            <h1>h</h1>
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