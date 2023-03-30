/*
 * @Description: 
 * @Version: 1.0
 * @Author: AaroLi
 * @Date: 2023-03-06 11:09:27
 * @LastEditors: AaroLi
 * @LastEditTime: 2023-03-30 15:58:42
 */
let times = null;
const dayjs = require('dayjs')
const WXAPI = require('apifm-wxapi')
const mallName = wx.getStorageSync('mallName')  //获取登录信息如果登录信息为null 跳转到login页

Page({
  /**
   * 页面的初始数据
   */
  data: {
    count: 15,
    time: '',
    banners: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBanner()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      time: this.data.time = dayjs().format('YYYY/MM/DD')
    });
    times = setInterval(_ => {
      const count = this.data.count
      if (count == 1) {
        clearTimeout(times)
        if (!mallName) {
          wx.reLaunch({
            url: '/pages/login/index'
          });
        } else {
          wx.reLaunch({
            url: '/pages/index/index'
          });
        }
      }
      this.setData({
        count: this.data.count - 1
      });
    }, 1000)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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
  handleClickTbaberbar() {
    clearTimeout(times)
    if (!mallName) {
      wx.showToast({
        title: '请先登录呦 qaq ~~',
        icon: 'none',
      })
      wx.reLaunch({
        url: '/pages/login/index'
      });
    } else {
      wx.showToast({
        title: `欢迎回来：${wx.getStorageSync('userName')}`,
        icon: 'none',
      })
      wx.reLaunch({
        url: '/pages/index/index'
      });
    }
  },
  async getBanner() {
    const res = await WXAPI.banners({
      type: 'app'
    })
    this.setData({
      banners: res.data,
    });
    console.log('res', res);
  },
  imgClick() {
    wx.showToast({
      title: '点击右上角进入',
      icon: 'none',
    })
  },
})