import React, {Component} from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';


const styles = {
    card: {
        display: 'flex'
    }
}

class Scream extends Component {
    render() {
        const {classes} = this.props
        const {userImage} = this.props.scream
        console.log(this.props.scream.userImage)
        return (
            <div>
                <CardMedia image={userImage} />
            </div>

        )

    }
}

export default withStyles(styles)(Scream)