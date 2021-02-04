import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Grid from '@material-ui/core/Grid'
import {getUser} from '../store/actions/getuser'
import axios from 'axios'
import Scream from '../components/Scream'
import StaticProfile from '../components/staticprofile'
import ScreamSk from '../utils/skl'


class User extends Component {
    state = {
        profile: null
    }

    componentDidMount() {
        const handle = this.props.match.params.handle
        this.props.getData(handle)
        axios.get(`/user/${handle}`)
        .then(res => {
            this.setState({profile: res.data.user})
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        const screams = this.props.data.screams
        console.log(screams)
        console.log(this.state.profile)
        const screamsMarkup = screams ? (
            screams.map(scream => <Scream key={scream.screamId} scream={scream} />)
        ): (<p>No Screams from this person yet</p>)



        return(
            <Grid container spacing={16}>
                <Grid item sm={8} xs={12}>
                    {screamsMarkup}
                </Grid>
                <Grid item sm={4} xs={12}>
                    {this.state.profile === null ? (
                        <ScreamSk />
                    ):
                    (<StaticProfile profile={this.state.profile} />)
                    }
                </Grid>
            </Grid>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getData: (handle) => dispatch(getUser(handle))
    }
}

const mapStateToProps = state => {
    return {
        data: state.data.screams
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)