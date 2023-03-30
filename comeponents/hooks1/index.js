/*
 * @Description: 
 * @Version: 1.0
 * @Author: AaroLi
 * @Date: 2023-03-06 16:32:52
 * @LastEditors: AaroLi
 * @LastEditTime: 2023-03-06 16:46:54
 */

/**
 * index
 */
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 子接收父组件传过来的参数
    list: {
      type: Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(){
      console.log('子方法获取父传过来的list',this.properties.list);
    }
  }
})

