/*
 * @Description: 
 * @Version: 1.0
 * @Author: AaroLi
 * @Date: 2023-03-06 10:58:16
 * @LastEditors: AaroLi
 * @LastEditTime: 2023-03-31 17:41:29
 */
const WXAPI = require('apifm-wxapi')
const APP = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        adPositionIndexPop: ""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.adPosition()
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        this.setData({
            navHeight: APP.globalData.navHeight,
            navTop: APP.globalData.navTop,
            windowHeight: APP.globalData.windowHeight,
            menuButtonObject: APP.globalData.menuButtonObject, //小程序胶囊信息
            mallName: wx.getStorageSync('userName')
        })
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
    async adPosition() {
        let res = await WXAPI.adPosition('indexPop')
        console.log('res', res);
        if (res.code == 0) {
            this.setData({
                adPositionIndexPop: res.data
            })
        }
    },
    closeAdPositionIndexPop() {
        this.setData({
            adPositionIndexPop: null
        })
    }
})