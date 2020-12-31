import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import LeftComponent from './Containers/component1'
import RightComponent from './Containers/component2'
import {AppContext} from './Contex'
// import HeranChaku from './Containers/component3'
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      key: "chaku",
      value: "chaka ni happiness"
    }
  }

  render() {
    return (
      <div>
        <div>App Component</div>
        <AppContext.Provider value={{data: this.state, method: (data) => {this.setState(data)}}}>
          <div className="d-flex">
            <LeftComponent />
            <RightComponent />
          </div>
        </AppContext.Provider>
        {/* <HeranChaku/> */}
      </div>
    )
  }
}

export default App;
