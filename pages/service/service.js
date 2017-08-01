// pages/service/service.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region:['北京市','北京市','东城区'],
    svitems: {},
    flag: 0,
    office:{
      shenzhen: {
        name: '梁工',
        phone: '13825205015',
        belong: 'huanan',
        charge: ['深圳市','珠海市']
      }, 
      guangzhou: {
        name: '田工',
        phone: '13316125428',
        belong: 'huanan',
        charge: ['广东省', '广西壮族自治区', '福建省', '海南省']
      }, 
      'wuhan': {
        name: '胡工',
        phone: '18571524068',
        belong: 'huanan',
        charge: ['湖南省','湖北省','江西省']
      },
      'chengdu': {
        name: '陈工',
        phone: '18681251747',
        belong: 'huanan',
        charge: ['四川省','重庆市','云南省','贵州省','西藏自治区']
      }, 
      'shanghai': {
        name: '曾工',
        phone: '18721363707',
        belong: 'huadong',
        charge: ['上海市','安徽省','江苏省']
      }, 
      'jinan': {
        name: '张工',
        phone: '13127290512',
        belong: 'huadong',
        charge: ['山东省']
      }, 
      'hangzhou': {
        name: '刘工',
        phone: '15382380063',
        belong: 'huadong',
        charge: ['浙江省']
      },
      'beijing': {
        name: '李工',
        phone: '17710762576',
        belong: 'huabei',
        charge: ['北京市','天津市','河北省','内蒙古自治区','山西省','河南省']
      }, 
      'shenyang': {
        name: '陈工',
        phone: '13342479570',
        belong: 'huabei',
        charge: ['辽宁省','吉林省','黑龙江省']
      }, 
      'xian': {
        name: '刘工',
        phone: '13609285924',
        belong: 'huabei',
        charge: ['陕西省','青海省','宁夏回族自治区','甘肃省','新疆维吾尔自治区']
      }
    },

    headquarters:{
      manager:{
        name: '周经理',
        phone: '18588206016',
        zone: '总'
      },
      huanan:{
        name: '章工',
        phone: '13600149266',
        zone: '区域'
      },
      huadong: {
        name: '张工',
        phone: '15549445840',
        zone: '区域'
      },
      huabei: {
        name: '向工',
        phone: '13925288436',
        zone: '区域'
      },
      hd:{
        name: '陈工',
        phone: '13632557540',
        zone: '区域'
      }
    },
    services:[],
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
    if (this.data.region[0] == '广东省' && (this.data.office.shenzhen.charge.indexOf(this.data.region[1]) != -1)) {
      this.data.svitems = this.data.office.shenzhen
    } else if (this.data.office.guangzhou.charge.indexOf(this.data.region[0]) != -1){
      this.data.svitems = this.data.office.guangzhou
    } else if (this.data.office.chengdu.charge.indexOf(this.data.region[0]) != -1) {
      this.data.svitems = this.data.office.chengdu
    } else if (this.data.office.wuhan.charge.indexOf(this.data.region[0]) != -1) {
      this.data.svitems = this.data.office.wuhan
    } else if (this.data.office.shanghai.charge.indexOf(this.data.region[0]) != -1) {
      this.data.svitems = this.data.office.shanghai
    } else if (this.data.office.hangzhou.charge.indexOf(this.data.region[0]) != -1) {
      this.data.svitems = this.data.office.hangzhou
    } else if (this.data.office.jinan.charge.indexOf(this.data.region[0]) != -1) {
      this.data.svitems = this.data.office.jinan
    } else if (this.data.office.beijing.charge.indexOf(this.data.region[0]) != -1) {
      this.data.svitems = this.data.office.beijing
    } else if (this.data.office.shenyang.charge.indexOf(this.data.region[0]) != -1) {
      this.data.svitems = this.data.office.shenyang
    } else if (this.data.office.xian.charge.indexOf(this.data.region[0]) != -1) {
      this.data.svitems = this.data.office.xian
    } else {
      this.data.svitems = {}
    }
  },
  dfServices: function () {
    this.data.svitems = {}
    this.checkBelong();
    this.data.services = [];
    if (this.data.svitems != null){
      this.data.svitems.zone = this.data.region[0];
      this.data.services.push(this.data.svitems);
      for(let i in this.data.headquarters){
        if(i == this.data.svitems.belong){
          this.data.services.push(this.data.headquarters[i]);
        }
      }
      this.data.services.push(this.data.headquarters.manager)
    }else{
      this.data.services.push(this.data.headquarters.hq);
      this.data.services.push(this.data.headquarters.master)
    }
  },

  phoneCall: function (e) {
    wx.makePhoneCall({
      phoneNumber: e.target.dataset.phone
    })
  }
})