import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/home'
import login from './pages/login'
import Signup from './pages/signup'
import ButtonAppBar from './components/Navbar'
import './App.css'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import jwtDecode from 'jwt-decode'
import AuthRoute from './utils/authRoute'



const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#33c9dc',
      main: '#00bcd4',
      dark: '#008394',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff6333',
      main: '#ff3d00',
      dark: '#b22a00',
      contrastText: '#fff'
    }
  },

  typography: {
    useNextVariants: true
  }

})

let authenticated;

const token = localStorage.IdToken
if(token) {
  const decodedToken = jwtDecode(token);
  console.log(decodedToken)
  if(decodedToken * 1000 < Date.now()) {
    window.location.href = '/login'
    authenticated = false
  }else {
    authenticated = true
  }

}


function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
     <Router>
     <ButtonAppBar />
       <div className="container">
         
       <Switch>
        <Route exact path="/" component={Home} />
        <AuthRoute exact  path="/signup" component={Signup} authenticated={authenticated} />
       <AuthRoute exact  path="/login" component={login} authenticated={authenticated} />
       
       </Switch>
       </div>
      
      
     </Router>
    </div>
    </MuiThemeProvider>
  );
}

export default App;
