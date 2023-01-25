import React from 'react'

import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@mui/icons-material'

import useStyles from './styles.js'


const Product = ({product}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.cardMedia} image=''></CardMedia>
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant='h5' gutterBottom>{Product.name}</Typography>
          <Typography variant='h5'>{Product.price}</Typography>
        </div>
      </CardContent>
      <Typography variant='h2' color='textSecondary'>{product.description}</Typography>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart/>
        </IconButton>
      </CardActions> 
    </Card>
  );
}

export default Product
