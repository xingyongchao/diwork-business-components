"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_class2,_temp,_createClass=function(){function n(e,t){for(var l=0;l<t.length;l++){var n=t[l];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,l){return t&&n(e.prototype,t),l&&n(e,l),e}}(),_react=require("react"),_react2=_interopRequireDefault(_react),_propTypes=require("prop-types"),_propTypes2=_interopRequireDefault(_propTypes),_reactOnclickoutside=require("react-onclickoutside"),_reactOnclickoutside2=_interopRequireDefault(_reactOnclickoutside);require("./style.css");var _style={aBtn:"aBtn__style___11-CL",active:"active__style___3tAdR",serviceContainer:"serviceContainer__style___WkeuE",service:"service__style___2Wj6E",serviceBtn:"serviceBtn__style___1Mlvv",contentDiv:"contentDiv__style___1xHyY",content:"content__style___2brkh",serviceGroup:"serviceGroup__style___13ZJB",linkCont:"linkCont__style___3CmLS",btn:"btn__style___2L304"};function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Applications=(0,_reactOnclickoutside2.default)((_temp=_class2=function(e){function t(e){_classCallCheck(this,t);var n=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onClickScroll=function(){var e=n.list,t=e.offsetHeight,l=0;n.interval?clearInterval(n.interval):n.interval=setInterval(function(){t<=l?(clearInterval(n.interval),n.interval=null,l=0):(e.pageYOffset?e.pageYOffset+=3:e.scrollTo?e.scrollTo(0,e.scrollTop+3):e.scrollTop+=3,l+=3)},10)},n.onscrollFun=function(){var e=n.list,t=Math.floor(e.scrollTop||e.pageYOffset||e.scrollTop);e.scrollHeight===e.clientHeight+t?n.setState({openAllstate:!0}):t<=10&&n.setState({openAllstate:!1})},n.openAllAppList=function(){var e=n.props.openAllFn;n.handleClickOutside(),e()},n.openApp=function(e){var t=n.props.openServiceFn;n.handleClickOutside(),t(e)},n.interval=null,n.state={openAllstate:!1},n}return _inherits(t,_react.Component),_createClass(t,[{key:"componentWillMount",value:function(){var e=this.props.serviceList,t=!!(e&&e.length<=12);this.setState({openAllstate:t})}},{key:"handleClickOutside",value:function(){var e=this.props,t=e.closeServiceModal;e.quickServiceDisplay&&t()}},{key:"render",value:function(){var r=this,e=this.props.serviceList;return _react2.default.createElement("div",{className:_style.serviceContainer},_react2.default.createElement("div",{className:_style.service,ref:function(e){r.list=e},onScroll:this.onscrollFun},_react2.default.createElement("ul",{className:"clearfix"},e&&e.map(function(e){var t=e.applicationCode,l=e.applicationIcon,n=e.applicationName;return _react2.default.createElement("div",{key:t,className:_style.contentDiv,onClick:function(){r.openApp(t)},onKeyDown:function(){r.openApp(t)},role:"presentation"},_react2.default.createElement("li",null,_react2.default.createElement("img",{alt:n,src:l})),_react2.default.createElement("div",{className:_style.content,title:n},n))}))),this.state.openAllstate?_react2.default.createElement("div",{className:_style.linkCont,onClick:this.openAllAppList,onKeyDown:this.openAllAppList,role:"presentation"},_react2.default.createElement("a",null,"全部应用")):_react2.default.createElement("div",{className:_style.serviceBtn},_react2.default.createElement("button",{className:_style.btn,onClick:this.onClickScroll},"更多应用")))}}]),t}(),_class2.propTypes={serviceList:_propTypes2.default.arrayOf(_propTypes2.default.object),openAllFn:_propTypes2.default.func,openServiceFn:_propTypes2.default.func,closeServiceModal:_propTypes2.default.func,quickServiceDisplay:_propTypes2.default.bool},_class2.defaultProps={serviceList:[],openAllFn:function(){},openServiceFn:function(){},closeServiceModal:function(){},quickServiceDisplay:!1},_class=_temp))||_class;exports.default=Applications,module.exports=exports.default;