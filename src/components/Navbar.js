import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button';
import Link from 'react-router-dom/Link'


class Navbar extends Component {
    render() {
        return (
            <AppBar>
                <Toolbar className="nav-container" >
                    <Button color="inherit" component={Link} to="/login" >Login</Button>
                    <Button component={Link} to="/"  color="inherit">Home</Button>
                    <Button component={Link} to="/signup" color="inherit">Sign Up</Button>
                </Toolbar>
            </AppBar>
            
                
        )
    }
}

export default Navbar