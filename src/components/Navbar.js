import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button';
import Link from 'react-router-dom/Link'
import {connect} from 'react-redux'
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip'
import AddIcon from '@material-ui/icons/Add'
import HomeIcon from '@material-ui/icons/Home'
import Notifications from '@material-ui/icons/Notifications'
import PostScream from './postScream'
import Notification from './notification'



class Navbar extends Component {
    render() {
        const {authen} = this.props
        return (
            <AppBar>
                <Toolbar className="nav-container" >
                    {authen ? (
                        <React.Fragment>
                            <PostScream />
                          

                            <Link to="/">
                            <Tooltip title="Home">
                                <IconButton>
                                    <HomeIcon color="primary" />
                                </IconButton>
                                
                            </Tooltip>
                            </Link>

                          
                            <Notification  />
                           

                        </React.Fragment>
                    ): (
                        <React.Fragment>
                            <Button color="inherit" component={Link} to="/login" >Login</Button>
                    <Button component={Link} to="/"  color="inherit">Home</Button>
                    <Button component={Link} to="/signup" color="inherit">Sign Up</Button>
                        </React.Fragment>
                    ) }
                    
                </Toolbar>
            </AppBar>
            
                
        )
    }
}

const mapStateToProps = (state) => {
    return {
      authen: state.user.authenticated
  
    }
  }

export default connect(mapStateToProps)(Navbar);