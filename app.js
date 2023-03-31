/*
 * @Description: 
 * @Version: 1.0
 * @Author: AaroLi
 * @Date: 2023-03-06 10:58:16
 * @LastEditors: AaroLi
 * @LastEditTime: 2023-03-31 17:38:57
 */
// app.js
const WXAPI = require('apifm-wxapi')
const CONFIG = require('config.js')
App({
    onLaunch(options) {
        // options 就是打印当前页面信息比如路由 页面数据之类的
        // 初始化时候执行 只初始化的时候执行
        const subDomain = wx.getExtConfigSync().subDomain
        if (subDomain) {
            WXAPI.init(subDomain)
        } else {
            WXAPI.init(CONFIG.subDomain)
            WXAPI.setMerchantId(CONFIG.merchantId)
        }
        // ---------------检测navbar高度  做自定义导航条设置的动态高度
        let menuButtonObject = wx.getMenuButtonBoundingClientRect();
        console.log("小程序胶囊信息", menuButtonObject)
        wx.getSystemInfo({
            success: res => {
                let statusBarHeight = res.statusBarHeight,
                    navTop = menuButtonObject.top,//胶囊按钮与顶部的距离
                    navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight) * 2;//导航高度
                this.globalData.navHeight = navHeight;
                this.globalData.navTop = navTop;
                this.globalData.windowHeight = res.windowHeight;
                this.globalData.menuButtonObject = menuButtonObject;
                console.log("navHeight", navHeight);
            },
            fail(err) {
                console.log(err);
            }
        })
    },
    onShow(options) {
        // 看到小程序时候执行
        this.globalData.times = +  new Date()
    },
    onHide() {
        // 看不到的时候执行
    },
    onError(msg) {
        console.log(msg)
    },
    // 全局数据
    globalData: {
        userName: '微信用户',
        baseUrl: 'www.baidu.com'
    },
    //全局方法
    getUserInfo(e) {

    }
})
