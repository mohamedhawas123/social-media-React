import { Grid } from '@material-ui/core'
import React, {Component} from 'react'
import axios from 'axios'
import Scream from '../components/Scream'

class Home extends Component {

    state = {
        screams: null
    }

    componentDidMount(){
        axios.get('/screems')
        .then(res => {
            this.setState({screams: res.data})
        })
        .catch(err => console.log(err))
    }

    render() {
        let recentScreamsMarkup = this.state.screams ? (
            this.state.screams.map(post => <Scream scream={post} />)
        ): <p>Loading...</p>
        console.log(this.state.screams)
        return (
           <Grid container spacing={16} >
               <Grid item sm={8} xs={12}>
                   {recentScreamsMarkup}
               </Grid>

               <Grid item sm={4} xs={12}>
                   <p>Profile...</p>
               </Grid>
           </Grid>
        )
    }
}

export default Home