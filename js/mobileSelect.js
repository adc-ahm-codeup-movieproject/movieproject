

var mobileSelect1 = new MobileSelect({
    trigger: "#day",
    title: "单项选择",
    wheels: [
        { data: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"] },
    ],
    position: [2], //Initialize positioning
});
    var weekdayArr = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    var timeArr = [
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    ];
    var numArr = ["1", "2", "3", "4", "5"];

    var UplinkData = [
    { id: "1", value: "兰博基尼" },
    {
        id: "2",
        value: "劳斯莱斯",
        childs: [
    {
        id: "1",
        value: "曜影",
    },
    {
        id: "2",
        value: "幻影",
        childs: [
    {
        id: "1",
        value: "标准版",
    },
    {
        id: "2",
        value: "加长版",
    },
    {
        id: "3",
        value: "巅峰之旅",
    },
    {
        id: "4",
        value: "流光熠世",
    },
    {
        id: "5",
        value: "都会典藏版",
    },
        ],
    },
    {
        id: "3",
        value: "古思特",
        childs: [
    {
        id: "1",
        value: "加长版",
    },
    {
        id: "2",
        value: "永恒之爱",
    },
    {
        id: "3",
        value: "英骥",
    },
    {
        id: "4",
        value: "阿尔卑斯典藏版",
    },
        ],
    },
    {
        id: "4",
        value: "魅影",
        childs: [
    {
        id: "1",
        value: "标准版",
    },
    {
        id: "2",
        value: "Black Badge",
    },
        ],
    },
        ],
    },
    {
        id: "3",
        value: "宾利",
        childs: [
    {
        id: "1",
        value: "慕尚",
        childs: [
    {
        id: "1",
        value: "标准版",
    },
    {
        id: "2",
        value: "极致版",
    },
        ],
    },
    {
        id: "2",
        value: "欧陆",
        childs: [
    {
        id: "1",
        value: "尊贵版",
    },
    {
        id: "2",
        value: "敞篷标准版",
    },
    {
        id: "3",
        value: "敞篷尊贵版",
    },
        ],
    },
        ],
    },
    {
        id: "4",
        value: "法拉利",
        childs: [
    {
        id: "1",
        value: "LaFerrari",
    },
    {
        id: "2",
        value: "法拉利488",
    },
    {
        id: "3",
        value: "GTC4Lusso",
    },
        ],
    },
    {
        id: "5",
        value: "玛莎拉蒂",
        childs: [
    {
        id: "1",
        value: "总裁",
    },
    {
        id: "2",
        value: "玛莎拉蒂GT",
    },
    {
        id: "3",
        value: "Levante",
    },
        ],
    },
    ];

    //----------------------------------------------------------
    //更多参数详情可查看文档 https://github.com/onlyhom/mobileSelect.js

    /**
    * 参数说明
    * @param trigger(必填参数) 触发对象的id/class/tag
    * @param wheels(必填参数)  数据源,需要显示的数据
    * @param title 控件标题
    * @param position 初始化定位
    * @param callback 选择成功后触发的回调函数，返回indexArr(选中的选项索引)、data(选中的数据)
    * @param transitionEnd 每一次手势滑动结束后触发的回调函数,返回indexArr(当前选中的选项索引)、data(选中的数据)
    * @param keyMap 字段名映射
    */

    /**
    * 函数说明(实例化之后才可用)
    * @function setTitle()      参数 string                 设置控件的标题
    * @function updateWheel()   参数 sliderIndex, data      重新渲染指定的轮子(可用于先实例化，后通过ajax获取数据的场景)
    * @function updateWheels()  参数 data                   重新渲染所有轮子,仅限级联数据格式使用(可用于先实例化，后通过ajax获取数据的场景)
    * @function locatePosition() 参数 sliderIndex, posIndex  传入位置数组，重定位轮子的位置
    * @function show()          参数 无参                   唤起弹窗组件
    * @function getValue()      参数 无参                   获取组件选择的值
    */

    var mobileSelect1 = new MobileSelect({
    trigger: "#trigger1",
    title: "单项选择",
    wheels: [{ data: weekdayArr }],
    position: [2], //初始化定位 打开时默认选中的哪个 如果不填默认为0
    transitionEnd: function (indexArr, data) {
    //console.log(data);
},
    callback: function (indexArr, data) {
    console.log(data);
},
});

    var mobileSelect2 = new MobileSelect({
    trigger: "#trigger2",
    title: "双项选择",
    wheels: [{ data: weekdayArr }, { data: timeArr }],
    position: [1, 2],
    transitionEnd: function (indexArr, data) {
    //console.log(data);
},
    callback: function (indexArr, data) {
    console.log(data);
},
});

    var mobileSelect3 = new MobileSelect({
    trigger: "#trigger3",
    title: "多项选择",
    wheels: [
{ data: numArr },
{ data: numArr },
{ data: numArr },
{ data: numArr },
{ data: numArr },
    ],
    position: [0, 1, 0, 1, 0],
    transitionEnd: function (indexArr, data) {
    //console.log(data);
},
    callback: function (indexArr, data) {
    console.log(data);
},
});

    var mobileSelect4 = new MobileSelect({
    trigger: "#trigger4",
    title: "地区选择",
    wheels: [
{
    data: [
{
    id: "1",
    value: "附近",
    childs: [
{ id: "1", value: "1000米" },
{ id: "2", value: "2000米" },
{ id: "3", value: "3000米" },
{ id: "4", value: "5000米" },
{ id: "5", value: "10000米" },
    ],
},
{ id: "2", value: "上城区" },
{ id: "3", value: "下城区" },
{ id: "4", value: "江干区" },
{ id: "5", value: "拱墅区" },
{ id: "6", value: "西湖区" },
    ],
},
    ],
    transitionEnd: function (indexArr, data) {
    //console.log(data);
},
    callback: function (indexArr, data) {
    console.log(data);
},
});

    var mobileSelect5 = new MobileSelect({
    trigger: "#trigger5",
    title: "车型选择",
    wheels: [{ data: UplinkData }],
    position: [2, 0],
    transitionEnd: function (indexArr, data) {
    //console.log(data);
},
    callback: function (indexArr, data) {
    console.log(data);
},
});

    (function() {
        function getClass(dom,string) {
            return dom.getElementsByClassName(string);
        }
        //构造器
        function MobileSelect(config) {
            this.mobileSelect;
            this.wheelsData = config.wheels;
            this.jsonType =  false;
            this.cascadeJsonData = [];
            this.displayJson = [];
            this.curValue = null;
            this.curIndexArr = [];
            this.cascade = false;
            this.startY;
            this.moveEndY;
            this.moveY;
            this.oldMoveY;
            this.offset = 0;
            this.offsetSum = 0;
            this.oversizeBorder;
            this.curDistance = [];
            this.clickStatus = false;
            this.isPC = true;
            this.init(config);
        }
        MobileSelect.prototype = {
            constructor: MobileSelect,
            init: function(config){
                var _this = this;
                _this.keyMap = config.keyMap ? config.keyMap : {id:'id', value:'value', childs:'childs'};
                _this.checkDataType();
                _this.renderWheels(_this.wheelsData, config.cancelBtnText, config.ensureBtnText);
                _this.trigger = document.querySelector(config.trigger);
                if(!_this.trigger){
                    console.error('mobileSelect has been successfully installed, but no trigger found on your page.');
                    return false;
                }
                _this.wheel = getClass(_this.mobileSelect,'wheel');
                _this.slider = getClass(_this.mobileSelect,'selectContainer');
                _this.wheels = _this.mobileSelect.querySelector('.wheels');
                _this.liHeight = _this.mobileSelect.querySelector('li').offsetHeight;
                _this.ensureBtn = _this.mobileSelect.querySelector('.ensure');
                _this.cancelBtn = _this.mobileSelect.querySelector('.cancel');
                _this.grayLayer = _this.mobileSelect.querySelector('.grayLayer');
                _this.popUp = _this.mobileSelect.querySelector('.content');
                _this.callback = config.callback || function(){};
                _this.transitionEnd = config.transitionEnd || function(){};
                _this.onShow = config.onShow || function(){};
                _this.onHide = config.onHide || function(){};
                _this.initPosition = config.position || [];
                _this.titleText = config.title || '';
                _this.connector = config.connector || ' ';
                _this.triggerDisplayData = !(typeof(config.triggerDisplayData)=='undefined') ? config.triggerDisplayData : true;
                _this.trigger.style.cursor='pointer';
                _this.setStyle(config);
                _this.setTitle(_this.titleText);
                _this.checkIsPC();
                _this.checkCascade();
                _this.addListenerAll();

                if (_this.cascade) {
                    _this.initCascade();
                }
                //定位 初始位置
                if(_this.initPosition.length < _this.slider.length){
                    var diff = _this.slider.length - _this.initPosition.length;
                    for(var i=0; i<diff; i++){
                        _this.initPosition.push(0);
                    }
                }

                _this.setCurDistance(_this.initPosition);


                //按钮监听
                _this.cancelBtn.addEventListener('click',function(event){
                    _this.hide();
                });

                _this.ensureBtn.addEventListener('click',function(event){
                    _this.hide();
                    if(!_this.liHeight) {
                        _this.liHeight =  _this.mobileSelect.querySelector('li').offsetHeight;
                    }
                    var tempValue ='';
                    for(var i=0; i<_this.wheel.length; i++){
                        i==_this.wheel.length-1 ? tempValue += _this.getInnerHtml(i) : tempValue += _this.getInnerHtml(i) + _this.connector;
                    }
                    if(_this.triggerDisplayData){
                        _this.trigger.innerHTML = tempValue;
                    }
                    _this.curIndexArr = _this.getIndexArr();
                    _this.curValue = _this.getCurValue();
                    _this.callback(_this.curIndexArr, _this.curValue);
                });

                _this.trigger.addEventListener('click',function(event){
                    _this.show();
                });
                _this.grayLayer.addEventListener('click',function(event){
                    _this.hide();
                });
                _this.popUp.addEventListener('click',function(event){
                    event.stopPropagation();
                });

                _this.fixRowStyle(); //修正列数
            },

            setTitle: function(string){
                var _this = this;
                _this.titleText = string;
                _this.mobileSelect.querySelector('.title').innerHTML = _this.titleText;
            },

            setStyle: function(config){
                var _this = this;
                if(config.ensureBtnColor){
                    _this.ensureBtn.style.color = config.ensureBtnColor;
                }
                if(config.cancelBtnColor){
                    _this.cancelBtn.style.color = config.cancelBtnColor;
                }
                if(config.titleColor){
                    _this.title = _this.mobileSelect.querySelector('.title');
                    _this.title.style.color = config.titleColor;
                }
                if(config.textColor){
                    _this.panel = _this.mobileSelect.querySelector('.panel');
                    _this.panel.style.color = config.textColor;
                }
                if(config.titleBgColor){
                    _this.btnBar = _this.mobileSelect.querySelector('.btnBar');
                    _this.btnBar.style.backgroundColor = config.titleBgColor;
                }
                if(config.bgColor){
                    _this.panel = _this.mobileSelect.querySelector('.panel');
                    _this.shadowMask = _this.mobileSelect.querySelector('.shadowMask');
                    _this.panel.style.backgroundColor = config.bgColor;
                    _this.shadowMask.style.background = 'linear-gradient(to bottom, '+ config.bgColor + ', rgba(255, 255, 255, 0), '+ config.bgColor + ')';
                }
                if(!isNaN(config.maskOpacity)){
                    _this.grayMask = _this.mobileSelect.querySelector('.grayLayer');
                    _this.grayMask.style.background = 'rgba(0, 0, 0, '+ config.maskOpacity +')';
                }
            },

            checkIsPC: function(){
                var _this = this;
                var sUserAgent = navigator.userAgent.toLowerCase();
                var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
                var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
                var bIsMidp = sUserAgent.match(/midp/i) == "midp";
                var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
                var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
                var bIsAndroid = sUserAgent.match(/android/i) == "android";
                var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
                var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
                if ((bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM)) {
                    _this.isPC = false;
                }
            },

            show: function(){
                this.mobileSelect.classList.add('mobileSelect-show');
                if (typeof this.onShow === 'function') {
                    this.onShow(this);
                }
            },

            hide: function() {
                this.mobileSelect.classList.remove('mobileSelect-show');
                if (typeof this.onHide === 'function') {
                    this.onHide(this);
                }
            },

            renderWheels: function(wheelsData, cancelBtnText, ensureBtnText){
                var _this = this;
                var cancelText = cancelBtnText ? cancelBtnText : '取消';
                var ensureText = ensureBtnText ? ensureBtnText : '确认';
                _this.mobileSelect = document.createElement("div");
                _this.mobileSelect.className = "mobileSelect";
                _this.mobileSelect.innerHTML =
                    '<div class="grayLayer"></div>'+
                    '<div class="content">'+
                    '<div class="btnBar">'+
                    '<div class="fixWidth">'+
                    '<div class="cancel">'+ cancelText +'</div>'+
                    '<div class="title"></div>'+
                    '<div class="ensure">'+ ensureText +'</div>'+
                    '</div>'+
                    '</div>'+
                    '<div class="panel">'+
                    '<div class="fixWidth">'+
                    '<div class="wheels">'+
                    '</div>'+
                    '<div class="selectLine"></div>'+
                    '<div class="shadowMask"></div>'+
                    '</div>'+
                    '</div>'+
                    '</div>';
                document.body.appendChild(_this.mobileSelect);

                //根据数据长度来渲染

                var tempHTML='';
                for(var i=0; i<wheelsData.length; i++){
                    //列
                    tempHTML += '<div class="wheel"><ul class="selectContainer">';
                    if(_this.jsonType){
                        for(var j=0; j<wheelsData[i].data.length; j++){
                            //行
                            tempHTML += '<li data-id="'+wheelsData[i].data[j][_this.keyMap.id]+'">'+wheelsData[i].data[j][_this.keyMap.value]+'</li>';
                        }
                    }else{
                        for(var j=0; j<wheelsData[i].data.length; j++){
                            //行
                            tempHTML += '<li>'+wheelsData[i].data[j]+'</li>';
                        }
                    }
                    tempHTML += '</ul></div>';
                }
                _this.mobileSelect.querySelector('.wheels').innerHTML = tempHTML;
            },

            addListenerAll: function(){
                var _this = this;
                for(var i=0; i<_this.slider.length; i++){
                    //手势监听
                    (function (i) {
                        _this.addListenerWheel(_this.wheel[i], i);
                    })(i);
                }
            },

            addListenerWheel: function(theWheel, index){
                var _this = this;
                theWheel.addEventListener('touchstart', function (event) {
                    _this.touch(event, this.firstChild, index);
                },false);
                theWheel.addEventListener('touchend', function (event) {
                    _this.touch(event, this.firstChild, index);
                },false);
                theWheel.addEventListener('touchmove', function (event) {
                    _this.touch(event, this.firstChild, index);
                },false);

                if(_this.isPC){
                    //如果是PC端则再增加拖拽监听 方便调试
                    theWheel.addEventListener('mousedown', function (event) {
                        _this.dragClick(event, this.firstChild, index);
                    },false);
                    theWheel.addEventListener('mousemove', function (event) {
                        _this.dragClick(event, this.firstChild, index);
                    },false);
                    theWheel.addEventListener('mouseup', function (event) {
                        _this.dragClick(event, this.firstChild, index);
                    },true);
                }
            },

            checkDataType: function(){
                var _this = this;
                if(typeof(_this.wheelsData[0].data[0])=='object'){
                    _this.jsonType = true;
                }
            },

            checkCascade: function(){
                var _this = this;
                if(_this.jsonType){
                    var node = _this.wheelsData[0].data;
                    for(var i=0; i<node.length; i++){
                        if(_this.keyMap.childs in node[i] && node[i][_this.keyMap.childs].length > 0){
                            _this.cascade = true;
                            _this.cascadeJsonData = _this.wheelsData[0].data;
                            break;
                        }
                    }
                }else{
                    _this.cascade = false;
                }
            },

            generateArrData: function (targetArr) {
                var tempArr = [];
                var keyMap_id = this.keyMap.id;
                var keyMap_value = this.keyMap.value;
                for(var i=0; i<targetArr.length; i++){
                    var tempObj = {};
                    tempObj[keyMap_id] = targetArr[i][this.keyMap.id];
                    tempObj[keyMap_value] = targetArr[i][this.keyMap.value];
                    tempArr.push(tempObj);
                }
                return tempArr;
            },

            initCascade: function(){
                var _this = this;
                _this.displayJson.push(_this.generateArrData(_this.cascadeJsonData));
                if(_this.initPosition.length>0){
                    _this.initDeepCount = 0;
                    _this.initCheckArrDeep(_this.cascadeJsonData[_this.initPosition[0]]);
                }else{
                    _this.checkArrDeep(_this.cascadeJsonData[0]);
                }
                _this.reRenderWheels();
            },

            initCheckArrDeep: function (parent) {
                var _this = this;
                if(parent){
                    if (_this.keyMap.childs in parent && parent[_this.keyMap.childs].length > 0) {
                        _this.displayJson.push(_this.generateArrData(parent[_this.keyMap.childs]));
                        _this.initDeepCount++;
                        var nextNode = parent[_this.keyMap.childs][_this.initPosition[_this.initDeepCount]];
                        if(nextNode){
                            _this.initCheckArrDeep(nextNode);
                        }else{
                            _this.checkArrDeep(parent[_this.keyMap.childs][0]);
                        }
                    }
                }
            },

            checkArrDeep: function (parent) {
                //检测子节点深度  修改 displayJson
                var _this = this;
                if(parent){
                    if (_this.keyMap.childs in parent && parent[_this.keyMap.childs].length > 0) {
                        _this.displayJson.push(_this.generateArrData(parent[_this.keyMap.childs])); //生成子节点数组
                        _this.checkArrDeep(parent[_this.keyMap.childs][0]);//检测下一个子节点
                    }
                }
            },

            checkRange: function(index, posIndexArr){
                var _this = this;
                var deleteNum = _this.displayJson.length-1-index;
                for(var i=0; i<deleteNum; i++){
                    _this.displayJson.pop(); //修改 displayJson
                }
                var resultNode;
                for (var i = 0; i <= index; i++){
                    if (i == 0)
                        resultNode = _this.cascadeJsonData[posIndexArr[0]];
                    else {
                        resultNode = resultNode[_this.keyMap.childs][posIndexArr[i]];
                    }
                }
                _this.checkArrDeep(resultNode);
                //console.log(_this.displayJson);
                _this.reRenderWheels();
                _this.fixRowStyle();
                _this.setCurDistance(_this.resetPosition(index, posIndexArr));
            },

            resetPosition: function(index, posIndexArr){
                var _this = this;
                var tempPosArr = posIndexArr;
                var tempCount;
                if(_this.slider.length > posIndexArr.length){
                    tempCount = _this.slider.length - posIndexArr.length;
                    for(var i=0; i<tempCount; i++){
                        tempPosArr.push(0);
                    }
                }else if(_this.slider.length < posIndexArr.length){
                    tempCount = posIndexArr.length - _this.slider.length;
                    for(var i=0; i<tempCount; i++){
                        tempPosArr.pop();
                    }
                }
                for(var i=index+1; i< tempPosArr.length; i++){
                    tempPosArr[i] = 0;
                }
                return tempPosArr;
            },

            reRenderWheels: function(){
                var _this = this;
                //删除多余的wheel
                if(_this.wheel.length > _this.displayJson.length){
                    var count = _this.wheel.length - _this.displayJson.length;
                    for(var i=0; i<count; i++){
                        _this.wheels.removeChild(_this.wheel[_this.wheel.length-1]);
                    }
                }
                for(var i=0; i<_this.displayJson.length; i++){
                    //列
                    (function (i) {
                        var tempHTML='';
                        if(_this.wheel[i]){
                            //console.log('插入Li');
                            for(var j=0; j<_this.displayJson[i].length; j++){
                                //行
                                tempHTML += '<li data-id="'+_this.displayJson[i][j][_this.keyMap.id]+'">'+_this.displayJson[i][j][_this.keyMap.value]+'</li>';
                            }
                            _this.slider[i].innerHTML = tempHTML;

                        }else{
                            var tempWheel = document.createElement("div");
                            tempWheel.className = "wheel";
                            tempHTML = '<ul class="selectContainer">';
                            for(var j=0; j<_this.displayJson[i].length; j++){
                                //行
                                tempHTML += '<li data-id="'+_this.displayJson[i][j][_this.keyMap.id]+'">'+_this.displayJson[i][j][_this.keyMap.value]+'</li>';
                            }
                            tempHTML += '</ul>';
                            tempWheel.innerHTML = tempHTML;

                            _this.addListenerWheel(tempWheel, i);
                            _this.wheels.appendChild(tempWheel);
                        }
                        //_this.·(i);
                    })(i);
                }
            },

            updateWheels:function(data){
                var _this = this;
                if(_this.cascade){
                    _this.cascadeJsonData = data;
                    _this.displayJson = [];
                    _this.initCascade();
                    if(_this.initPosition.length < _this.slider.length){
                        var diff = _this.slider.length - _this.initPosition.length;
                        for(var i=0; i<diff; i++){
                            _this.initPosition.push(0);
                        }
                    }
                    _this.setCurDistance(_this.initPosition);
                    _this.fixRowStyle();
                }
            },

            updateWheel: function(sliderIndex, data){
                var _this = this;
                var tempHTML='';
                if(_this.cascade){
                    console.error('级联格式不支持updateWheel(),请使用updateWheels()更新整个数据源');
                    return false;
                }
                else if(_this.jsonType){
                    for(var j=0; j<data.length; j++){
                        tempHTML += '<li data-id="'+data[j][_this.keyMap.id]+'">'+data[j][_this.keyMap.value]+'</li>';
                    }
                    _this.wheelsData[sliderIndex] = {data: data};
                }else{
                    for(var j=0; j<data.length; j++){
                        tempHTML += '<li>'+data[j]+'</li>';
                    }
                    _this.wheelsData[sliderIndex] = data;
                }
                _this.slider[sliderIndex].innerHTML = tempHTML;
            },

            fixRowStyle: function(){
                var _this = this;
                var width = (100/_this.wheel.length).toFixed(2);
                for(var i=0; i<_this.wheel.length; i++){
                    _this.wheel[i].style.width = width+'%';
                }
            },

            getIndex: function(distance){
                return Math.round((2*this.liHeight-distance)/this.liHeight);
            },

            getIndexArr: function(){
                var _this = this;
                var temp = [];
                for(var i=0; i<_this.curDistance.length; i++){
                    temp.push(_this.getIndex(_this.curDistance[i]));
                }
                return temp;
            },

            getCurValue: function(){
                var _this = this;
                var temp = [];
                var positionArr = _this.getIndexArr();
                if(_this.cascade){
                    for(var i=0; i<_this.wheel.length; i++){
                        temp.push(_this.displayJson[i][positionArr[i]]);
                    }
                }
                else if(_this.jsonType){
                    for(var i=0; i<_this.curDistance.length; i++){
                        temp.push(_this.wheelsData[i].data[_this.getIndex(_this.curDistance[i])]);
                    }
                }else{
                    for(var i=0; i<_this.curDistance.length; i++){
                        temp.push(_this.getInnerHtml(i));
                    }
                }
                return temp;
            },

            getValue: function(){
                return this.curValue;
            },

            calcDistance: function(index){
                return 2*this.liHeight-index*this.liHeight;
            },

            setCurDistance: function(indexArr){
                var _this = this;
                var temp = [];
                for(var i=0; i<_this.slider.length; i++){
                    temp.push(_this.calcDistance(indexArr[i]));
                    _this.movePosition(_this.slider[i],temp[i]);
                }
                _this.curDistance = temp;
            },

            fixPosition: function(distance){
                return -(this.getIndex(distance)-2)*this.liHeight;
            },

            movePosition: function(theSlider, distance){
                theSlider.style.webkitTransform = 'translate3d(0,' + distance + 'px, 0)';
                theSlider.style.transform = 'translate3d(0,' + distance + 'px, 0)';
            },

            locatePosition: function(index, posIndex){
                var _this = this;
                this.curDistance[index] = this.calcDistance(posIndex);
                this.movePosition(this.slider[index],this.curDistance[index]);
                if(_this.cascade){
                    _this.checkRange(index, _this.getIndexArr());
                }
            },

            updateCurDistance: function(theSlider, index){
                if(theSlider.style.transform){
                    this.curDistance[index] = parseInt(theSlider.style.transform.split(',')[1]);
                }else{
                    this.curDistance[index] = parseInt(theSlider.style.webkitTransform.split(',')[1]);
                }
            },

            getDistance:function(theSlider){
                if(theSlider.style.transform){
                    return parseInt(theSlider.style.transform.split(',')[1]);
                }else{
                    return parseInt(theSlider.style.webkitTransform.split(',')[1]);
                }
            },

            getInnerHtml: function(sliderIndex){
                var _this = this;
                var lengthOfList = _this.slider[sliderIndex].getElementsByTagName("li").length;
                var index = _this.getIndex(_this.curDistance[sliderIndex]);

                if (index >= lengthOfList) {
                    index = lengthOfList - 1;
                } else if (index < 0) {
                    index = 0;
                }
                return _this.slider[sliderIndex].getElementsByTagName('li')[index].innerHTML;
            },

            touch: function(event, theSlider, index){
                var _this = this;
                event = event || window.event;
                switch(event.type){
                    case "touchstart":
                        _this.startY = event.touches[0].clientY;
                        _this.startY = parseInt(_this.startY);
                        _this.oldMoveY = _this.startY;
                        break;

                    case "touchend":

                        _this.moveEndY = parseInt(event.changedTouches[0].clientY);
                        _this.offsetSum = _this.moveEndY - _this.startY;
                        _this.oversizeBorder = -(theSlider.getElementsByTagName('li').length-3)*_this.liHeight;

                        if(_this.offsetSum == 0){
                            //offsetSum为0,相当于点击事件
                            // 0 1 [2] 3 4
                            var clickOffetNum = parseInt((document.documentElement.clientHeight - _this.moveEndY)/40);
                            if(clickOffetNum!=2){
                                var offset = clickOffetNum - 2;
                                var newDistance = _this.curDistance[index] + (offset*_this.liHeight);
                                if((newDistance <= 2*_this.liHeight) && (newDistance >= _this.oversizeBorder) ){
                                    _this.curDistance[index] = newDistance;
                                    _this.movePosition(theSlider, _this.curDistance[index]);
                                    _this.transitionEnd(_this.getIndexArr(),_this.getCurValue());
                                }
                            }
                        }else{
                            //修正位置
                            _this.updateCurDistance(theSlider, index);
                            _this.curDistance[index] = _this.fixPosition(_this.curDistance[index]);
                            _this.movePosition(theSlider, _this.curDistance[index]);

                            //反弹
                            if(_this.curDistance[index] + _this.offsetSum > 2*_this.liHeight){
                                _this.curDistance[index] = 2*_this.liHeight;
                                setTimeout(function(){
                                    _this.movePosition(theSlider, _this.curDistance[index]);
                                }, 100);

                            }else if(_this.curDistance[index] + _this.offsetSum < _this.oversizeBorder){
                                _this.curDistance[index] = _this.oversizeBorder;
                                setTimeout(function(){
                                    _this.movePosition(theSlider, _this.curDistance[index]);
                                }, 100);
                            }
                            _this.transitionEnd(_this.getIndexArr(),_this.getCurValue());
                        }

                        if(_this.cascade){
                            _this.checkRange(index, _this.getIndexArr());
                        }

                        break;

                    case "touchmove":
                        event.preventDefault();
                        _this.moveY = event.touches[0].clientY;
                        _this.offset = _this.moveY - _this.oldMoveY;

                        _this.updateCurDistance(theSlider, index);
                        _this.curDistance[index] = _this.curDistance[index] + _this.offset;
                        _this.movePosition(theSlider, _this.curDistance[index]);
                        _this.oldMoveY = _this.moveY;
                        break;
                }
            },

            dragClick: function(event, theSlider, index){
                var _this = this;
                event = event || window.event;
                switch(event.type){
                    case "mousedown":
                        _this.startY = event.clientY;
                        _this.oldMoveY = _this.startY;
                        _this.clickStatus = true;
                        break;

                    case "mouseup":

                        _this.moveEndY = event.clientY;
                        _this.offsetSum = _this.moveEndY - _this.startY;
                        _this.oversizeBorder = -(theSlider.getElementsByTagName('li').length-3)*_this.liHeight;

                        if(_this.offsetSum == 0){
                            var clickOffetNum = parseInt((document.documentElement.clientHeight - _this.moveEndY)/40);
                            if(clickOffetNum!=2){
                                var offset = clickOffetNum - 2;
                                var newDistance = _this.curDistance[index] + (offset*_this.liHeight);
                                if((newDistance <= 2*_this.liHeight) && (newDistance >= _this.oversizeBorder) ){
                                    _this.curDistance[index] = newDistance;
                                    _this.movePosition(theSlider, _this.curDistance[index]);
                                    _this.transitionEnd(_this.getIndexArr(),_this.getCurValue());
                                }
                            }
                        }else{
                            //修正位置
                            _this.updateCurDistance(theSlider, index);
                            _this.curDistance[index] = _this.fixPosition(_this.curDistance[index]);
                            _this.movePosition(theSlider, _this.curDistance[index]);

                            //反弹
                            if(_this.curDistance[index] + _this.offsetSum > 2*_this.liHeight){
                                _this.curDistance[index] = 2*_this.liHeight;
                                setTimeout(function(){
                                    _this.movePosition(theSlider, _this.curDistance[index]);
                                }, 100);

                            }else if(_this.curDistance[index] + _this.offsetSum < _this.oversizeBorder){
                                _this.curDistance[index] = _this.oversizeBorder;
                                setTimeout(function(){
                                    _this.movePosition(theSlider, _this.curDistance[index]);
                                }, 100);
                            }
                            _this.transitionEnd(_this.getIndexArr(),_this.getCurValue());

                        }

                        _this.clickStatus = false;
                        if(_this.cascade){
                            _this.checkRange(index, _this.getIndexArr());
                        }
                        break;

                    case "mousemove":
                        event.preventDefault();
                        if(_this.clickStatus){
                            _this.moveY = event.clientY;
                            _this.offset = _this.moveY - _this.oldMoveY;
                            _this.updateCurDistance(theSlider, index);
                            _this.curDistance[index] = _this.curDistance[index] + _this.offset;
                            _this.movePosition(theSlider, _this.curDistance[index]);
                            _this.oldMoveY = _this.moveY;
                        }
                        break;
                }
            }

        };

        if (typeof exports == "object") {
            module.exports = MobileSelect;
        } else if (typeof define == "function" && define.amd) {
            define([], function () {
                return MobileSelect;
            })
        } else {
            window.MobileSelect = MobileSelect;
        }
    })();

