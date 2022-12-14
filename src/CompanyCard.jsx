import React from 'react';
import { MdLocationOn } from "react-icons/md";
import {
  Typography, CircularProgress, CardContent, Card, CardActions, Button, Box, TextField, Select, MenuItem, InputLabel, FormControl, Divider
} from '@mui/material';
import { Navigate } from "react-router-dom";
import data from './data.js';

class CompanyCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      city: this.props.city,
      state: this.props.state,
      job: this.props.job,
      id: this.props.id,
      h2aViolations: this.props.h2aViolations,
      h2aBW: this.props.h2aBW,
      h2aEE: this.props.h2aEE,
      h2aCMP: this.props.h2aCMP,
      newUrl: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.prettyDollars = this.prettyDollars.bind(this);
  }

  handleClick(event) {
    let begin = "";
    if (window.location.href.split("/")[3] === "es") {
      begin = "/es"
    }
    this.setState({newUrl: begin + "/company/" + this.state.id});
  }

  prettyDollars(str) {
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    return formatter.format(str);
  }

  render() {
    let lanData = data[this.props.language];
    const card = (
      <React.Fragment>
        <div className="card-elem">
          <Typography variant="h5" component="div">
            {this.state.name}
          </Typography>
          <div className="loc">
            <Typography color="secondary.light">
              <MdLocationOn />
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {this.state.city + ", " + this.state.state}
            </Typography>
          </div>
          <Typography variant="body2" color="primary.dark">
            {this.state.job}
          </Typography>
          <br></br>
          <Divider light />
        </div>
        <div className="card-elem">
          <Typography variant="body2">
            {lanData.companyCard.h2aViols}: {this.state.h2aViolations}
          </Typography>
          <Typography variant="body2">
            {lanData.companyCard.numEE}: {this.state.h2aEE}
          </Typography>
          <Typography variant="body2">
            {lanData.company.averageText}: {this.prettyDollars((parseFloat(this.state.h2aBW) + parseFloat(this.state.h2aCMP)) / this.state.h2aViolations)}
          </Typography>
        </div>
        <div className="card-elem">
          {this.state.newUrl && <Navigate to={this.state.newUrl} replace={true} />}
          <Button variant="outlined" onClick={this.handleClick}>{lanData.companyCard.learnMore}</Button>
        </div>
      </React.Fragment>
    );

    return (
      <div className="card">
        <Card className="inner-card" variant="outlined">{card}</Card>
      </div>
    );
  }
}

export default CompanyCard;
