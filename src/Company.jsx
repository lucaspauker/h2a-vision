import React from 'react';
import {
  Typography, CircularProgress, Divider, Card
} from '@mui/material';
import { useParams } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import './Company.css';
import data from './data.js';
const axios = require('axios');

class CompanyComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      caseID: 0,
      name: '',
      address: '',
      city: '',
      state: '',
      job: '',
      h2aViolations: 0,
      h2aBW: 0,
      h2aEE: 0,
      startDate: '',
      endDate: '',
      loaded: false,
      id: this.props.id,
    };
    this.prettyDollars = this.prettyDollars.bind(this);
  }

  componentDidMount(prevProps) {
    this.load();
  }

  load(d) {
    console.log("Loading " + this.state.id);
    axios.get(data.db + '/company/' + this.state.id)
      .then((response) => {
        this.setState({
          caseID: response.data.caseID,
          name: response.data.name,
          address: response.data.address,
          city: response.data.city,
          state: response.data.state,
          h2aViolations: response.data.h2aViolations,
          h2aBW: response.data.h2aBW,
          job: response.data.job,
          h2aEE: response.data.h2aEE,
          h2aCMP: response.data.h2aCMP,
          startDate: response.data.startDate,
          endDate: response.data.endDate,
          loaded: true
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  prettyDollars(str) {
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    return formatter.format(str);
  }

  render() {
    let body;
    let lanData = data[this.props.language];
    if (this.state.loaded) {
      body = <>
        <div className="header">
          <Typography variant="h2" color="inherit">
            {this.state.name}
          </Typography>
          <div className='loc'>
            <Typography color="secondary.light">
              <MdLocationOn />
            </Typography>
            <a href={"https://www.google.com/maps/search/" + this.state.address + ", " + this.state.city + ", " + this.state.state} target="_blank">
              <Typography variant="h4" color="text.secondary" className="address">
                {this.state.address + ", " + this.state.city + ", " + this.state.state}
              </Typography>
            </a>
          </div>
          <Typography variant="h5" color="primary.dark">
            {this.state.job}
          </Typography>
        </div>
        <Divider light />
        <div className="info">
          <Typography variant="h4" color="inherit">
            {lanData.company.violStatsText}
          </Typography>
          <div className="violations">
            <Typography className="violation" variant="body" color="inherit">
              <b>{lanData.company.h2aViols}:</b> {this.state.h2aViolations}
            </Typography>
            <Typography className="violation" variant="body" color="inherit">
              <b>{lanData.company.numEE}:</b> {this.state.h2aEE}
            </Typography>
            <Typography className="violation" variant="body" color="inherit">
              <b>{lanData.company.h2aBW}:</b> {this.prettyDollars(this.state.h2aBW)}
            </Typography>
            <Typography className="violation" variant="body" color="inherit">
              <b>{lanData.company.h2aCMP}:</b> {this.prettyDollars(this.state.h2aCMP)}
            </Typography>
            <Typography className="violation" variant="body" color="inherit">
              <b>{lanData.company.totalText}:</b> {this.prettyDollars(parseFloat(this.state.h2aBW) + parseFloat(this.state.h2aCMP))}
            </Typography>
            <Typography className="violation" variant="body" color="inherit">
              <b>{lanData.company.averageText}:</b> {this.prettyDollars((parseFloat(this.state.h2aBW) + parseFloat(this.state.h2aCMP)) / this.state.h2aViolations)}
            </Typography>
            <br></br>
            <Typography className="violation" variant="body" color="inherit">
              <b>{lanData.company.invStart}:</b> {this.state.startDate}
            </Typography>
            <Typography className="violation" variant="body" color="inherit">
              <b>{lanData.company.invEnd}:</b> {this.state.endDate}
            </Typography>
          </div>
        </div>
        <Divider light />
        <div className="external">
          <Typography variant="h4" color="inherit">
            {lanData.company.extLinksText}
          </Typography>
          <div className="links">
            <Typography className="link" variant="body" color="inherit">
              <a href={"https://enforcedata.dol.gov/Enfdata/search.php?case_id=" + this.state.caseID} target="_blank">
                {lanData.company.dol}
              </a>
            </Typography>
            <Typography className="link" variant="body" color="inherit">
              <a href={"https://contratados.org/es/review-search?title=" + this.state.name.split(" ").slice(0, 2).join(" ") + "+&op=OK"} target="_blank">
                Contratados
              </a>
            </Typography>
          </div>
        </div>
        </>
    } else {
      body = <CircularProgress />
    }
    return (
      <div id="company">
        <Card className="card">
          {body}
        </Card>
      </div>
    );
  }
}

function Company(props) {
  console.log(useParams());
  return <CompanyComp id={useParams().id} language={props.language}/>
}


export default Company;
