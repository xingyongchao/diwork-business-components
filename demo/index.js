import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Quick from './page/quick';
import Personals from './page/personals';
import SearchContainer from './page/SearchContainer';


import './public/animate.css';
import './index.css';

class Demo extends Component {
  render() {
    return (
      <div>
        <div className="c_wrap1">
          <Quick />
        </div>
        <div className="c_wrap2">
          <Personals />
        </div>
        <div className="c_wrap3">
          <SearchContainer />
        </div>
      </div>
    )
  }
}


ReactDom.render(
  <Demo />,
  document.getElementById('app')
)