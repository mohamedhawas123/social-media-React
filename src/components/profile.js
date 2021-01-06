import React, {Component} from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import LocationOn from '@material-ui/icons/LocationOn'
import LinkIcon from '@material-ui/icons/Link'
import CalendarToday from '@material-ui/icons/CalendarToday';
import { Redirect } from 'react-router-dom'
import dayjs from 'dayjs'
import Paper from '@material-ui/core/Paper'
import MuilLink from '@material-ui/core/Link'
import {Link} from 'react-router-dom'
import {fetchData} from '../store/actions/data'



const styles = {
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
  }

class Profile extends Component {

    componentDidMount() {
        this.props.fetch()
    }
    
    render() {
        const {classes} = this.props; 
        
        console.log(this.props.data.credentials.imageUrl)
       
        return (
            <h1>hey</h1>
        )
        
        
    }
}



const mapStateToProps = (state) => {
    return {
        data: state.data.data,
        loading: state.data.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetch: () => dispatch(fetchData())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Profile))

/** 
 * let profileMarkup = !this.props.loading ? (
           
        <Paper className={classes.paper}>
            <div className={classes.profile}>
                <div className="profile-image">
                    <img src={data.credentials.imageUrl} alt="profile" />
                </div>
                <hr />
                <div className="profile-detail">
                    <MuilLink component={Link} to={`/users/${data.credentials.handle}`} color="primary" variant="h5">
                        @{data.credentials.handle}
                    </MuilLink>
                    <h3 />
                    {data.credentials.bio && <Typography variant="body2">{data.credentials.bio}</Typography> }
                    <hr />
                    {data.credentials.location && (
                        <div>
                        <LocationOn color="primary"  />
                        <span>{data.credentials.location}</span>
                        <hr />
                        </div>

                    )}
                    {data.credentials.website && (
                        <React.Fragment>
                            <LinkIcon color="primary" />
                            <a href={data.credentials.website} target="_blank" ref="noopener noreferrer">
                                {' '}{data.credentials.website}
                            </a>
                            <hr />
                        </React.Fragment>
                    )}
                    <CalendarToday color="primary" /> {' '}
                    <span>Joined {dayjs(data.credentials.createdAt).format('MMM YYYY')}</span>
                </div>
            </div>
        </Paper> ): (<p>Loading...</p>)

        return profileMarkup

 */