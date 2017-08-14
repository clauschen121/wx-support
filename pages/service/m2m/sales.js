// pages/service/m2m/sales.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['北京市', '北京市', '东城区'],
    svitems: {},
    flag: 0,
    office: {
      shenzhen: {
        name: '孙先生',
        phone: '13823553903',
        belong: 'huanan',
        charge: ['深圳市', '珠海市']
      },
      guangzhou: {
        name: '胡先生',
        phone: '13316125472',
        belong: 'huanan',
        charge: ['广东省', '广西壮族自治区']
      },
      fuzhou: {
        name: '卢先生',
        phone: '18558787346',
        belong: 'huadong',
        charge: ['福建省']
      },
      'wuhan': {
        name: '唐先生',
        phone: '18971339002',
        belong: 'huanan',
        charge: ['湖南省', '湖北省', '江西省']
      },
      'chengdu': {
        name: '范先生',
        phone: '18980944704',
        belong: 'huanan',
        charge: ['四川省', '云南省', '贵州省', '西藏自治区']
      },
      'chongqing': {
        name: '黄先生',
        phone: '17316798521',
        belong: 'huanan',
        charge: ['重庆市']
      },
      'shanghai': {
        name: '肖先生',
        phone: '18621617279',
        belong: 'huadong',
        charge: ['上海市', '安徽省', '江苏省']
      },
      'jinan': {
        name: '刘先生',
        phone: '18615617382',
        belong: 'huadong',
        charge: ['山东省']
      },
      'hangzhou': {
        name: '马先生',
        phone: '18072878708',
        belong: 'huadong',
        charge: ['浙江省']
      },
      'beijing': {
        name: '李先生',
        phone: '13501257239',
        belong: 'huabei',
        charge: ['北京市', '内蒙古自治区']
      },
      'zhenzhou': {
        name: '凡先生',
        phone: '18610175306',
        belong: 'huabei',
        charge: ['河南省', '河北省', '山西省']
      },      
      'shenyang': {
        name: '刘先生',
        phone: '15940556464',
        belong: 'huabei',
        charge: ['辽宁省', '吉林省', '黑龙江省']
      },
      'tianjin': {
        name: '孙先生',
        phone: '13672191061',
        belong: 'huabei',
        charge: ['天津市']
      },
      'xian': {
        name: '杨先生',
        phone: '13991266981',
        belong: 'huabei',
        charge: ['陕西省', '青海省', '宁夏回族自治区', '甘肃省', '新疆维吾尔自治区']
      }
    },

    headquarters: {
      huanan: {
        name: '周先生',
        phone: '13316125492',
        zone: '区域'
      },
      huadong: {
        name: '肖先生',
        phone: '18621617279',
        zone: '区域'
      },
      huabei: {
        name: '刘先生',
        phone: '18615617382',
        zone: '区域'
      },
      hq: {
        name: '刘经理',
        phone: '18588280561',
        zone: '部门'
      }
    },
    services: [],
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  bindRegionChange: function (e) {
    this.data.region = e.detail.value;
    this.dfServices();
    this.setData({
      region: this.data.region,
      flag: 1,
      services: this.data.services
    })
  },

  checkBelong: function () {
    for (let x in this.data.office) {
      if (this.data.office[x].charge.indexOf(this.data.region[0]) != -1) {
        this.data.svitems = this.data.office[x];
      }
    }
    if ((this.data.region[0] == '广东省' && (this.data.office.shenzhen.charge.indexOf(this.data.region[1]) != -1)) || this.data.region[0] == '海南省') {
      this.data.svitems = this.data.office.shenzhen;
    }
  },
  dfServices: function () {
    this.data.svitems = {}
    this.checkBelong();
    this.data.services = [];
    if (this.data.svitems != null) {
      this.data.svitems.zone = this.data.region[0];
      this.data.services.push(this.data.svitems);
      for (let i in this.data.headquarters) {
        if (i == this.data.svitems.belong) {
          this.data.services.push(this.data.headquarters[i]);
        }
      }
    } else {
      this.data.services.push(this.data.headquarters.hq);
    }
  },

  phoneCall: function (e) {
    wx.makePhoneCall({
      phoneNumber: e.target.dataset.phone
    })
  }
})