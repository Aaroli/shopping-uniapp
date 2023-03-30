/*
 * @Description: 
 * @Version: 1.0
 * @Author: AaroLi
 * @Date: 2023-03-06 10:58:16
 * @LastEditors: AaroLi
 * @LastEditTime: 2023-03-30 14:47:43
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
