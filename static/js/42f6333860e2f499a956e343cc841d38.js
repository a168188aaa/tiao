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
// 2025-04-05 13:56:52
__WPAV2.create({"createTime":"1650354514","custom":{"domId":"download_feedback","msgDisplayed":{"isDisplayed":"0","categoryId":"297562090103701504"},"source":"0","isCustomEntry":"0","isAppUin":"0","isLBS":"0","isSsc":"0","customImg":{"height":"0","zoom":"0","url":"","h":{"type":"3","px":"0"},"v":{"type":"3","px":"0"},"width":"0"},"open":"1","customType":"1"},"name":"小熊下载站客服","setIp":"9.139.187.63","fkfuin":3009069248,"key":"42f6333860e2f499a956e343cc841d38","updateTime":"1650354514","id":"1196","type":"15","url":"https://wpa1.qq.com/SkURVWx6?_type=wpa\u0026qidian=true","roleIM":{"isPub":null,"uin":null,"type":7,"value":"5","forid":null,"subNav":{"receptionSwitch":"1","uin":"2881147149","id":"2881147149","isDisabled":"0","name":"下载站在线客服(003)","data":"2881147149","value":"0"},"robotNav":null,"isDisabled":"0","isKfuin":null,"msgDisplayed":"0","name":null,"isOpenCompanyWords":null,"navRouter":{"defaultNav":"113"},"data":null},"cate":"7","fkfext":"2881147150","setCacheTime":1650356654,"FCustom":{"open":"1","isLBS":0,"isAppUin":0,"customImg":{"height":"0","zoom":"0","url":"","h":{"type":"3","px":"0"},"v":{"type":"3","px":"0"},"width":"0"},"isCustomEntry":0,"msgDisplayed":{"isDisplayed":0,"categoryId":"297562090103701504"},"customType":"1","domId":"download_feedback","source":0,"isSsc":0},"isWpaMangoWssOpt":true,"theme":1,"download":"https://admin.qidian.qq.com/mp/mediaPage/downloadQrcode3?url=http%3A%2F%2Fp.qpic.cn%2Fqidian_pic%2F0%2F20220419eac596437b0a05764db6ac233c02ad98%2F0","createrName":"002","qrCodeImg":"//p.qpic.cn/qidian_pic/0/20220419eac596437b0a05764db6ac233c02ad98/0","imUrl":"https://wpa1.qq.com/69EyGqoQ?_type=wpa\u0026qidian=true","fkfextname":"002","qrcode":"//p.qpic.cn/qidian_pic/0/20220419eac596437b0a05764db6ac233c02ad98/0","deployList":[{"id":"56","deployTypeId":"1","deployRemarks":"","deployWebsite":""}]})