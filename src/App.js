import React, { Component } from 'react';
import { Switch, Route} from "react-router-dom";

import Navbar from "./components/Navbar";
import Jobs from "./components/Jobs";
import Articles from "./components/Articles";

class App extends Component {
  render() {
    return <div>
        <Navbar />
        <Switch>
          <Route path="/articles" exact render={props => <Articles {...props} />} />
          <Route path="/" exact render={props => <Jobs {...props} />} />
        </Switch>
      </div>;
  }
}

export default App;
