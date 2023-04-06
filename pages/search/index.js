/*
 * @Description: 
 * @Version: 1.0
 * @Author: AaroLi
 * @Date: 2023-04-06 15:32:19
 * @LastEditors: AaroLi
 * @LastEditTime: 2023-04-06 16:21:01
 */

/**
 * index.js
*/
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      list: wx.getStorageSync('searchHis') //把搜索数据存在这个里面  是个数组
    })
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
  search(e) {
    // 用来存储搜索的历史数据，不断的像searchHis这个数组去push数据
    this.setData({
      inputVal: e.detail
    })
    if (e.detail) {
      let searchHis = wx.getStorageSync('searchHis')
      if (!searchHis) {
        searchHis = [e.detail]
      }
      // 很细节做了去重操作 ~ . ~
      if (!searchHis.includes(e.detail)) {
        searchHis.push(e.detail)
      }
      wx.setStorageSync('searchHis', searchHis)
      this.setData({
        list: searchHis
      })
    }
    wx.redirectTo({
      url: '/pages/goods/list?name=' + this.data.inputVal,
    })
  },
  // 微信扫码
  searchscan() {
    wx.scanCode({
      scanType: ['barCode', 'qrCode', 'datamatrix', 'pdf417'],
      success: res => {
        // TODO 暂时未做商品分类页面
        // wx.redirectTo({
        //   url: '/pages/goods/list?name=' + res.result,
        // })
      }
    })
  },
  // 删除历史条目
  onClose(e) {
    const idx = e.currentTarget.dataset.idx
    const searchHis = this.data.list
    searchHis.splice(idx, 1)
    wx.setStorageSync('searchHis', searchHis)
    this.setData({
      list: searchHis
    })
  },
  //点击关键会触发跳转
  go(e) {
    const idx = e.currentTarget.dataset.idx
    const keywords = this.data.list[idx]
    // TODO 暂时未做商品分类页面
    // wx.redirectTo({
    //   url: '/pages/goods/list?name=' + keywords,
    // })
  },
})