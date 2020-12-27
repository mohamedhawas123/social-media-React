import React, {Component} from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typorgraphy from '@material-ui/core/Typography'
import {Link} from 'react-router-dom'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

const styles = {
    card: {
        display: 'flex',
        marginBotttom: 20,

    },
    image: {
        minWidth: 200,
    },
    content:{
        padding: 25,
        objectFit: 'cover'

    }


}

class Scream extends Component {
    render() {
        dayjs.extend(relativeTime)
        const {classes} = this.props
        const {userImage, body, commentCount, createAt, likeCount, screemId, userHandle} = this.props.scream
        console.log(this.props.scream)
        return (
            <Card className={classes.card} >
                <CardMedia image={userImage} title="Profile image" className={classes.image} />
                <CardContent className={classes.content} >
                    <Typorgraphy variant="h5" component={Link} to={`/users/${userHandle}`} color="primay"  >{userHandle }</Typorgraphy>
                    <Typorgraphy variant="body2" color="textSecondary">{dayjs(createAt).fromNow()}</Typorgraphy>
                    <Typorgraphy variant="body1">{body}</Typorgraphy>
                </CardContent>
            </Card>

        )

    }
}

export default withStyles(styles)(Scream)