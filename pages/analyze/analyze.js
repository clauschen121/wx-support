// pages/analyze/analyze.js
Page({
  data: {
    describe: '请根据您的需求选择您需要选型的产品分类',
    products: [
      {
        title: 'M2M产品',
        url: '../../images/common/m2m.jpg',
        detail: '主要包含数据传输类产品，固定点位视频监控产品，wifi覆盖类产品以及智能工控机',
        jump: 'm2m/support'
      },
      {
        title: '车载视频产品',
        url: '../../images/common/dvs.jpg',
        detail: '主要针对车载行业，包括监控、定位、调度等产品',
        jump: 'dvs/support'
      },
      {
        title: '水利产品',
        url: '../../images/common/water.jpg',
        detail: '主要针对水相关行业，产品包括前端传感器、采集传输、无线预警、软件平台等',
        jump: 'water/support'
      }
    ]
  },
  jumpTo: function (e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.url
    })
  }
})