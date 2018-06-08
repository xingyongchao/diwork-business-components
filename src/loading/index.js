import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { wrap } from './index.css';
class Loading extends Component {
  static propTypes = {
    loading: PropTypes.object
  };
  static defaultProps = {
    loading: {
      color: "#0084ff"
    }
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { loading } = this.props;
    return (
      <div className = {wrap}>
        {
          [1,2,3,4,5].map((index)=>{
            return <span style={{background:loading.color}} key={index}></span>
          })
        }
      </div>
    )
  }
}
export default Loading;