"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_createClass=function(){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),_react=require("react"),_react2=_interopRequireDefault(_react),_reactTransitionGroup=require("react-transition-group"),_icon=require("../icon"),_icon2=_interopRequireDefault(_icon),_applications=require("./applications"),_applications2=_interopRequireDefault(_applications);require("./style.css");var _style={aBtn:"aBtn__style___11-CL",active:"active__style___3tAdR",serviceContainer:"serviceContainer__style___WkeuE",service:"service__style___2Wj6E",serviceBtn:"serviceBtn__style___1Mlvv",contentDiv:"contentDiv__style___1xHyY",content:"content__style___2brkh",serviceGroup:"serviceGroup__style___13ZJB",linkCont:"linkCont__style___3CmLS",btn:"btn__style___2L304"};function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var QuickApplication=function(e){function r(e){_classCallCheck(this,r);var t=_possibleConstructorReturn(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));return t.handerClick=function(){t.state.quickServiceDisplay?t.closeServiceModal():t.openServiceModal()},t.openServiceModal=function(){t.setState({quickServiceDisplay:!0})},t.closeServiceModal=function(){t.setState({quickServiceDisplay:!1})},t.state={quickServiceDisplay:!1},t}return _inherits(r,_react.Component),_createClass(r,[{key:"render",value:function(){var e=this.state.quickServiceDisplay,t=e?_style.active:"";return _react2.default.createElement("div",null,_react2.default.createElement("div",{className:t+" "+_style.aBtn,onClick:this.handerClick,onKeyDown:this.handerClick,role:"presentation"},_react2.default.createElement(_icon2.default,{title:"快捷应用",type:"application"})),_react2.default.createElement(_reactTransitionGroup.TransitionGroup,null,_react2.default.createElement(_reactTransitionGroup.CSSTransitionGroup,{transitionName:{enter:"animated",enterActive:"fadeIn",leave:"animated",leaveActive:"fadeOut"},transitionEnterTimeout:300,transitionLeaveTimeout:300},e?_react2.default.createElement(_applications2.default,_extends({quickServiceDisplay:e,closeServiceModal:this.closeServiceModal,outsideClickIgnoreClass:_style.aBtn},this.props)):null)))}}]),r}();exports.default=QuickApplication,module.exports=exports.default;