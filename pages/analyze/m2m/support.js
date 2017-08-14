// pages/analyze/m2m/support.js

var router = require('router.js');
var dtu = require('dtu.js');
var vtu = require('vtu.js');
var ipc = require('ipc.js');
var products = {
  title: '请选择需要进行咨询的产品类型：',
  option: [
    {
      text: '路由器',
      value: '0'
    },
    {
      text: 'DTU',
      value: '1'
    },
    {
      text: '视频路由器',
      value: '2'
    },
    {
      text: '智能工控机',
      detail: '',
      value: '3'
    }
  ]
};
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showindex: '',
    showinfoerr: {
      title: '系统错误',
      detail: '对不起，出现了系统错误'
    },
    showinfo: products,
    product: {
      '0': router,
      '1': dtu,
      '2': vtu,
      '3': ipc
    }
 
  },
  toNext: function(e){
    this.data.showindex += e.currentTarget.dataset.value;
    this.updateShowinfo();
    this.setData({
      showindex: this.data.showindex,
      showinfo: this.data.showinfo
    })
  },
  updateShowinfo: function(){
    var z = this.data.showinfo;
    for(let x in this.data.product[this.data.showindex[0]]){
      for (let y in this.data.product[this.data.showindex[0]][x]) {
        if (y == this.data.showindex) {
          this.data.showinfo = this.data.product[this.data.showindex[0]][x][y];
        }
      }
    }
    if(this.data.showinfo == z){
      this.data.showinfo = this.data.showinfoerr
    }
  },
  toLast: function(){
    this.data.showindex = this.data.showindex.substring(0,this.data.showindex.length-1);
    this.updateShowinfo();
    console.log(this.data.showindex,this.data.showinfo);
    this.setData({
      showindex: this.data.showindex,
      showinfo: this.data.showinfo
    })
  },
  toService: function(){
    wx.navigateTo({
      url: "../../service/m2m/support"
    })
  }

  
})