import React, {Component} from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typorgraphy from '@material-ui/core/Typography'
import {Link} from 'react-router-dom'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import {connect } from 'react-redux'
import {likeScream , unLikeScream} from '../store/actions/like'
import ChatIcon from '@material-ui/icons/Chat'
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit'
import Tooltip from '@material-ui/core/Tooltip'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import DeleteScream from './deleteScream'


const styles = {
    card: {
        display: 'flex',
        marginBotttom: 20,
        position: 'relative'

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


    likedScream = () => {
        if(this.props.likes && this.props.likes.find(like => like.screamId ===this.props.scream.screemId))
        return true
        else return false
    }
    likeScream = () => {
        this.props.like(this.props.scream.screemId, this.props.token)
    }

    unlikeScream = () => {
        this.props.unlike(this.props.scream.screemId)
    }

    
    
    render() {
        dayjs.extend(relativeTime)
        const {classes} = this.props
        const {userImage, body, commentCount, createAt, likeCount, screemId, userHandle} = this.props.scream
        console.log(this.props.scream)

        const likeButton = !this.props.authen ? (
            <Tooltip title="like">
            <IconButton >
                <Link to="/login">
                    <FavoriteBorder color="primary" />
                </Link>
              
            </IconButton>
          </Tooltip>
        
            ): (
                this.likedScream() ? (
                    <Tooltip title="Undo like" onClick={this.unlikeScream} >
                    <IconButton >
                        
                        <FavoriteIcon color="primary" />
                        
                      
                    </IconButton>
                  </Tooltip>
                ): (
                    <Tooltip title="like" onClick={this.likeScream} >
                    <IconButton >
                        
                        <FavoriteBorder color="primary" />
                        
                      
                    </IconButton>
                  </Tooltip>
                )
            );

           const deleteButton =  //this.props.authen && userHandle  === this.props.cred ? (
                <DeleteScream screamId={this.props.scream.screemId} />

           // ): null


        return (
            <Card className={classes.card} >
                <CardMedia image={userImage} title="Profile image" className={classes.image} />
                <CardContent className={classes.content} >
                    <Typorgraphy variant="h5" component={Link} to={`/users/${userHandle}`} color="primay"  >
                        {userHandle }
                        </Typorgraphy>
                        {deleteButton}
                    <Typorgraphy variant="body2" color="textSecondary">
                        {dayjs(createAt).fromNow()}
                        </Typorgraphy>
                    <Typorgraphy variant="body1">
                        {body}
                        </Typorgraphy>
                    {likeButton}
                    <span>{likeCount} likes </span>
                    <Tooltip title="comment" placement="top">
                    <IconButton >
                      <ChatIcon color = "primary" />
                    </IconButton>
                  </Tooltip>
                </CardContent>
            </Card>

        )

    }
}

const mapStateToProps = (state) =>{
    return {
        likes: state.data.data.likes,
        authen: state.user.authenticated,
        state: state.user.token,
       // cred : state.data.data.credentials.handle
    }
}

const mapDispatchToProps = dispatch => {
    return {
        like: (screamId, getState) => dispatch(likeScream(screamId, getState)),
        unlike : (screamId) => dispatch(unLikeScream(screamId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Scream))