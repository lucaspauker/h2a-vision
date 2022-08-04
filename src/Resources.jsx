import React from 'react';
import {
  CircularProgress, Typography, Grid, Button, Paper, Divider, Accordion, AccordionSummary, AccordionDetails, Card
} from '@mui/material';
import { ImLink } from "react-icons/im";
import './Resources.css';
import data from './data.js';

class Resources extends React.Component {
  render() {
    let lanData = data[this.props.language];
    return (
      <div id="resources">
        <div className="header">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            {lanData.resources.title}
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary" paragraph>
            {lanData.resources.description}
          </Typography>
        </div>
        <Divider light />
        <div className="box">
          <Typography variant="h4" color="inherit">
            {lanData.resources.genInfoTitle}
          </Typography>
          <div className="list">
            {lanData.resources.genInfoData.map((elem, ind) =>
              <InfoCard title={elem.title} text={elem.text} link={elem.link} key={elem.title + this.props.language}/>
            )}
          </div>
        </div>
        <Divider light />
        <div className="box">
          <Typography variant="h4" color="inherit">
            {lanData.resources.rightsTitle}
          </Typography>
          <div className="list">
            {lanData.resources.rightsData.map((elem, ind) =>
              <InfoCard title={elem.title} text={elem.text} link={elem.link} key={elem.title}/>
            )}
          </div>
        </div>
        <Divider light />
        <div className="box">
          <Typography variant="h4" color="inherit">
            {lanData.resources.searchTitle}
          </Typography>
          <div className="list">
            {lanData.resources.searchData.map((elem, ind) =>
              <InfoCard title={elem.title} text={elem.text} link={elem.link} key={elem.title}/>
            )}
          </div>
        </div>
        <Divider light />
        <div className="box">
          <Typography variant="h4" color="inherit">
            {lanData.resources.otherTitle}
          </Typography>
          <div className="list">
            {lanData.resources.otherData.map((elem, ind) =>
              <InfoCard title={elem.title} text={elem.text} link={elem.link} key={elem.title}/>
            )}
          </div>
        </div>
      </div>
    );
  }
}

class InfoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      text: this.props.text,
      link: this.props.link,
    };
  }

  render() {
    const card = (
      <a href={this.state.link} target="_blank">
        <div className="outer-card-box">
          <div>
            <div className="card-elem">
              <Typography variant="h5" component="div">
                <b>{this.state.title}</b>
              </Typography>
            </div>
            <div className="card-elem">
              <Typography variant="body" color="textSecondary">
                {this.state.text}
              </Typography>
            </div>
          </div>
          <ImLink />
        </div>
      </a>
    );

    return (
      <div className="card">
        <Card className="inner-card" variant="outlined">{card}</Card>
      </div>
    );
  }
}

export default Resources;
