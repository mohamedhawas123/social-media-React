import React from 'react'
import noImg from '../images/blank.png'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'

const styles = theme => ({
    card: {
        display: 'flex',
        marginBottom: 20,
    },
    cardContent: {
        width: '100%',
        flexDirection: 'column',
        padding: 25
    },
    cover :{
        minWidth: 200,
        objectFit: 'cover'
    },
    handle: {
        width: 60,
        height:20,
        backgroundColor: 'blue',
        marginBottom: 7
    },
    date : {
        height:14,
        width:100,
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    fullLine: {
        height: 15,
        width: '95',
        marginBottom: 10
    },
    fullLine: {
        height: 15,
        width: '95',
        marginBottom: 10
    }

})

const ScreamSk = (props) => {
    const {classes} = props

    const content = Array.from({length: 5}).map((item, index) => (
        <Card className={classes.card} key={index}>
            <CardMedia className={classes.cover} image={noImg} />
            <CardContent className={classes.cardContent}>
                <div className={classes.handle} />
                <div className={classes.date} />
                <div className={classes.fullLine} />
                <div className={classes.fullLine} />
            </CardContent>
        </Card>
    ))
    return (<React.Fragment>{content}</React.Fragment>)

    
}

ScreamSk.prototypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ScreamSk)

