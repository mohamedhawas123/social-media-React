import React, {Component} from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import dayjs from 'dayjs'
import {Link} from 'react-router-dom'
import MuilLink from '@material-ui/core/Link'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import LocationOn from '@material-ui/icons/LocationOn'
import LinkIcon from '@material-ui/icons/Link'
import CalendarToday from '@material-ui/icons/CalendarToday';

const styles = (theme) => ({
    paper: {
      padding: 20
    },
    profile: {
      '& .image-wrapper': {
        textAlign: 'center',
        position: 'relative',
        '& button': {
          position: 'absolute',
          top: '80%',
          left: '70%'
        }
      },
      '& .profile-image': {
        width: 200,
        height: 200,
        objectFit: 'cover',
        maxWidth: '100%',
        borderRadius: '50%'
      },
      '& .profile-details': {
        textAlign: 'center',
        '& span, svg': {
          verticalAlign: 'middle'
        },
        '& a': {
          color: theme.palette.primary.main
        }
      },
      '& hr': {
        border: 'none',
        margin: '0 0 10px 0'
      },
      '& svg.button': {
        '&:hover': {
          cursor: 'pointer'
        }
      }
    },
    buttons: {
      textAlign: 'center',
      '& a': {
        margin: '20px 10px'
      }
    }
  })


  const StaticProfile = (props) => {
      
      const {classes} = props

      return (
        <Paper className={classes.paper}>
        <div className={classes.profile}>
            <div className="image-wrapper">
                <img src={props.scream && props.scream.imageUrl} className="profile-image" alt="profile" />
               
            </div>
            <hr />
            <div className="profile-detail">
                <MuilLink component={Link} to={`/users/${props.scream&&props.scream.handle}`} color="primary" variant="h5">
                    @{props.scream&&props.scream.handle}
                </MuilLink>
                <h3 />
                 <Typography variant="body2">{props.scream&&props.scream.bio}</Typography> 
                <hr />
                
                    <div>
                    <LocationOn color="primary"  />
                    <span>{props.scream&&props.scream.location}</span>
                    <h1>hey</h1>
                   
                    <hr />
                    </div> 

                
               
                    <React.Fragment>
                        <LinkIcon color="primary" />
                        
                        <hr />
                    </React.Fragment>
            
                <CalendarToday color="primary" /> {' '}
                <span>Joined {props.scream&&dayjs( props.scream&&props.scream.createdAt).format('MMM YYYY')}</span>
            </div>
         
        </div>
    </Paper>
      )

  }


  StaticProfile.prototypes = {
      profile: PropTypes.object.isRequired,
      classes: PropTypes.object.isRequired
  }

  export default withStyles(styles)(StaticProfile)