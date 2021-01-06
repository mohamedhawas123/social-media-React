import { Grid } from '@material-ui/core'
import React, {Component} from 'react'
import axios from 'axios'
import Scream from '../components/Scream'
import {fetchData} from '../store/actions/data'
import {connect} from 'react-redux'
import Profile from '../components/profile'

class Home extends Component {

    state = {
        screams: []
    }

    componentDidMount(){
        axios.get('/screems')
        .then(res => {
            this.setState({screams: res.data})
        })
        .catch(err => console.log(err))

        this.props.fetch()


    }

    render() {
        console.log(this.props.data)
      
        let recentScreamsMarkup = this.state.screams ? (
            this.state.screams.map(post => <Scream key={post.screemId} scream={post} />)
        ): <p>Loading...</p>
        console.log(this.state.screams)
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
        data: state.data.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetch: () => dispatch(fetchData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)