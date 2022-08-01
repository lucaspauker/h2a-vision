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

const theme = createTheme({
  palette: {
    primary: {
      main: '#4a148c',
      dark: '#270A49',
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
    };
  }

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <ThemeProvider theme={theme}>
          <TopBar url={this.state.url}/>
          <div className="topbar-buffer">
            <Routes>
              <Route
                path="/company/:id"
                element = {<Company />}
              />
              <Route path="/"
                element={<Home />}
              />
              <Route path="/resources"
                element={<Resources />}
              />
              <Route path="/search"
                element={<Search />}
              />
            </Routes>
          </div>
        </ThemeProvider>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
