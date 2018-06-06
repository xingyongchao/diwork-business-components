import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Personal } from '../../src';

class Personals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        "company": "云工作台3.0测试环境你是啊大大的",
        "userAvator": "https://cdn.yonyoucloud.com/dev/yht/avatar/style/images/avatar/0c294160-fad0-412c-b6c5-47b4bd28dda2/original/15227338010504589817412179887525.png",
        "userEmail": "wangsh@yonyou.com",
        "userName": "王石",
        "userMobile": "15810266391",
        "userId": "0c294160-fad0-412c-b6c5-47b4bd28dda2",
        "userCode": "yy_6323278514397119500VYfYyY",
        "roleIds": null,
        "roles": null,
        "orgId": null,
        "orgName": null,
        "orgCode": null,
        "logo": null,
        "redPacketsNum": 0,
        "gloriesNum": 0,
        "allowTenants": [
          {
            "tenantId": "b7uozdk2",
            "tenantName": "34534",
            "logo": null,
            "admin": true,
            "team": 0,
            "type": 0,
            "certificated": false,
            "status": 1,
            "enterPrise": true
          }
        ],
        "currentTeamConfig": {
          "tenantId": "gtzceot7",
          "tenantName": "云工作台3.0测试环境你是啊大大的",
          "logo": null,
          "linkman": "18101319676",
          "tenantAddress": "北京|北京|海淀区|永腾南路用友产业园",
          "tenantEmail": "zhengxc@yonyou.com",
          "tenantIndustry": "计算机硬件及网络设备",
          "tenantTel": "18101319676",
          "invitePermission": "0",
          "joinPermission": "0",
          "allowExit": "1",
          "tenantSize": "A",
          "terminal": "web"
        },
        "admin": true
      },
      routers: {
        openEntersetting: '/entersetting/home',
        openTeamconfig: '/teamconfig',
        openAccount: '/account',
        openManage: '/manage',
        openUserinfo: '/userinfo',
        openInvitation: '/invitation',
        openDynamic: '/dynamic',
      },
      hrefs: [
        {
          href: `https://ticket.yonyoucloud.com/ticket/menu/router/myticket/KJ`,
          name: '下载客户端',
        },
        {
          href: 'https://ticket.yonyoucloud.com/ticket/menu/router/myticket/KJ',
          name: '问题与反馈',
        },
        {
          href: `https://ticket.yonyoucloud.com/ticket/menu/router/myticket/KJ`,
          name: '用友云官网',
        },
      ],
      language: {
        show: true,
        defaultValue: 'zh',
        onChangeLanguage: (value) => {console.log(value)},
        languageList: [
          {
            value: 'zh',
            context: '简体中文'
          },
          {
            value: 'en',
            context: 'English'
          },
          {
            value: 'eh',
            context: '繁体中文'
          },
        ]
      },
      animatedType: "Right",
    };
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  getCompanyType = () => {

  }

  closeRequestDisplay = () => {

  }

  openExitModal = () => {

  }

  dispatch = (action) => {
    const { routers } = this.state;
    if (routers[action]) {
      this.openNewRouter(routers[action]);
    }
  }

  openNewRouter = (path) => {
    console.log(path)
  }

  logout = () => {

  }

  render() {
    const { hrefs, TeamData, userInfo, language, animatedType } = this.state;
    const titleType = '企业';
    const requestDisplay = false;
    const exitModal = false;
    return (
      <div className="wrap1">
        <Personal
          userInfo={userInfo}
          requestDisplay={requestDisplay}
          exitModal={exitModal}
          closeRequestDisplay={this.closeRequestDisplay}
          openExitModal={this.openExitModal}
          dispatch={this.dispatch}
          titleType={titleType}
          hrefs={hrefs}
          logout={this.logout}
          language={language}
        />
      </div>
    );
  }
}
export default Personals;

