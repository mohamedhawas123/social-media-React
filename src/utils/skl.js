import React from 'react'
import noImg from '../images/blank.png'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'

const styles = theme => ({

})

const ScreamSk = (props) => {
    const {classes} = this.props

    const content = Array.from({length: 5}).map((item, index) => (
        <Card 
    )

    return <React.Fragment>{content}</React.Fragment>
}

ScreamSk.prototypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ScreamSk)

