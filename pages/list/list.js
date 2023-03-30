/*
 * @Description: 
 * @Version: 1.0
 * @Author: AaroLi
 * @Date: 2023-03-03 11:43:49
 * @LastEditors: AaroLi
 * @LastEditTime: 2023-03-30 09:16:33
 */
// 获取全局数据 globalData
const app = getApp();
Page({
    data: {
        msg: "hello word.",
        vid: 'black',
        list: [{ name: 1, id: 1, arry: ['aa', 'bb'] }, { name: 2, id: 2, arry: ['cc', 'dd'] }, { name: 3, id: 3, arry: ['ee', 'ff'] }, { name: 4, id: 4, arry: ['hh', 'ii'] }]
    },
    onLoad: function (options) {
        // 页面创建时执行
    },
    onShow: function () {
        // 页面出现在前台时执行
    },
    onReady: function () {
        // 页面首次渲染完毕时执行
        // 手动更新数据 setData
        setTimeout(_ => {
            this.setData({ msg: '你好' })
        }, 2000)
        //获取全局数据
        console.log('获取全局数据 globalData', app.globalData.times);
        // 调用全局方法
        app.getUserInfo();
        // 取页面数据
        console.log('取页面数据', this.data.msg);
    },
    onHide: function () {
        // 页面从前台变为后台时执行
    },
    onUnload: function () {
        // 页面销毁时执行
    },
    onPullDownRefresh: function () {
        // 触发下拉刷新时执行
    },
    onReachBottom: function () {
        // 页面触底时执行
    },
    onShareAppMessage: function () {
        // 页面被用户分享时执行
    },
    onPageScroll: function () {
        // 页面滚动时执行
    },
    onResize: function () {
        // 页面尺寸变化时执行
    },
    onTabItemTap(item) {
        // 点击taberbar时执行
    },
    // 事件声明
    handleClick(e) {
        console.log('我被点击了', e.target);
    },
    jump(e) {
        // 适用于tabbar切换  左上角是没有返回键的  switchtab 是不能传参的
        wx.switchTab({
            url: "/pages/index/index"
        })
        //既想传参又想移动tablebar  要用wx.reLaunch
    }
})
