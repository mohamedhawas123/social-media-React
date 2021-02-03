import React, {Component} from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import {connect} from 'react-redux'
import dayjs from 'dayjs'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';

import NotificationsIcon from '@material-ui/icons/Notifications';
import FavoriteIcon from '@material-ui/icons/Favorite'
import ChatIcon from '@material-ui/icons/Chat'
import {markNotificationRead} from '../store/actions/notifications'
import { IconButton } from '@material-ui/core'
import { relativeTime } from 'dayjs/locale/*'



class Notification extends Component {

    state = {
        anchorEl : null
    }

    handleOpen = (event) =>{
        this.setState({anchorEl: event.target})
    }
    handleClose = () => {
        this.setState({anchorEl: null})
    }

    onMenuOpend = () => {
        let unreadNotificationsId = this.props.notifications
    }

    render(){
        const notifications = this.props.notifications
        const anchorEl = this.state.anchorEl
        
        dayjs.extend(relativeTime)

        let notificationsIcon;
        if(notifications && notifications.length > 0) {
            notifications.filter(not => not.read === false).length > 0 ? 
            notificationsIcon = (
                <Badge badgeContent={notifications.filter(not => not.read === false).length}
                color="seccondary">
                    <notificationsIcon />  
                </Badge>
            ):(
                notificationsIcon = <NotificationsIcon />
            )
            
        }else{
            notificationsIcon = <NotificationsIcon />

        }
        let notificationMarkup = notifications && notifications.length > 0 ? (
            notifications.map(not => {
                const verb = not.type === 'like' ? 'liked' : 'commented on'
                const time = dayjs(not.createdAt).fromNow();
                const iconColor = not.read ? 'primary': 'secondary'
                const icon = not.type === 'like' ? (
                    <FavoriteIcon color = {iconColor} style={{marginRight: 10}} />

                ): (
                    <ChatIcon color={iconColor} style={{marginRight: 10}} />
                )

                return (
                    <MenuItem key={not.createdAt} onClick={this.handleClose}>
                        {icon}
                        <Typography component={link}
                        color="default"
                        variant="body1"
                        to={`/users/${not.recipient}/scream/${not.screamId}}`}>
                            {not.sender} {verb} your scream {time}
                        </Typography>
                    </MenuItem>
                )
            })
        ) : (
            <MenuItem onClick={this.handleClose}>
                you have no notifications yet
            </MenuItem>
        )

        return (
            <React.Fragment>
                <Tooltip placement="top" title="Notification">
                    <IconButton aria-owns={anchorEl ? 'simple-menu': undefined}
                    aria-haspopup="true" onClick={this.handleOpen}>
                        {notificationsIcon}
                    </IconButton>
                </Tooltip>
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.hanleClose}
                onEntered={this.onMenuOpend}>
                    {notificationMarkup}
                </Menu>
            </React.Fragment>
        )
    }
}


const mapStateToProps = state => {
    return {
        notifications: state.data.data.notifications
    }
}

export default connect(mapStateToProps, {markNotificationRead})(Notification)