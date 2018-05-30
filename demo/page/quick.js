import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { QuickApplication, } from '../../src';

class Quick extends Component{

  constructor(props) {
    super(props);
    this.state = {
      serviceList:[
            {
                "ts": 1513666096000,
                "tenantId": "gtzceot7",
                "applicationId": "11112222",
                "applicationName": "通讯录你好",
                "applicationCode": "11112222",
                "applicationIcon": "https://cdn.yonyoucloud.com/pro/workbench/e930.svg",
                "webStatus": false,
                "clientStatus": false,
                "phoneStatus": false,
                "simpleStatus": false,
                "enable": true,
                "shortCut": false,
                "applicaitonType": 0,
                "orders": 0,
                "hasWidget": false,
                "service": [],
                "selected": false,
                "primaryKey": "11112222"
            },
            {
                "ts": 1513666099000,
                "tenantId": "gtzceot7",
                "applicationId": "11114444",
                "applicationName": "日程",
                "applicationCode": "11114444",
                "applicationIcon": "https://cdn.yonyoucloud.com/pro/workbench/e90d.svg",
                "webStatus": false,
                "clientStatus": false,
                "phoneStatus": false,
                "simpleStatus": false,
                "enable": true,
                "shortCut": false,
                "applicaitonType": 0,
                "orders": 0,
                "hasWidget": false,
                "service": [],
                "selected": false,
                "primaryKey": "11114444"
            },
            {
                "tenantId": "gtzceot7",
                "applicationId": "201",
                "applicationName": "话题",
                "applicationCode": "201",
                "applicationIcon": "https://cdn.yonyoucloud.com/pro/workbench/default.svg",
                "webStatus": false,
                "clientStatus": false,
                "phoneStatus": false,
                "simpleStatus": false,
                "enable": true,
                "shortCut": false,
                "applicaitonType": 0,
                "orders": 0,
                "hasWidget": false,
                "service": [],
                "selected": false,
                "primaryKey": "201"
            },
            {
                "tenantId": "gtzceot7",
                "applicationId": "202",
                "applicationName": "投票",
                "applicationCode": "202",
                "applicationIcon": "https://cdn.yonyoucloud.com/pro/workbench/default.svg",
                "webStatus": false,
                "clientStatus": false,
                "phoneStatus": false,
                "simpleStatus": false,
                "enable": true,
                "shortCut": false,
                "applicaitonType": 0,
                "orders": 0,
                "hasWidget": false,
                "service": [],
                "selected": false,
                "primaryKey": "202"
            },
            {
                "tenantId": "gtzceot7",
                "applicationId": "203",
                "applicationName": "日志",
                "applicationCode": "203",
                "applicationIcon": "https://cdn.yonyoucloud.com/pro/workbench/default.svg",
                "webStatus": false,
                "clientStatus": false,
                "phoneStatus": false,
                "simpleStatus": false,
                "enable": true,
                "shortCut": false,
                "applicaitonType": 0,
                "orders": 0,
                "hasWidget": false,
                "service": [],
                "selected": false,
                "primaryKey": "203"
            },
            {
                "tenantId": "gtzceot7",
                "applicationId": "206",
                "applicationName": "微邮",
                "applicationCode": "206",
                "applicationIcon": "https://cdn.yonyoucloud.com/pro/workbench/default.svg",
                "webStatus": false,
                "clientStatus": false,
                "phoneStatus": false,
                "simpleStatus": false,
                "enable": true,
                "shortCut": false,
                "applicaitonType": 0,
                "orders": 0,
                "hasWidget": false,
                "service": [],
                "selected": false,
                "primaryKey": "206"
            },
            {
                "tenantId": "gtzceot7",
                "applicationId": "207",
                "applicationName": "公告",
                "applicationCode": "207",
                "applicationIcon": "https://cdn.yonyoucloud.com/pro/workbench/default.svg",
                "webStatus": false,
                "clientStatus": false,
                "phoneStatus": false,
                "simpleStatus": false,
                "enable": true,
                "shortCut": false,
                "applicaitonType": 0,
                "orders": 0,
                "hasWidget": false,
                "service": [],
                "selected": false,
                "primaryKey": "207"
            },
            {
                "tenantId": "gtzceot7",
                "applicationId": "208",
                "applicationName": "文库",
                "applicationCode": "208",
                "applicationIcon": "https://cdn.yonyoucloud.com/pro/workbench/default.svg",
                "webStatus": false,
                "clientStatus": false,
                "phoneStatus": false,
                "simpleStatus": false,
                "enable": true,
                "shortCut": false,
                "applicaitonType": 0,
                "orders": 0,
                "hasWidget": false,
                "service": [],
                "selected": false,
                "primaryKey": "208"
            },
            {
                "tenantId": "gtzceot7",
                "applicationId": "209",
                "applicationName": "会议",
                "applicationCode": "209",
                "applicationIcon": "https://cdn.yonyoucloud.com/pro/workbench/default.svg",
                "webStatus": false,
                "clientStatus": false,
                "phoneStatus": false,
                "simpleStatus": false,
                "enable": true,
                "shortCut": false,
                "applicaitonType": 0,
                "orders": 0,
                "hasWidget": false,
                "service": [],
                "selected": false,
                "primaryKey": "209"
            },
            {
                "tenantId": "gtzceot7",
                "applicationId": "210",
                "applicationName": "快审",
                "applicationCode": "210",
                "applicationIcon": "https://cdn.yonyoucloud.com/pro/workbench/default.svg",
                "webStatus": false,
                "clientStatus": false,
                "phoneStatus": false,
                "simpleStatus": false,
                "enable": true,
                "shortCut": false,
                "applicaitonType": 0,
                "orders": 0,
                "hasWidget": false,
                "service": [],
                "selected": false,
                "primaryKey": "210"
            },
            {
                "ts": 1513666150000,
                "tenantId": "gtzceot7",
                "applicationId": "app_1",
                "applicationName": "系统管理",
                "applicationCode": "app_1",
                "applicationIcon": "https://cdn.yonyoucloud.com/pro/workbench/e97d.svg",
                "applicationDesc": "系统的管理端入口",
                "webStatus": false,
                "clientStatus": false,
                "phoneStatus": false,
                "simpleStatus": false,
                "enable": true,
                "shortCut": false,
                "applicaitonType": 0,
                "orders": 0,
                "hasWidget": false,
                "service": [],
                "selected": false,
                "primaryKey": "app_1"
            },
            {
                "ts": 1513666147000,
                "tenantId": "gtzceot7",
                "applicationId": "app_2",
                "applicationName": "权限管理",
                "applicationCode": "app_2",
                "applicationIcon": "https://cdn.yonyoucloud.com/pro/workbench/e98f.svg",
                "webStatus": false,
                "clientStatus": false,
                "phoneStatus": false,
                "simpleStatus": false,
                "enable": true,
                "shortCut": false,
                "applicaitonType": 0,
                "orders": 0,
                "hasWidget": false,
                "service": [],
                "selected": false,
                "primaryKey": "app_2"
            }
        ]
    };
  }

  openAllFn = () => {
    console.log("openALL")
  }

  openServiceFn = () => {
    console.log("openService")
  }

  render() {
    const { serviceList } = this.state;
    return (
      <div>
        <QuickApplication 
          serviceList={serviceList} 
          openAllFn={this.openAllFn} 
          openServiceFn={this.openServiceFn} 
        />
      </div>
    )
  }
}

export default Quick;
