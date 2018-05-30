import React, { Component } from 'react';
import { TransitionGroup, CSSTransitionGroup } from 'react-transition-group';
import Icon from '../icon';
import Applications from './applications';

import {
  aBtn,
  active,
} from './style.css';

class QuickApplication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quickServiceDisplay: false,
    };
  }

  handerClick = () => {
    const { quickServiceDisplay } = this.state;
    if (quickServiceDisplay) {
      this.closeServiceModal();
    } else {
      this.openServiceModal();
    }
  }

  openServiceModal = () => {
    this.setState({
      quickServiceDisplay: true,
    });
  }

  closeServiceModal = () => {
    this.setState({
      quickServiceDisplay: false,
    });
  }

  render() {
    const { quickServiceDisplay } = this.state;
    const appClass = quickServiceDisplay ? active : '';
    return (
      <div>
        <div
          className={`${appClass} ${aBtn}`}
          onClick={this.handerClick}
          onKeyDown={this.handerClick}
          role="presentation"
        >
          <Icon title="快捷应用" type="application" />
        </div>
        <TransitionGroup>
          <CSSTransitionGroup
            transitionName={{
              enter: 'animated',
              enterActive: 'fadeIn',
              leave: 'animated',
              leaveActive: 'fadeOut',
            }}
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            {
              quickServiceDisplay
              ? <Applications
                quickServiceDisplay={quickServiceDisplay}
                closeServiceModal={this.closeServiceModal}
                outsideClickIgnoreClass={aBtn}
                {...this.props}
              />
              : null
            }
          </CSSTransitionGroup>
        </TransitionGroup>
      </div>
    );
  }
}

export default QuickApplication;
