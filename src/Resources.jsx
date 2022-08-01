import React from 'react';
import {
  CircularProgress, Typography, Grid, Button, Paper, Divider, Accordion, AccordionSummary, AccordionDetails
} from '@mui/material';
import './Resources.css';

class Resources extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div id="resources">
        <div className="header">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Resources
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary" paragraph>
            Use this page to find resources about workers rights, government websites, and other resources for H-2A workers.
          </Typography>
        </div>
        <Divider light />
        <div className="box">
          <Typography variant="h4" color="inherit">
            Worker's Rights
          </Typography>
          <div className="list">
            <Typography className="elem" variant="body" color="inherit">
              <b>H-2A violations:</b> {this.state.h2aViolations}
            </Typography>
          </div>
        </div>
        <Divider light />
        <div className="box">
          <Typography variant="h4" color="inherit">
            Government Websites
          </Typography>
          <div className="list">
            <Typography className="elem" variant="body" color="inherit">
              <b>H-2A violations:</b> {this.state.h2aViolations}
            </Typography>
          </div>
        </div>
        <Divider light />
        <div className="box">
          <Typography variant="h4" color="inherit">
            Other Resources
          </Typography>
          <div className="list">
            <Typography className="elem" variant="body" color="inherit">
              <b>H-2A violations:</b> {this.state.h2aViolations}
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}

export default Resources;
