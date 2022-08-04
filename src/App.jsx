import React from 'react';
import './App.css';

import {
  BrowserRouter, Route, Routes
} from 'react-router-dom';
import {
  Paper, Grid, ThemeProvider
} from '@mui/material';
import { createTheme } from '@mui/material/styles';

import Home from './Home';
import Search from './Search';
import TopBar from './TopBar';
import Company from './Company';
import Resources from './Resources';
import Footer from './Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4a148c',
      dark: '#270A49',
      light: '#c8b8dc',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ad1457',
      light: '#f7b6d2',
      contrastText: '#fff',
    },
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: window.location.href,
      language: 'english',
    };
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  changeLanguage(event, language) {
    this.setState({language: language});
  }

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <ThemeProvider theme={theme}>
          <TopBar url={this.state.url} language={this.state.language} changeLanguage={this.changeLanguage}/>
          <div className="topbar-buffer">
            <Routes>
              <Route
                path="/company/:id"
                element = {<Company language={this.state.language}/>}
              />
              <Route path="/"
                element={<Home language={this.state.language}/>}
              />
              <Route path="/resources"
                element={<Resources language={this.state.language} />}
              />
              <Route path="/search"
                element={<Search language={this.state.language} />}
              />
            </Routes>
          </div>
          <Footer language={this.state.language} />
        </ThemeProvider>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
