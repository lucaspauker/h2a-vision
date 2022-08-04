import React from 'react';
import {
  CircularProgress, Typography, Grid, Button, Paper, Divider, Accordion, AccordionSummary, AccordionDetails
} from '@mui/material';
import { MdExpandMore } from "react-icons/md";
import './Home.css';
import CompanyCard from './CompanyCard.jsx';
import data from './data.js';

const axios = require('axios');

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      expanded: '',
    };
    this.changeURL = this.changeURL.bind(this);
    this.changeExpanded = this.changeExpanded.bind(this);
  }

  componentDidMount(prevProps) {
    this.load();
  }

  changeURL(event, url) {
    if (window.location.href.split("/")[3] === "es") {
      window.location.href = "/es" + url;
    } else {
      window.location.href = url;
    }
  }

  changeExpanded(event, question) {
    if (this.state.expanded === question) {
      this.setState({expanded: ''});
    } else {
      this.setState({expanded: question});
    }
  }

  load(d) {
    console.log("Loading");
    axios.get('http://' + data.db + '/company/list/0/h2a-violations')
      .then((response) => {
        this.setState({data: response.data.slice(0, 3), loaded: true});
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    let display;
    if (this.state.data.length > 0) {
      display = <div className="cards">
        {this.state.data.map((elem, ind) =>
          <CompanyCard
            name={elem.name}
            city={elem.city}
            state={elem.state}
            job={elem.job}
            h2aViolations={elem.h2aViolations}
            h2aBW={elem.h2aBW}
            h2aEE={elem.h2aEE}
            h2aCMP={elem.h2aCMP}
            id={elem._id}
            key={elem._id}
            language={this.props.language}
          />
        )}
      </div>;
    } else {
      display = <CircularProgress />
    }
    let lanData = data[this.props.language];
    return (
      <div id="home">
        <div className="hero">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            {lanData.home.titleText}
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary" paragraph>
            {lanData.home.descriptionText}
          </Typography>
          <div className="hero-buttons">
            <Button variant="contained" color="primary" onClick={event => this.changeURL(event, "/search")}>
              {lanData.home.searchButtonText}
            </Button>
            <Button variant="outlined" color="primary" onClick={event => this.changeURL(event, "/resources")}>
              {lanData.home.resourcesButtonText}
            </Button>
          </div>
        </div>
        <Divider light />
        <div className="about">
          <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
            {lanData.home.FAQTitleText}
          </Typography>
          <br></br>
          <div className="accordion-box">
            {lanData.home.faq.map((elem, ind) =>
              <Question key={elem.question} changeExpanded={this.changeExpanded} expanded={this.state.expanded} question={elem.question} answer={elem.answer}/>
            )}
          </div>
        </div>
        <Divider light />
        <div className="most-violations">
          <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
            {lanData.home.mostViolationsTitleText}
          </Typography>
          {display}
        </div>
      </div>
    );
  }
}

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: this.props.question,
      answer: this.props.answer,
      changeExpanded: this.props.changeExpanded,
    };
  }

  render() {
    return (
      <Accordion className="accordion" expanded={this.props.expanded === this.state.question} onClick={(event) => this.state.changeExpanded(event, this.state.question)}>
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>{this.state.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography align="left" dangerouslySetInnerHTML={{__html: this.state.answer}} />
        </AccordionDetails>
      </Accordion>
    );
  }
}

export default Home;
