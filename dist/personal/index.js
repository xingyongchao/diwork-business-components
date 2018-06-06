"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_temp,_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var _=arguments[t];for(var n in _)Object.prototype.hasOwnProperty.call(_,n)&&(e[n]=_[n])}return e},_createClass=function(){function n(e,t){for(var _=0;_<t.length;_++){var n=t[_];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,_){return t&&n(e.prototype,t),_&&n(e,_),e}}(),_react=require("react"),_react2=_interopRequireDefault(_react),_propTypes=require("prop-types"),_propTypes2=_interopRequireDefault(_propTypes),_reactTransitionGroup=require("react-transition-group"),_icon=require("../icon"),_icon2=_interopRequireDefault(_icon),_userinfo=require("./userinfo"),_userinfo2=_interopRequireDefault(_userinfo),_public=require("./public");require("./style.css");var _style={personalImg:"personalImg__style___nw801",wrap:"wrap__style___hJ5Wk",userInfoPane:"userInfoPane__style___3ifRX",imgUser:"imgUser__style___1EZVj",editPortrait:"editPortrait__style___11EwE",imgOuter:"imgOuter__style___dsq39",new_name:"new_name__style___2VmVR",imgInner:"imgInner__style___1yiuS",userInfo:"userInfo__style___3xoCz",gloryValue:"gloryValue__style___2i7ON",packetsValue:"packetsValue__style___1Z_nE",gloryKey:"gloryKey__style___2NA0m",packetsKey:"packetsKey__style___2jk0n",loginOut:"loginOut__style___hqMXn",tabContent:"tabContent__style___2izPs",tabPane1:"tabPane1__style___2kaBl",tabPane2:"tabPane2__style___mPJnm",userName:"userName__style___3nw_w",gloryIcon:"gloryIcon__style___VJT1I",iconContainer:"iconContainer__style___1Y8lH",icon2:"icon2__style___2xR5X",icon3:"icon3__style___3KJAk",active:"active__style___1BRyT",wrapBtn:"wrapBtn__style___9mH4A",clearfix:"clearfix__style___1EGi_",userBtnList:"userBtnList__style___mnG2t",createBtnList:"createBtnList__style___2K2dm",serviceImg:"serviceImg__style___3VkS7",serviceName:"serviceName__style___1YkJZ",promotion:"promotion__style___2yJnY",used:"used__style___3I-S3",line_end:"line_end__style___3OVDf",recently:"recently__style___1dE9e",usedTit:"usedTit__style___1AuZE",lastTime:"lastTime__style___2-vbZ",usedService:"usedService__style___2b1kY",usedModule:"usedModule__style___3nequ",module:"module__style___2iJAq",usedIcon:"usedIcon__style___1seEC",defaultPic:"defaultPic__style___yRcwn",logOut:"logOut__style___IpWtJ",userSetting:"userSetting__style___3BhrU",tenantArea:"tenantArea__style___9e-08",tenantName:"tenantName__style___3Cy0z",tenantDescribe:"tenantDescribe__style___PRf-0",companyType:"companyType__style___WEy39",teamBtnList:"teamBtnList__style___2ZSgU",tenantPortrait:"tenantPortrait__style___3aCpi",popconfirm:"popconfirm__style___2eNyA",popconfirm_content:"popconfirm_content__style___itLmD",createBtn:"createBtn__style___2Xm1j",hiden:"hiden__style___2BOD_",show:"show__style___1HSxw",enter_setting:"enter_setting__style___1xgZc",linkSetting:"linkSetting__style___2atqj",language:"language__style___3XLNM"};function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Personal=(_temp=_class=function(e){function _(e){_classCallCheck(this,_);var t=_possibleConstructorReturn(this,(_.__proto__||Object.getPrototypeOf(_)).call(this,e));return t.handerClick=function(){t.state.userInfoDisplay?t.closePersonalModal():t.openPersonalModal()},t.openPersonalModal=function(){t.setState({userInfoDisplay:!0})},t.closePersonalModal=function(){t.setState({userInfoDisplay:!1})},t.bgColor=(0,_public.gitBackgroundIcon)(),t.state={userInfoDisplay:!1},t}return _inherits(_,_react.Component),_createClass(_,[{key:"render",value:function(){var e=this.state.userInfoDisplay,t=this.props,_=t.userInfo.userAvator,n=t.requestDisplay,r=t.animatedType;return _react2.default.createElement("div",{style:{width:"100%",height:"100%"}},_?_react2.default.createElement("img",{alt:_,src:_,className:_style.personalImg+" gnoreclass",onClick:this.handerClick,onKeyDown:this.handerClick,role:"presentation"}):_react2.default.createElement(_icon2.default,{type:"staff",className:_style.personalImg+" gnoreclass",onClick:this.handerClick}),_react2.default.createElement(_reactTransitionGroup.TransitionGroup,null,_react2.default.createElement(_reactTransitionGroup.CSSTransitionGroup,{transitionName:{enter:"animated",enterActive:"fadeIn"+r,leave:"animated",leaveActive:"fadeOut"+r},transitionEnterTimeout:300,transitionLeaveTimeout:300},e||n?_react2.default.createElement(_userinfo2.default,_extends({bgColor:this.bgColor,userInfoDisplay:e,closePersonalModal:this.closePersonalModal,outsideClickIgnoreClass:"gnoreclass",animatedType:this.props.animatedType},this.props)):null)))}}]),_}(),_class.propTypes={userInfo:_propTypes2.default.shape({userAvator:_propTypes2.default.string}),animatedType:_propTypes2.default.string},_class.defaultProps={userInfo:{},animatedType:"Left"},_temp);exports.default=Personal,module.exports=exports.default;