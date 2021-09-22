import * as React from 'react';


import {
  AppBar,
  Toolbar,
  Box,
  makeStyles,
  Typography,
  Button
} from "@material-ui/core";

const useStyles = makeStyles({
  header: {
    backgroundColor: "#FD2D01",
    color: "white",
    boxShadow: "0px 0px 0px 0px"
  },
  title: {
    flexGrow: 1
  },
});


export default function Navbar() {
  const classes = useStyles();
    return (
      <Box sx={{ 
        flexGrow: 1,
        }}>
        <AppBar position="static" className={classes.header}>
          <Toolbar> 
          <img
            alt="logo groupomania"
            src= "/images/icon"
            width= "50"
            height= "50"
            className="d-inline-block align-top"
          />        
            <Typography 
              variant="h6" 
              component="div" 
              className={classes.title}>
              GROUPOMANIA
            </Typography>
            <Button color="inherit">Connexion</Button>
            <Button color="inherit">Inscription</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
}
