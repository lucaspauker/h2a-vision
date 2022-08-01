import React from 'react';
import './Search.css';
import {
  Typography, CircularProgress, CardContent, Card, CardActions, Button, Box, TextField, Select, MenuItem, InputLabel, FormControl, Divider
} from '@mui/material';
import CompanyCard from './CompanyCard.jsx';
const axios = require('axios');

const STATES = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY']

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      inputText: '',
      data: [],
      rawData: [],
      state: '',
      sort: 'alphabetical',
      loaded: false,
      index: 0,
      maxIndex: 0,
      filtered: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.sortData = this.sortData.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.incrementPage = this.incrementPage.bind(this);
    this.decrementPage = this.decrementPage.bind(this);
    this.setPage = this.setPage.bind(this);
  }

  componentDidMount(prevProps) {
    axios.get('http://localhost:5000/company/npages')
      .then((response) => {
        this.setState({maxIndex: response.data});
      })
      .catch((error) => {
        console.log(error);
      });
    this.load();
  }

  sortData() {
    return;
    console.log("Sorting");
    const sort = this.state.sort;
    this.setState({data: this.state.data.sort(function(a, b) {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      const h2aA = a.h2aViolations;
      const h2aB = b.h2aViolations;
      if (sort === 'h2a-violations') {
        if (h2aA > h2aB) {
          return -1;
        }
        if (h2aA < h2aB) {
          return 1;
        }
      }
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    })});
  }

  load(index=0) {
    console.log("Loading page " + index);
    this.setState({loaded: false});
    if (this.state.filtered) {
      if (this.state.inputText.length > 0) {
        axios.get('http://localhost:5000/company/search/' + this.state.inputText + '/' + this.state.sort)
          .then((response) => {
            this.setState({rawData: response.data, data: response.data.slice(0, 100), loaded: true, filtered: true, maxIndex: Math.ceil(response.data.length / 100) })
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        axios.get('http://localhost:5000/company/state/' + this.state.state  + "/" + this.state.sort)
          .then((response) => {
            this.setState({rawData: response.data, data: response.data.slice(index * 100, (index + 1) * 100), loaded: true, filtered: true, maxIndex: Math.ceil(response.data.length / 100) });
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    } else {
      axios.get('http://localhost:5000/company/list/' + index + '/' + this.state.sort)
        .then((response) => {
          this.setState({data: response.data, loaded: true}, () => {
            //this.sortData();
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  handleStateChange(event) {
    this.setState({ state: event.target.value, loaded: false, data: [], index: 0 });
    if (event.target.value === '') {
      axios.get('http://localhost:5000/company/npages')
        .then((response) => {
          this.setState({maxIndex: response.data});
        })
        .catch((error) => {
          console.log(error);
        });
      axios.get('http://localhost:5000/company/list/0/' + this.state.sort)
        .then((response) => {
          this.setState({data: response.data, loaded: true, filtered: false}, () => {
            //this.sortData();
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    } else {
      axios.get('http://localhost:5000/company/state/' + event.target.value + "/" + this.state.sort)
        .then((response) => {
          this.setState({rawData: response.data, data: response.data.slice(0, 100), loaded: true, filtered: true, maxIndex: Math.ceil(response.data.length / 100) }, () => {
            //this.sortData();
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }

  handleSortChange(event) {
    this.setState({ sort: event.target.value, index: 0 }, () => {
      this.load();
    });
  }

  handleChange(event) {
    this.setState({ inputText: event.target.value, state: '' });
    if (event.target.value === '') {
      this.handleSubmit(event, this.state.sort);
    } else {
      axios.get('http://localhost:5000/company/search/' + event.target.value + '/' + this.state.sort)
        .then((response) => {
          this.setState({rawData: response.data, data: response.data.slice(0, 100), loaded: true, filtered: true, maxIndex: Math.ceil(response.data.length / 100) })
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }

  handleSubmit(event, sort="alphabetical") {
    // Refresh
    axios.get('http://localhost:5000/company/npages')
      .then((response) => {
        this.setState({maxIndex: response.data});
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({ data: [], loaded: false, filtered: false, inputText: '', sort: sort, state: ''}, () => {
      this.load();
    });
  }

  incrementPage(event) {
    let newIndex = this.state.index + 1;
    if (this.state.index < this.state.maxIndex - 1) {
      this.setState({index: newIndex, loaded: false, data: []});
      this.load(newIndex);
    }
  }

  decrementPage(event) {
    let newIndex = this.state.index - 1;
    if (this.state.index > 0) {
      this.setState({index: newIndex, loaded: false, data: []});
      this.load(newIndex);
    }
  }

  setPage(event, index) {
    console.log("set page " + index);
    let newIndex = index;
    this.setState({index: newIndex, loaded: false, data: []});
    this.load(newIndex);
  }

  render() {
    let display;
    if (this.state.data.length > 0) {
      display = <div className="cards">
        {this.state.data.map((elem, ind) =>
          <CompanyCard name={elem.name} city={elem.city} state={elem.state} job={elem.job} h2aViolations={elem.h2aViolations} h2aBW={elem.h2aBW} h2aEE={elem.h2aEE} id={elem._id} key={elem._id} />
        )}
      </div>;
    } else if (!this.state.loaded) {
      display = <CircularProgress />;
    } else {
      display = <Typography variant="h5" color="inherit">
            No companies found
          </Typography>;
    }

    let pages = [];
    let minIndex;
    let maxIndex;
    if (this.state.index < 5) {
      minIndex = 0;
    } else {
      minIndex = this.state.index - 5;
    }
    maxIndex = minIndex + 10;
    if (this.state.maxIndex < maxIndex) {
      maxIndex = this.state.maxIndex
    }
    for (let i=minIndex; i<maxIndex; i++) {
      pages.push(i);
    }
    let mw = 30;
    let pagination = <div className="pagination">
      <Button variant="text" onClick={this.decrementPage} style={{minWidth: mw}}>&lt;</Button>
      {pages.map((elem, ind) => {
        if (elem === this.state.index) {
          return(<Button className="active" variant="text" key={ind} style={{minWidth: mw, fontWeight: 900}}>{elem + 1}</Button>);
        } else {
          return(<Button variant="text" key={ind} onClick={event => this.setPage(event, elem)} style={{minWidth: mw}}>{elem + 1}</Button>);
        }
      })}
      <Button variant="text" onClick={this.incrementPage} style={{minWidth: mw}}>&gt;</Button>
    </div>

    return (
      <div id="search">
        <div className="header">
          <Typography variant="h2" color="inherit">
            Search H-2A violation data
          </Typography>
        </div>
        <div className="input">
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="state-label">State</InputLabel>
            <Select
              labelId="state-label"
              className="state"
              value={this.state.state}
              onChange={this.handleStateChange}
              label="State"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {STATES.map((elem, ind) =>
                <MenuItem value={elem} key={ind}>{elem}</MenuItem>
              )}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="sort-label">Sort</InputLabel>
            <Select
              labelId="sort-label"
              className="sort"
              value={this.state.sort}
              onChange={this.handleSortChange}
              label="sort"
            >
              <MenuItem value="alphabetical">Alphabetical</MenuItem>
              <MenuItem value="h2a-violations">H-2A Violations</MenuItem>
            </Select>
          </FormControl>
          <TextField className="tf" id="outlined-basic" label="Search by company name" variant="outlined" value={this.state.inputText} onChange={this.handleChange} />
          <Button variant="outlined" onClick={this.handleSubmit}>Refresh</Button>
        </div>
        <Divider light />
        {pagination}
        <div className="card-container">
          {display}
        </div>
      </div>
    );
  }
}

export default Search;