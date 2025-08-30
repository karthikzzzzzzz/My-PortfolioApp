import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer, List, ListItem, ListItemText, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./topbar.css";

const Topbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  return (
    <div className="topbar">
      <div className="logo">
        <h1>My Portfolio</h1>
      </div>
      
      <IconButton onClick={toggleDrawer(true)} className="menu-icon">
        <div className="hamburger-menu">
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </div>
      </IconButton>

     
      <Drawer 
        anchor="right" 
        open={open} 
        onClose={toggleDrawer(false)}
        variant="temporary"
        ModalProps={{
          keepMounted: true
        }}
        PaperProps={{
          className: 'drawer-paper-right'
        }}
      >
        <List className="drawer-list">
          <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/portfolio" onClick={toggleDrawer(false)}>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button component={Link} to="/experience" onClick={toggleDrawer(false)}>
            <ListItemText primary="Education" />
          </ListItem>
          <ListItem button component={Link} to="/projects" onClick={toggleDrawer(false)}>
            <ListItemText primary="Projects" />
          </ListItem>
          <ListItem button component={Link} to="/certifications" onClick={toggleDrawer(false)}>
            <ListItemText primary="Certifications" />
          </ListItem>
          <ListItem button component={Link} to="/memories" onClick={toggleDrawer(false)}>
            <ListItemText primary="Achievement" />
          </ListItem>
        </List>
      </Drawer>

      
    </div>
  );
};

export default Topbar;
