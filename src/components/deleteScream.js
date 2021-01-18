import React, {Component} from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typorgraphy from '@material-ui/core/Typography'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import {likeScream , unLikeScream} from '../store/actions/like'
import ChatIcon from '@material-ui/icons/Chat'
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit'
import Tooltip from '@material-ui/core/Tooltip'
import FavoriteIcon from '@material-ui/icons/Favorite'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import DeleteOutline from '@material-ui/icons/DeleteOutline'
import {deleteSCream} from '../store/actions/delete'
import {connect} from 'react-redux'
import { DialogContent } from '@material-ui/core';


const styles = {
    deleteButton: {
        position: 'absolute',
        left: '80%'
    }
}


class DeleteScream extends Component {

    state = {
        open: false
    }

    handleOpen =() => {
        this.setState({open: true})
    }

    handleClose = () => {
        this.setState({open:false})
    }

    deleteSCream = () => {
        this.props.delete(this.props.screamId)
        this.setState({open: false})
    }

    render() {
        return (
            <React.Fragment>
                <Tooltip title="Delete Scream" placement="right">
                    <IconButton className="deleteButton" onClick={this.handleOpen}>
                      <DeleteOutline color="secondary" />
                    </IconButton>
                  </Tooltip>
                  <Dialog open={this.state.open} onClose={this.handleClose} fullWidth
                  maxWidth="sm">
                      <DialogTitle>
                          Are you sure you want to delete this scream ?
                      </DialogTitle>
                      <DialogActions>
                          <Button onClick={this.handleClose} color="primary">
                              Cancel
                          </Button>
                          <Button onClick={this.deleteSCream} color="secondary">
                              Delete
                          </Button>
                      </DialogActions>
                  </Dialog>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps =(dispatch) => {
    return {
        delete: (screamId) => dispatch(deleteSCream(screamId))
    }
}

export default connect(null, mapDispatchToProps)(DeleteScream)