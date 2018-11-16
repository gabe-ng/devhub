import React, { Component } from 'react';
import { Switch, Route} from "react-router-dom";

import Navbar from "./components/Navbar";
import Jobs from "./containers/Jobs";
import Articles from "./containers/Articles";
import Links from "./containers/Links";

class App extends Component {
  render() {
    return <div>
        <Navbar />
        <Switch>
          <Route path="/devhub/links" exact render={props => <Links {...props} />} />
          <Route path="/devhub/articles" exact render={props => <Articles {...props} />} />
          <Route path="/devhub" exact render={props => <Jobs {...props} />} />
        </Switch>
      </div>;
  }
}

export default App;
