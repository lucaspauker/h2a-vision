import React from 'react';
import './TopBar.css';
import {
  AppBar, Toolbar, Typography, CircularProgress
} from '@mui/material';
import { GiBinoculars } from "react-icons/gi";
import { Link } from "react-router-dom";
import axios from 'axios';

/**
 * Define TopBar
 */
class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topBarStr: null,
    };

    let url = this.props.url;
  }

  render() {
    return (
      <AppBar className="topbar" position="absolute">
        <Toolbar>
          <div className="title-box">
            <GiBinoculars/>
            <Typography variant="h5" color="inherit">
              <Link to="/" className="title">
                H-2A Vision
              </Link>
            </Typography>
          </div>
          <div className="links">
            <Typography variant="h6" color="inherit">
              <Link to="/" className="link">
                Home
              </Link>
            </Typography>
            <Typography variant="h6" color="inherit">
              <Link to="/resources" className="link">
                Resources
              </Link>
            </Typography>
            <Typography variant="h6" color="inherit">
              <Link to="/search" className="link">
                Search
              </Link>
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;
