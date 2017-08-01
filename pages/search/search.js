//search.js
Page({
  data: {
    describe: '请选择您需要选型的产品类型',
    products: [
      {
        title: 'M2M产品',
        url: '',
        detail: '',
        jump: ''
      }, 
      {
        title: '车载视频产品',
        url: '',
        detail: '',
        jump: ''
      },
      {
        title: '水利产品',
        url: '',
        detail: '',
        jump: ''
      }
    ]
  },
  jumpTo: function (e) {
    wx.navigateTo({
      url: e.target.dataset.url
    })
  }
})
