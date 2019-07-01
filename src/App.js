import React, {Component, Fragment} from 'react';
import {Provider} from 'react-redux'
import Header from './component/header'
import store from './store'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        
      </Fragment>
    )
  };
}

export default App;
