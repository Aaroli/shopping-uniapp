Page({
  data: {
    userName: "未知用户",
    userid: '测试账号',
    password: '666666'
  },
  onLoad() {

  },
  onReady: function () {
    wx.getUserInfo({
      success: function (res) {
        wx.setStorageSync('userName', res.userInfo.nickName)
      }
    })
    this.setData({ userName: wx.getStorageSync('userName') })
  },
  getUserProfile(e) {
    //弹窗获取用户信息  只能通过点击的方式调用
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.showModal({
          title: '提示',
          content: '我们希望获得您的个人信息，以便为您提供更好的服务！',
          success(res) {
            if (res.confirm) {
              console.log('用户点击确定')
              wx.getUserProfile({
                desc: '获取头像和名称',
              }).then(res => {
                wx.setStorageSync('userName', res.userInfo.nickName)
                wx.switchTab({
                  url: "/pages/index/index"
                })
                wx.showToast({
                  title: `欢迎回来：${res.userInfo.nickName}`,
                  icon: 'none',
                })
              })
                .catch(err => console.error)

            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      }
    })
  },
  url() {
    wx.reLaunch({
      url: '/pages/home/index'
    });
  },
})
