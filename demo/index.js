import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Quick from './page/quick';
import Personals from './page/personals';

import './public/animate.css';
import './index.css';

class Demo extends Component {
  render() {
    return (
      <div>
        <div className="wrap">
        <Quick />
        </div>
        <div className="wrap">
          <Personals />
        </div>
      </div>
    )
  }
}


ReactDom.render(
  <Demo />,
  document.getElementById('app')
)