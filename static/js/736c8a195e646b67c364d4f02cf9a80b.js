(function(global){
    if(global.__WPAV2){
        return;
    }

   
    var flag1 = 21848,
        flag2 = 1,
        flag3 = 1,
        flag_loaded = 28,
        reportCgi = 'http://report.huatuo.qq.com/report.cgi';

    if (location.protocol.indexOf('https') !== -1) {
        reportCgi = 'https://report.huatuo.qq.com/report.cgi';
    }

    var platform = 'pc',
        ua = navigator.userAgent;

    if (/(?:iphone|ipad|ipod)/i.test(ua)) {
        platform = 'ios';
    } else if(/android/i.test(ua)) {
        platform = 'android';
    }

    var 
        env = global.__WPAENV || 'production', 
        version = '4.1.0',  
  
        protocol = 'https:',
        hostMap = {
            development: 'dev',
            test: 'oa'
        },

      

        staticBase = global.__WPASTATICBASE,

        host = protocol + '//' + (hostMap[env] || '') + 'wp.qiye.qq.com',
        base = global.__WPABASE || host,

        apiBase = global.__WPABAPIASE || host + '/api',
        stack = [],
        apiStack = [],
        tmpEventBucket = {},
        charset = 'utf-8'; 

    if (!staticBase) {
        if (env === 'development') {
            staticBase = 'https://dev.gtimg.com';
            staticBase += '/qidian/src/wpav2/dist/' + version;
        } else if (env === 'test') {
            staticBase = 'https://oa.gtimg.com';
            staticBase += '/qidian/src/wpav2/dist/' + version;
        } else {
            staticBase = 'https://bqq.gtimg.com';
            staticBase += '/qidian/src/wpav2/dist/' + version;
        }

    }
    

    var doc = document,
        head = doc.head || doc.getElementsByTagName("head")[0] || doc.documentElement,
        baseElement = head.getElementsByTagName("base")[0],
        currentlyAddingScript;

    function fetch(uri) {
        var node = doc.createElement("script"),
            sTime;

        node.charset = charset;
        node.async = true;
        node.src = uri;
        node.id = 'LBFnode';

        currentlyAddingScript = node;

        node.onload = node.onreadystatechange = function() {
            if(!this.readyState || this.readyState=='loaded' || this.readyState=='complete') {
                var eTime = +new Date(),
                    timeCost = eTime - sTime;
            }
        };

        sTime = +new Date();
        baseElement ?
            head.insertBefore(node, baseElement) :
            head.appendChild(node);

        currentlyAddingScript = null;
    }

    function getScriptPosition() {
        var scripts = document.getElementsByTagName('script');
        return scripts.length > 0 ? scripts[scripts.length - 1] : null;
    }


    var exports = global.__WPAV2 = {
        version: version,

        base: base,

        staticBase: staticBase,

        apiBase: apiBase,

        env: env,

        protocol: protocol,

        create: function(data){
            data.scriptPosition = getScriptPosition();
            stack.push(data);
        },

        on: function(type, cb){
            tmpEventBucket[type] ?
                tmpEventBucket[type].push(cb) :
                tmpEventBucket[type] = [cb];
        },

        api: function(){
            apiStack.push(arguments);
        },

        ready: function(onReady){
            exports.on('load', onReady);
        },

        getScriptPosition: getScriptPosition,

        _stack: stack,

        _apiStack: apiStack,

        _evtBkt: tmpEventBucket
    };

    fetch(staticBase + '/pk1.js');
})(this);
// 2025-04-05 13:57:36
__WPAV2.create({"id":1208,"url":"https://wpa1.qq.com/tvtGiQG2?_type=wpa\u0026qidian=true","roleIM":{"navRouter":null,"uin":"2881147149","robotNav":null,"type":7,"name":"下载站在线客服(003)","data":"2881147149","isOpenCompanyWords":null,"subNav":null,"msgDisplayed":"0","isDisabled":"0","forid":null,"value":"0","isKfuin":null,"isPub":null},"fkfextname":"003","imUrl":"https://wpa1.qq.com/uT7NU3jD?_type=wpa\u0026qidian=true","name":"小熊下载软件投诉","qrCodeImg":"//p.qpic.cn/qidian_pic/0/20220421609779b5070079e7f49df65a985017fe/0","FCustom":{"isSsc":0,"msgDisplayed":{"categoryId":"297562090103701504","isDisplayed":0},"customType":"1","open":"1","customImg":{"height":"0","zoom":"0","url":"","h":{"type":"3","px":"0"},"v":{"type":"3","px":"0"},"width":"0"},"domId":"software_complaint","source":0,"isCustomEntry":0,"isLBS":0},"fkfuin":3009069248,"cate":"7","theme":1,"type":"15","isWpaMangoWssOpt":true,"key":"736c8a195e646b67c364d4f02cf9a80b","deployList":[{"deployRemarks":"","deployWebsite":"","deployTypeId":"1"}],"custom":{"domId":"software_complaint","open":"1","customImg":{"url":"","h":{"px":"0","type":"3"},"v":{"type":"3","px":"0"},"width":"0","height":"0","zoom":"0"},"customType":"1"},"fkfext":"2881147149","qrcode":"//p.qpic.cn/qidian_pic/0/20220421609779b5070079e7f49df65a985017fe/0"})