"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SearchItem=void 0;var _class,_temp,_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_createClass=function(){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),_react=require("react"),_react2=_interopRequireDefault(_react),_propTypes=require("prop-types"),_propTypes2=_interopRequireDefault(_propTypes),_icon=require("../icon"),_icon2=_interopRequireDefault(_icon),_searchItem=require("./searchItem"),_searchItem2=_interopRequireDefault(_searchItem);require("./style.css");var _style={search:"search__style___2glW7",searchExtend:"searchExtend__style___GddC6",searchBtn:"searchBtn__style___3ksJn",inputArea:"inputArea__style___1c3xt",searchText:"searchText__style___1Bzu7",inputEnter:"inputEnter__style___gRfyS",inputEnterActive:"inputEnterActive__style___2qh_B",inputLeave:"inputLeave__style___1vOwT",inputLeaveActive:"inputLeaveActive__style___2Uky4",clearSearch:"clearSearch__style___3XXid",SearchWin:"SearchWin__style___3aVyO",showheight:"showheight__style___BobHa",searchContent:"searchContent__style___3c15z",searchWindom:"searchWindom__style___2m2NP",searchBtnAll:"searchBtnAll__style___z5IQa"};function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Search=(_temp=_class=function(e){function t(e){_classCallCheck(this,t);var a=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.search=function(){var e=a.state,t=e.isShow,r=e.text;e.isSearchWinShow;t&&r?a.props.onSearch(r):t?a.setState({isShow:!1}):a.setState({isShow:!0})},a.handleClickOutside=function(e){if(!a.state.inWrap){var t=a.state,r=t.isShow,n=t.isSearchWinShow;r&&a.setState({isShow:!1,text:""}),n&&a.setState({isSearchWinShow:!1})}a.setState({inWrap:!1})},a.stopPropagation=function(){a.setState({inWrap:!0})},a.onKeyDown=function(e){13===e.keyCode&&a.props.onEnter(e.target.value)},a.clearInput=function(){a.setState({text:"",isSearchWinShow:!1})},a.onChangeHandler=function(e){var t=e.target.value;""===t?a.setState({isSearchWinShow:!1}):(a.props.onChange(t),a.state.isSearchWinShow||a.setState({isSearchWinShow:!0})),a.setState({text:t})},a.onMoreBtnClick=function(){a.props.onMoreBtnClick(a.state.text)},a.state={text:"",isShow:!1,isSearchWinShow:!1,inWrap:!1},a}return _inherits(t,_react.Component),_createClass(t,[{key:"componentDidMount",value:function(){document.body.addEventListener("click",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.body.removeEventListener("click",this.handleClickOutside)}},{key:"render",value:function(){var i=this,e=this.state,t=e.isShow,r=e.text,n=e.isSearchWinShow,a=this.props,s=a.list,c=a.dispatch,o=a.trigger,l=void 0,_=void 0,u=s.filter(function(e){return e.content.length}).map(function(e,t){var r=e.typeName,n=e.content,a=e.type,s=e.renderUrl;return _react2.default.createElement("div",{className:_style.searchWindom,key:"type"+t},_react2.default.createElement("h3",null,r),_react2.default.createElement("ul",null,n.map(function(e,t){return _react2.default.createElement("li",{key:"item"+t},_react2.default.createElement(_searchItem2.default,_extends({dispatch:c,trigger:o,data:e,type:a,url:s,from:"quick"},i.props)))})))});return t&&(l=_react2.default.createElement("div",{className:_style.inputArea},_react2.default.createElement("input",{className:_style.searchText,type:"text",value:r,onChange:this.onChangeHandler,placeholder:"搜索人员信息、服务及其他内容",autoFocus:!0,onKeyDown:this.onKeyDown})),_=_react2.default.createElement("div",{className:_style.SearchWin+" "+(n?_style.showheight:"")},_react2.default.createElement("div",{className:""+_style.searchContent},u),s.length?_react2.default.createElement("div",{className:_style.searchBtnAll,onClick:this.onMoreBtnClick},"更多结果"):_react2.default.createElement("em",null,"没有搜索结果"))),_react2.default.createElement("div",{onClick:this.stopPropagation,className:_style.search+" "+(t?_style.searchExtend:"")},l,_,t&&r?_react2.default.createElement("div",{className:_style.clearSearch,onClick:this.clearInput},_react2.default.createElement(_icon2.default,{title:"清空",type:"error3"})):null,_react2.default.createElement("div",{className:_style.searchBtn,onClick:this.search},_react2.default.createElement(_icon2.default,{title:"搜索",type:"search"})))}}]),t}(),_class.propTypes={list:_propTypes2.default.arrayOf(_propTypes2.default.shape({type:_propTypes2.default.string,typeName:_propTypes2.default.string,renderUrl:_propTypes2.default.string,content:_propTypes2.default.arrayOf(_propTypes2.default.string)})).isRequired,onChange:_propTypes2.default.func.isRequired,onEnter:_propTypes2.default.func.isRequired,onSearch:_propTypes2.default.func.isRequired,dispatch:_propTypes2.default.func.isRequired,trigger:_propTypes2.default.func.isRequired,onMoreBtnClick:_propTypes2.default.func.isRequired},_class.defaultProps={list:[],onChange:function(){},onEnter:function(){},onSearch:function(){},dispatch:function(){},trigger:function(){},onMoreBtnClick:function(){}},_temp);exports.default=Search,exports.SearchItem=_searchItem2.default;