"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),_react=require("react"),_react2=_interopRequireDefault(_react);require("./index.css");var _index={wrap:"wrap__index___cgyO3"};function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Normal=function(e){function i(){var e,t,r;_classCallCheck(this,i);for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return(t=r=_possibleConstructorReturn(this,(e=i.__proto__||Object.getPrototypeOf(i)).call.apply(e,[this].concat(o)))).goDetail=function(e){e.stopPropagation()},_possibleConstructorReturn(r,t)}return _inherits(i,_react.Component),_createClass(i,[{key:"render",value:function(){return _react2.default.createElement("div",{className:_index.wrap,onClick:this.goDetail,onKeyDown:this.goDetail,role:"presentation"},_react2.default.createElement("h3",null,"未知搜索结果"))}}]),i}();exports.default=Normal,module.exports=exports.default;