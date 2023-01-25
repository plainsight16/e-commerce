import React from 'react'
import { AppBar, ToolBar, IconButton, Badge, MenuItem, Menu, Typography, fabClasses } from '@mui/material';
import { LogoDevOutlined, ShoppingCart } from '@mui/icons-material';
import logo from '../../assests/automarket.png';

const NavBar = () => {
  return (
    <>
      <AppBar>
        <ToolBar>
            <Typography variant="h6" className={classes.Title} color="inherit">
                <img src={logo} alt="AutoMarket" height="25px" className={classes.image}/>
                AutoMarket
            </Typography>
        </ToolBar>
      </AppBar>
      <div className={classes.grow} />
      <div className={classes.button}>
        <IconButton aria-label='Show cart items' color="inherit">
            <Badge badgeContent={2} color="secondary">
                <ShoppingCart />
            </Badge>
        </IconButton>
      </div>
    </>
  )
}

export default NavBar
