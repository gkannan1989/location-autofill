import React, { Component } from 'react'; 
import './App.css';
import { Provider } from 'react-redux';
import configureStore from './store';
import image from './static/images/map-with-pin.png';

import LayoutComponent from './components/layout.js';

let store = configureStore();

class App extends Component {

  render() {
    return (
    <div>
      <div className='App-header'>
         <img className='mapImg' alt="Map Image" src={image} />
      </div>
      <Provider store={store}>
          <LayoutComponent />
      </Provider>
    </div>
  )
   
  }
/*
  mapStateToProps = state => {
    return {
      results: state.searchResults,
      
    }
  }

  mapDispatchToProps = dispatch => {
    return {
      increase: () => {
        dispatch({type: "INCREASE"})
      }
    }
  }

*/
}

export default App;
