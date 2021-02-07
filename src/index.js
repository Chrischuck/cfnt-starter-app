import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as BumbagProvider } from 'bumbag';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LandingPage from './routes/Landing';

const theme = {
  palette: {
    primary: '#47b475',
    secondary: '#292929',
    Button: {
      defaultProps: {
        palette: 'primary',
        color: 'white',
      },
    },
  },
  fonts: {
    default: 'Raleway, Helvetica Neue, Helvetica, Arial, sans-serif',
    heading: 'Raleway, Helvetica Neue, Helvetica, Arial, sans-serif',
    mono: 'Raleway, Helvetica Neue, Helvetica, Arial, sans-serif',
  },
};

class App extends React.Component {
  render() {
    return (
      <BumbagProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/login">foo</Route>
            <Route path="/signup">bar</Route>
            <Route path="/">
              <LandingPage />
            </Route>
          </Switch>
        </Router>
      </BumbagProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
