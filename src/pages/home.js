import { Grid } from '@material-ui/core'
import React, {Component} from 'react'
import axios from 'axios'
import Scream from '../components/Scream'
import {fetchData} from '../store/actions/data'
import {connect} from 'react-redux'
import Profile from '../components/profile'
import {fetchSCream} from '../store/actions/sceam'
import ScreamSk from '../utils/skl'


class Home extends Component {

    state = {
        screams: []
    }
    

    componentDidMount(){
        
        this.props.scream()
        this.props.fetch()


    }
    

    render() {
        console.log(this.props.data)
      
        let recentScreamsMarkup = this.props.screams ? (
            this.props.screams.map(post => <Scream key={post.screemId} scream={post} />)
        ): (<ScreamSk />) 
        return (
           <Grid container spacing={16} >
               <Grid item sm={8} xs={12}>
                   {recentScreamsMarkup}
               </Grid>

               <Grid item sm={4} xs={12}>
                    <Profile />
               </Grid>
           </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.data.data,
        screams: state.data.screams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetch: () => dispatch(fetchData()),
        scream: () => dispatch(fetchSCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)