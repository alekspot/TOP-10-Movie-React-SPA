import React, { Component,  } from "react";
import { hot } from "react-hot-loader";

import './App.scss'
import Header from './components/Header/Header';
import ContentContainer from './components/Content/ContentContainer';
import SearchContainer from './components/Search/SearchContainer';
import MoreInfo from "./components/MoreInfo/MoreInfoContainer";
import {Route, withRouter, Switch} from "react-router-dom";

class App extends Component {
  componentDidMount(){
    console.log(5);
  }
  render() {
    return (
        <>
          <Header/>
          <Switch>
              <Route exact path='/'>
                <SearchContainer/>
                <ContentContainer/>
              </Route>
              <Route path='/movie/:contentId?'>
                <MoreInfo/>
              </Route>
              <Route path='/tv/:contentId?'>
                <MoreInfo/>
              </Route>
              <Route path='/ab'>
                <Header/>
              </Route>
           </Switch>
        </>
    );
  }
}

export default withRouter(hot(module)(App));