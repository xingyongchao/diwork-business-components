# 参照组件

## 参照使用（参照test文件）
组件主要提供三个UI组件， 包含Search、Personal、QuickApplication 

## 安装
npm install --save diwork-business-components

## 引用方式
import { Search, Personal, QuickApplicatoin } from 'diwork-business-components';

### 参数配置

#### QuickApplicatoin 组件
	<QuickApplication 
		serviceList={serviceList} 
		openAllFn={this.openAllFn} 
		openServiceFn={this.openServiceFn} 
	/>,

	serviceList  快捷应用数据源
	{
    "status": 1,
    "data": [
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
    ]
	}

	openAllFn   打开全部应用的方法调用 
	openAllFn = () => {}

	openServiceFn  打开单独应用的调用方法  默认接收参数 应用code
	openServiceFn = (applicationCode) => {}


### Search 组件
	<Search
		list={SearchSuggestList}
		onChange={this.getSearchList}
		onEnter={this.goSearchPage}
		onSearch={this.goSearchPage}
		onMoreBtnClick={this.goSearchPage}
		dispatch={dispatch}
		trigger={trigger} 
	/> 

	list  搜索返回的数据源  
	{
		"status": 1,
		"data": [
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
	}

	onChange  :   获取数据的调用方法
	onChange = (keyworks) => {
    const {
      getSearchSuggest,
    } = this.props;
    getSearchSuggest(keyworks).then(({ error, payload }) => {});
  }

	onEnter: 回车键触发到的方法
	onSearch: 点击搜索按钮触发的方法
	onMoreBtnClick: 点击更多搜索结果触发的方法
	dispatch:	必传方法  需要从tools 获取
	trigger: 	必传方法  需要从tools 获取

###  Personal 组件
		<Personal 
      userInfo = {userInfo}
      requestDisplay = {requestDisplay}
      exitModal = {exitModal}
      closeRequestDisplay = {() => { this.closeRequestDisplay(); }}
      openExitModal = {this.openExitModal}
      dispatch = { this.dispatch }
      titleType = {titleType}
      hrefs = {hrefs}
      logout = {logout}
    />;

####  userinfo 
{
    "status": 1,
    "data": {
        "company": "云工作台3.0测试环境你是啊大大的",
        "userAvator":"https://cdn.yonyoucloud.com/dev/yht/avatar/style/images/avatar/0c294160-fad0-412c-b6c5-47b4bd28dda2/original/15227338010504589817412179887525.png",
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
        "allowTenants": [],
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
    }
}

#### requestDisplay   类型 bool  是否显示创建成功后的弹出层

#### exitModal  类型 bool   是否显示退出团队或者企业的弹层

#### closeRequestDisplay  func  关闭 创建成功后弹出层的方法

#### openExitModal    func  打开退出团队企业的弹层

#### dispatch  路由或者链接跳转统一调用的方法 
	工作台调用
	openNewRouter = (path) => {
    const { history } = this.props;
    history.push(path);
  }

  dispatch = (action) => {
    const { routers } = this.state;
    if(routers[action]){
      this.openNewRouter(routers[action]);
    }
  }

	this.state.routers:{
		openEntersetting: '/entersetting/home',
		openTeamconfig: '/teamconfig',
		openAccount: '/account',
		openManage: '/manage',
		openUserinfo: '/userinfo',
		openInvitation: '/invitation',
	},

####titleType string  企业或者团队

#### hrefs   左下角 hrefs 
	this.state.hrefs: [
		{
			href:`${getHost('org')}/download/download.html`,
			name:"下载客户端"
		},
		{
			href:`https://ticket.yonyoucloud.com/ticket/menu/router/myticket/KJ`,
			name:"问题与反馈"
		},
		{
			href:`${getHost('cloundyy')}`,
			name:"用友云官网"
		},
	]

#### logout  func  注销 

####  editType  bool  非必传  默认 true  是否显示首页编辑按钮  