import React from 'react';
import './TopBar.css';
import {
  AppBar, Toolbar, Typography, CircularProgress, Button
} from '@mui/material';
import { GiBinoculars } from "react-icons/gi";
import { Link } from "react-router-dom";
import axios from 'axios';

import data from './data.js';

/**
 * Define TopBar
 */
class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topBarStr: null,
      changeLanguage: this.props.changeLanguage,
    };
    this.changeLanName = this.changeLanName.bind(this);
  }

  changeLanName(lan) {
    if (lan === 'english') {
      return 'español';
    } else {
      return 'english';
    }
  }

  render() {
    let lanData = data[this.props.language];
    return (
      <AppBar id="topbar" position="absolute">
        <Toolbar>
          <div className="title-box">
            <GiBinoculars/>
            <Typography variant="h5" color="inherit">
              <Link to="/" className="title">
                {lanData.topbar.titleText}
              </Link>
            </Typography>
          </div>
          <div className="links">
            <Button variant="contained" color="warning" onClick={(event) => {this.state.changeLanguage(event, this.changeLanName(this.props.language))}}>
              {this.changeLanName(this.props.language)}
            </Button>
            <Typography variant="h6" color="inherit">
              <Link to="/" className="link">
                {lanData.topbar.homeText}
              </Link>
            </Typography>
            <Typography variant="h6" color="inherit">
              <Link to="/resources" className="link">
                {lanData.topbar.resourcesText}
              </Link>
            </Typography>
            <Typography variant="h6" color="inherit">
              <Link to="/search" className="link">
                {lanData.topbar.searchText}
              </Link>
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;
