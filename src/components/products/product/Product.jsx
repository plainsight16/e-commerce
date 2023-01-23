import React from 'react'

import { Card, CardMedia, CardContent, CardActions, Typography, IconBottom } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

const Product = ({product}) => {
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.cardMedia} image=''></CardMedia>
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant='h5' gutterBottom>{Product.name}</Typography>
          <Typography variant='h5'>{Product.price}</Typography>
        </div>
      </CardContent>
    </Card>
  )
}

export default Product
