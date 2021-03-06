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
import { useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit'
import Tooltip from '@material-ui/core/Tooltip'
import {uploadPic} from '../store/actions/data'
import {logout} from '../store/actions/user'
import { Keyboard, KeyboardReturn } from '@material-ui/icons'
import EditDetail  from './edit'



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
  

class Profile extends Component {

  handleImageChange = (event) => {
    const image = event.target.files[0]
    console.log(image)
    //send to server

    const formData = new FormData();
    formData.append('image', image, image.name)
    console.log(formData)
    this.props.upload(formData)

  }

  handleEditPicture = () => {
    const fileInput = document.getElementById('imageInput')
  
    fileInput.click()

  }

  handleLogout = () => {
    this.props.logout()
    this.forceUpdate()
  }

    componentDidMount() {
        this.props.fetch()
    }
    
    
    render() {
        const {classes} = this.props; 
        const {data, loading, error} = this.props
       

        let papaer = this.props.data ? (
          <Paper className={classes.paper}>
              <div className={classes.profile}>
                  <div className="image-wrapper">
                      <img src={data.credentials ? data.credentials.imageUrl: ""} className="profile-image" alt="profile" />
                      <input type="file" id="imageInput" hidden="hidden" onChange={this.handleImageChange}  />
                      <Tooltip title="Edit Profile Picture" placement="top">
                      <IconButton onClick={this.handleEditPicture} className="button">
                        <EditIcon color="primary" />
                      </IconButton>
                      </Tooltip>
                  </div>
                  <hr />
                  <div className="profile-detail">
                      <MuilLink component={Link} to={`/users/${data.credentials && data.credentials.handle}`} color="primary" variant="h5">
                          @{data.credentials && data.credentials.handle}
                      </MuilLink>
                      <h3 />
                      {data.credentials && data.credentials.bio && <Typography variant="body2">{data && data.credentials.bio}</Typography> }
                      <hr />
                      {data.credentials && data.credentials.location && (
                          <div>
                          <LocationOn color="primary"  />
                          <span>{data.credentials && data.credentials.location}</span>
                          <h1>hey</h1>
                         
                          <hr />
                          </div> 
  
                      )}
                      {data.credentials && data.credentials.website && (
                          <React.Fragment>
                              <LinkIcon color="primary" />
                              <a href={data.credentials && data.credentials.website} target="_blank" ref="noopener noreferrer">
                                  {' '}{data.credentials && data.credentials.website}
                              </a>
                              <hr />
                          </React.Fragment>
                      )}
                      <CalendarToday color="primary" /> {' '}
                      <span>Joined {dayjs(data.credentials && data.credentials.createdAt).format('MMM YYYY')}</span>
                  </div>
                  <Tooltip title="logout" placement="top">
                    <IconButton onClick={this.handleLogout}>
                      <KeyboardReturn color="primary" />
                    </IconButton>
                  </Tooltip>
                  <EditDetail />
              </div>
          </Paper>
        ): <p>loading</p>
       
        let profileMarkup = !this.props.loading ? (

          <React.Fragment>

            {error && (<p>{JSON.stringify(error)}</p>)}
            {loading && (
              <p>loading........................</p>
            )}
            {data.credentials && (
              <React.Fragment>
                {papaer}
                </React.Fragment>

            )}
           
           </React.Fragment> ): (<p>Loading...</p>)
  
          return profileMarkup
        
        
    }
}



const mapStateToProps = (state) => {
    return {
        data: state.data.data,
        loading: state.data.loading,
        error: state.data.error,
        token: state.user.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetch: () => dispatch(fetchData()),
        upload : (formData) => dispatch(uploadPic(formData)),
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Profile))


