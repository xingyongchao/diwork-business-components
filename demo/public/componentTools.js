const tools = {};
const openServiceData = {};
const openInterface = {
  openService: true,
};

const handlers = {
  openService({ serviceCode, data, type,tenantId }) {
    if (tenantId && serviceCode) {
      get('/service/getServiceByTenantIdAndServiceCode', {
        serviceCode,
        tenantId,
      }).then((app) => {
        const { crossTenant, serveName, url } = app;
        if (!crossTenant) {
          openGlobalDialog({
            type: "warning",
            className: enterOrTeam,
            title: '切换团队/企业',
            content: '需要切换到对应的团队/企业查看详情，是否切换?',
            btns: [
              {
                label: '切换',
                fun: () => {
                  const {
                    location: {
                      origin,
                      pathname,
                      hash,
                    },
                  } = window;
                  try {
                    window.localStorage.setItem('openServiceData', JSON.stringify(data));
                  } catch(e) {
                    console.log(e);
                  }
                  window.location.replace(
                    `${origin ? origin : ''}${pathname ? pathname : ''}?tenantId=${tenantId}&switch=true#/service/${serviceCode}`,
                  );
                },
              },
              {
                label: '不切换',
              },
            ],
          });
        } else {
          openGlobalDialog({
            title: serveName,
            className: crossTenantDialog,
            content: (<iframe className={iframeElm} src={url} />),
          });
        }
      }, (err) => {
        console.log(err);
      });
    } else if (serviceCode) {
      if (data && typeof data === 'object') {
        openServiceData[serviceCode] = data;
      }
      if(type === 2 ){
        this.props.history.push(`/app/${serviceCode}`);
      }else{
        this.props.history.push(`/service/${serviceCode}`);
      }
    }
  },
}

function dispatch(action, params) {
  if (openInterface[action]) {
    dispatchMessageTypeHandler({
      type: action,
      detail: params,
    });
  }
}

function dispatchMessageTypeHandler({ type, detail }) {
  if (type && handlers[type]) {
    return handlers[type](detail);
  } else {
    throw new Error('dispatchMessageTypeHandler need type');
  }
}

class Tool {
  constructor(namespace) {
    if (namespace) {
      this.callbackLists = {}
      this.namespace = namespace;
      tools[namespace] = this;
    } else {
      throw(new Error('need namespace'));
    }
  }
  dispatch = dispatch
  on(event, callback) {
    const { callbackLists } = this;
    const callbackList = callbackLists[event];
    if (callbackList) {
      callbackList.push(callback);
    } else {
      callbackLists[event] = [callback];
    }
    return () => {
      this.remove(event, callback);
    }
  }
  remove(event, callback) {
    const { callbackLists } = this;
    if (callback) {
      if (callbackLists[event]) {
        var index = callbackLists[event].indexOf(callback);
        if (index !== -1) {
          callbackLists[event].splic(index, 1);
        }
      }
    } else {
      callbackLists[event] = [];
    }
  }
  destroy() {
    tools[this.namespace] = null;
  }
};

const trigger = (namespace, event, data) => {
  if (namespace && event) {
    const tool = tools[namespace];
    if (tool) {
      const { callbackLists } = tool;
      const callbackList = callbackLists[event];
      if (callbackList) {
        callbackList.forEach((callback) => {
          callback(data);
        });
      }
    }
  }
};

export default Tool;
export {
  tools,
  trigger,
  dispatch,
};
