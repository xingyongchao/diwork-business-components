import React, { Component } from 'react';
// import { dispatch, trigger } from '../public/componentTools';
import { Search } from '../../src';
window.searchTool = {
	dispatch: function (action, params) {
		switch (action) {
			case 'openService':
				console.log(`open ${params.serviceCode}`)
				if (params.type === 2) {
					console.log('also pen app')
				}
				break;
			case 'openDialog':
				console.log('open dialog')
				console.log(params)
				break;
			default:
				break;
		}
	},
	trigger: function (action, type, params) {
		switch (action) {
			case 'IM':
				console.log(`open ${params.yht_id}`)
				if (params.type === 2) {
					console.log('also pen app')
				}
				break;
			default:
				break;
		}
	},
};

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchSuggestList: [

      ],
      loading: {
        color: "blue"
      }
    };
  }

  goSearchPage = (text) => {
    console.log(text);
  }

  getSearchList = (keyworks) => {
    this.setState({
      SearchSuggestList: [
        {
          "type": "service",
          "typeName": "应用/服务",
          "renderUrl": "https://cdn.yonyoucloud.com/diwork/widget/74c230eb-531d-4530-8430-728bbf64bae2.js",
          "content": [
            "{\"relationUsers\":[],\"serviceIcon\":\"\",\"simpleApplicationStatus\":false,\"everyone\":false,\"level\":0,\"serviceCode\":\"6e882ed2-f06e-408b-9c5d-89371242c61f\",\"clientStatus\":false,\"hasWidget\":false,\"capable\":false,\"serviceName\":\"高铁web\",\"relationServices\":[],\"url\":\"http://www.baidu.com\",\"teamMenbersUnuse\":false,\"createTime\":1516153183000,\"crossTenant\":false,\"enable\":true,\"tenantId\":\"gtzceot7\",\"phoneStatus\":false,\"applicationId\":\"ff266884-beeb-48d0-8643-696bf1c4df55\",\"serviceId\":\"e85dfde7-7f0f-4805-be2b-e9f56d3ccfd0\",\"webStatus\":true,\"selected\":false,\"primaryKey\":\"e85dfde7-7f0f-4805-be2b-e9f56d3ccfd0\",\"ts\":1516153183000}",
            "{\"relationUsers\":[],\"serviceIcon\":\"https://cdn.yonyoucloud.com/pro/workbench/e996.svg\",\"simpleApplicationStatus\":false,\"everyone\":false,\"level\":0,\"serviceCode\":\"serve_43\",\"clientStatus\":true,\"hasWidget\":false,\"capable\":false,\"serviceName\":\"维护自定义档案\",\"relationServices\":[],\"url\":\"http://workbenchdev.yyuap.com/defdoc/pages/docInfo/index.html\",\"teamMenbersUnuse\":false,\"crossTenant\":false,\"enable\":true,\"tenantId\":\"gtzceot7\",\"phoneStatus\":true,\"applicationId\":\"app_4\",\"serviceId\":\"serve_43\",\"webStatus\":true,\"selected\":false,\"primaryKey\":\"serve_43\"}",
            "{\"orgNames\":[],\"modifiedTime\":1520995646000,\"applicationType\":0,\"everyone\":false,\"clientStatus\":true,\"hasWidget\":false,\"applicationIcon\":\"https://cdn.yonyoucloud.com/pro/workbench/default.svg\",\"eternal\":false,\"shortCut\":true,\"simpleStatus\":true,\"orgIds\":[],\"enable\":true,\"service\":[],\"userIds\":[],\"tenantId\":\"gtzceot7\",\"phoneStatus\":true,\"userNames\":[],\"orders\":10,\"applicationId\":\"206\",\"applicationCode\":\"206\",\"webStatus\":true,\"applicationName\":\"微邮\",\"selected\":false,\"primaryKey\":\"206\"}"
          ]
        },
        {
          "type": "addressbook",
          "typeName": "通讯录",
          "renderUrl": "https://cdn.yonyoucloud.com/diwork/widget/aaf2dd5a-3c38-4505-bb47-4038b77fb283.js",
          "content": [
            "{\"createTime\":1521699960800,\"creator\":\"\",\"emno\":\"\",\"id\":\"gtzceot7_1fa9092c-105a-4028-8402-206d735e78f3\",\"modifiedTime\":1521699960800,\"modifier\":\"\",\"orgName\":\"啊按照默认部门\",\"phone\":\"\",\"primaryKey\":\"gtzceot7_1fa9092c-105a-4028-8402-206d735e78f3\",\"shortName\":\"\",\"tenantId\":\"gtzceot7\",\"ts\":1521699960800,\"type\":\"\",\"typeName\":\"\",\"photo\":\"\",\"userCode\":\"yy_6305883904586810369JFLkz6\",\"userEmail\":\"wuqiongf@yonyou.com\",\"userId\":\"1fa9092c-105a-4028-8402-206d735e78f3\",\"userInfo\":\"{\\\"gloriesNum\\\":0,\\\"userAvatorNew\\\":\\\"\\\",\\\"userAvator\\\":\\\"\\\",\\\"mobile\\\":\\\"13693373753\\\",\\\"admin\\\":false,\\\"userEmail\\\":\\\"wuqiongf@yonyou.com\\\",\\\"redPacketsNum\\\":0,\\\"name\\\":\\\"吴琼\\\",\\\"userId\\\":\\\"1fa9092c-105a-4028-8402-206d735e78f3\\\",\\\"userCode\\\":\\\"yy_6305883904586810369JFLkz6\\\"}\",\"mobile\":\"13693373753\",\"name\":\"吴琼\",\"userNamePinyin\":\"wuqiong\"}",
            "{\"createTime\":1521699960782,\"creator\":\"\",\"emno\":\"\",\"id\":\"gtzceot7_055b18e9-d732-4e8e-9caa-16d1e9a1637e\",\"modifiedTime\":1521699960782,\"modifier\":\"\",\"orgName\":\"啊按照默认部门\",\"phone\":\"\",\"primaryKey\":\"gtzceot7_055b18e9-d732-4e8e-9caa-16d1e9a1637e\",\"shortName\":\"\",\"tenantId\":\"gtzceot7\",\"ts\":1521699960782,\"type\":\"\",\"typeName\":\"\",\"photo\":\"\",\"userCode\":\"wujdk7ft5fu7\",\"userEmail\":\"wujd@yonyou.com\",\"userId\":\"055b18e9-d732-4e8e-9caa-16d1e9a1637e\",\"userInfo\":\"{\\\"gloriesNum\\\":0,\\\"userAvatorNew\\\":\\\"\\\",\\\"userAvator\\\":\\\"\\\",\\\"mobile\\\":\\\"18515109689\\\",\\\"admin\\\":false,\\\"userEmail\\\":\\\"wujd@yonyou.com\\\",\\\"redPacketsNum\\\":0,\\\"name\\\":\\\"吴惊道\\\",\\\"userId\\\":\\\"055b18e9-d732-4e8e-9caa-16d1e9a1637e\\\",\\\"userCode\\\":\\\"wujdk7ft5fu7\\\"}\",\"mobile\":\"18515109689\",\"name\":\"吴惊道\",\"userNamePinyin\":\"wujingdao\"}",
            "{\"createTime\":1521699960785,\"creator\":\"\",\"emno\":\"\",\"id\":\"gtzceot7_0c294160-fad0-412c-b6c5-47b4bd28dda2\",\"modifiedTime\":1521699960785,\"modifier\":\"\",\"orgName\":\"啊按照默认部门\",\"phone\":\"\",\"primaryKey\":\"gtzceot7_0c294160-fad0-412c-b6c5-47b4bd28dda2\",\"shortName\":\"\",\"tenantId\":\"gtzceot7\",\"ts\":1521699960785,\"type\":\"\",\"typeName\":\"\",\"photo\":\"https://cdn.yonyoucloud.com/dev/yht/avatar/style/images/avatar/0c294160-fad0-412c-b6c5-47b4bd28dda2/1513684377716.png\",\"userCode\":\"yy_6323278514397119500VYfYyY\",\"userEmail\":\"wangshih@yonyou.com\",\"userId\":\"0c294160-fad0-412c-b6c5-47b4bd28dda2\",\"userInfo\":\"{\\\"gloriesNum\\\":0,\\\"userAvatorNew\\\":\\\"https://cdn.yonyoucloud.com/dev/yht/avatar/style/images/avatar/0c294160-fad0-412c-b6c5-47b4bd28dda2/1513684377716.png\\\",\\\"userAvator\\\":\\\"https://cdn.yonyoucloud.com/dev/yht/avatar/style/images/avatar/0c294160-fad0-412c-b6c5-47b4bd28dda2/1513684377716.png\\\",\\\"mobile\\\":\\\"15810266391\\\",\\\"admin\\\":false,\\\"userEmail\\\":\\\"wangshih@yonyou.com\\\",\\\"redPacketsNum\\\":0,\\\"name\\\":\\\"王石\\\",\\\"userId\\\":\\\"0c294160-fad0-412c-b6c5-47b4bd28dda2\\\",\\\"userCode\\\":\\\"yy_6323278514397119500VYfYyY\\\"}\",\"mobile\":\"15810266391\",\"name\":\"王石\",\"userNamePinyin\":\"wangshi\"}"
          ]
        }
      ]
    });
  }

  render() {
    const { SearchSuggestList, loading } = this.state;
    return (
      <Search
        list={SearchSuggestList}
        onChange={this.getSearchList}
        onEnter={this.goSearchPage}
        onSearch={this.goSearchPage}
        onMoreBtnClick={this.goSearchPage}
        dispatch={searchTool.dispatch}
        trigger={searchTool.trigger} 
      />
    );
  }
}

export default SearchContainer;
