"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_temp,_createClass=function(){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),_react=require("react"),_react2=_interopRequireDefault(_react),_propTypes=require("prop-types"),_propTypes2=_interopRequireDefault(_propTypes);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Href=(_temp=_class=function(e){function r(e){_classCallCheck(this,r);var t=_possibleConstructorReturn(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));return t.state={},t}return _inherits(r,_react.Component),_createClass(r,[{key:"render",value:function(){var e=this.props.hrefs.map(function(e,t){return _react2.default.createElement("a",{href:e.href,key:t,target:"_blank"},e.name)});return _react2.default.createElement("div",null,e)}}]),r}(),_class.propTypes={hrefs:_propTypes2.default.arrayOf(_propTypes2.default.object)},_class.defaultProps={hrefs:[]},_temp);exports.default=Href,module.exports=exports.default;