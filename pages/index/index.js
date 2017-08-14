//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    weltext: '欢迎使用深圳宏电自助信息处理服务',
    detext: '您可以使用该服务进行产品选型与产品故障分析，我们建议您在选用人工服务前先使用自助服务进行产品选型或故障排查，以便快速解决您的问题。请选择您需要使用的服务',
    indexbt: [
      {
        url: "../search/search",
        imgurl: "../../images/tabbar/search_selected.png",
        imgst: "width:40rpx;height:40rpx",
        text: "产品选型"
      },
      {
        url: "../analyze/analyze",
        imgurl: "../../images/tabbar/analyze_selected.png",
        imgst: "width:40rpx;height:40rpx",
        text: "故障分析"
      },
      {
        url: "../service/service",
        imgurl: "../../images/tabbar/service_selected.png",
        imgst: "width:40rpx;height:40rpx",
        text: "人工服务"
      },
    ]
    
  },
  //页面跳转函数
  jumpTab: function(e) {
    wx.switchTab({
      url: e.target.dataset.url
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '转发',
      desc:'宏电自助信息处理服务程序',
      path: '/index/index'
      
    }
  }
})
