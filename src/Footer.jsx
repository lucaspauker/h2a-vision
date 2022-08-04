import React from 'react';
import {
  Box, Typography
} from '@mui/material';
import { GiBinoculars } from "react-icons/gi";
import { Link } from "react-router-dom";
import axios from 'axios';
import './Footer.css';
import data from './data.js';

class Footer extends React.Component {
  render() {
    let lanData = data[this.props.language];
    return (
      <Box sx={{backgroundColor: 'primary.main'}}>
        <footer className="footer">
          <div className="footer-box">
            <Typography variant="subtitle1" align="center" component="p" sx={{lineHeight: 1.5}}>
              {lanData.footer.text}
            </Typography>
          </div>
        </footer>
      </Box>
    );
  }
}

export default Footer;
