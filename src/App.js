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


function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
     <Router>
     <ButtonAppBar />
       <div className="container">
         
       <Switch>
        <Route exact path="/" component={Home} />
        <Route exact  path="/signup" component={Signup} />
       <Route exact  path="/login" component={login} />
       
       </Switch>
       </div>
      
      
     </Router>
    </div>
    </MuiThemeProvider>
  );
}

export default App;
