import React, {Component} from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import {Link} from 'react-router-dom'
import dayjs from 'dayjs'


const styles = theme => ({
    ...theme.spreadThis,
    invis: {
        border : 'none',
        margin: 4
    },
    vis:{
        width: '100%',
        borderBottom: '1px solid rgba(0,0,0,0,1)',
        marginBottom: 20
    },
    commentImage:{
        maxWidth: '100%',
        height: 100,
        objectFit: 'cover',
        borderRadius: '50%'
    },
    commentData:{
        marginLeft: 20
    }


})

class Comment extends Component {
    render(){
        const {comments, classes} = this.props
      
            return(
                <Grid container>
                    {comments && comments.map(comment => {
                        const {body, createdAt, userImage, userHandle} = comment;
                        return(
                            <React.Fragment key={createdAt} >
                                <Grid item sm={12}>
                                    <Grid container>
                                        <Grid item sm={12}>
                                            <img src={userImage} alt="image" className={classes.commentImage} />

                                        </Grid>
                                        <Grid item sm={9}>
                                            <div className={classes.commentData}>
                                                <Typography
                                                variant="h5"
                                                component={Link}
                                                to={`/users/${userHandle}`}
                                                color="primary">{userHandle}</Typography>

                                                <Typography variant="body2" color="textSecondary">
                                                    {dayjs(createdAt).format('h:mm a, MMMM DD YYYY')}
                                                </Typography>
                                                <hr className={classes.invis} />
                                                <Typography variant="body1">{body}</Typography>

                                            </div>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <hr className={classes.vis} />
                            </React.Fragment>
                        )
                    })}
                </Grid>
            )

        
    }
}


export default withStyles(styles)(Comment)