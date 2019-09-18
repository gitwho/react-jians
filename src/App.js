import React, {Component, Fragment} from 'react';
import {Provider} from 'react-redux'
import {BrowerHistory, Route} from 'react-route-dom';

import Header from './component/header'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />

        </Fragment>
      </Provider>
      
    )
  };
  
  

}

export default App;
