import React from 'react';
import {
  CircularProgress, Typography, Grid, Button, Paper, Divider, Accordion, AccordionSummary, AccordionDetails
} from '@mui/material';
import { MdExpandMore } from "react-icons/md";
import './Home.css';
import CompanyCard from './CompanyCard.jsx';
const axios = require('axios');

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.changeURL = this.changeURL.bind(this);
  }

  componentDidMount(prevProps) {
    this.load();
  }

  changeURL(event, url) {
    window.location.href = url;
  }

  load(data) {
    console.log("Loading");
    axios.get('http://localhost:5000/company/list/0/h2a-violations')
      .then((response) => {
        this.setState({data: response.data.slice(0, 3), loaded: true});
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    console.log(this.state.data);
    let display;
    if (this.state.data.length > 0) {
      display = <div className="cards">
        {this.state.data.map((elem, ind) =>
          <CompanyCard name={elem.name} city={elem.city} state={elem.state} job={elem.job} h2aViolations={elem.h2aViolations} h2aBW={elem.h2aBW} h2aEE={elem.h2aEE} id={elem._id} key={elem._id} />
        )}
      </div>;
    } else {
      display = <CircularProgress />
    }
    return (
      <div id="home">
        <div className="hero">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Welcome to H-2A Vision
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary" paragraph>
            Search for violation data about any H-2A sponsor company.
            This tool makes searching Department of Labor Wage and Hour compliance data easy.
          </Typography>
          <div className="hero-buttons">
            <Button variant="contained" color="primary" onClick={event => this.changeURL(event, "/search")}>
              Search for a company
            </Button>
            <Button variant="outlined" color="primary" onClick={event => this.changeURL(event, "/resources")}>
              Find other resources
            </Button>
          </div>
        </div>
        <Divider light />
        <div className="about">
          <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
            FAQ
          </Typography>
          <br></br>
          <div className="accordion-box">
            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<MdExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Where is the data from?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<MdExpandMore />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Who is this for?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<MdExpandMore />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Who are we?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <Divider light />
        <div className="most-violations">
          <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
            Companies with the most H-2A violations
          </Typography>
          {display}
        </div>
      </div>
    );
  }
}

export default Home;
