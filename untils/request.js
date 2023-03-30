/*
 * @Description: 
 * @Version: 1.0
 * @Author: AaroLi
 * @Date: 2023-03-05 16:46:30
 * @LastEditors: AaroLi
 * @LastEditTime: 2023-03-05 17:09:55
 */
import baseUrl from "./baseUrl"

var fun = function (config) {
    return new Promise((resolve, reject) => {
        wx.request({
            //url: 'url',//路径
            url: baseUrl + config.url,
            // timeout: 5000, //设置请求时间
            // data: {
            //     // 存放的数据
            // },
            // data:config.data,
            method:config.method,
            // method: "GET", //数据请求方式
            //   header:"",  请求头设置
            success: res => {
                resolve(res)
            }
            // fail(err) {
            //     console.log('err数据请求失败了', err);
            // },
            // complete: res => {
            //     console.log("请求完成后的参数");
            // }
        })
    })
}
export default fun
