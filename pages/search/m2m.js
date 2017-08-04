// pages/search/m2m.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: 0,
    specifications: [
      {
        title: '移动网络的类型',
        name: 'network',
        specheck: [
          {
            value: 0,
            name: '2g'
          },
          {
            value: 1,
            name: '4g'
          },
          {
            value: 2,
            name: '双模'
          }
        ]
      },
      {
        title: '串口的数量，不需要或不清楚选0',
        name:'serial',
        specheck: [
          {
            value: 0,
            name: '0个'
          },
          {
            value: 1,
            name: '1个'
          },
          {
            value: 2,
            name: '2个'
          },
          {
            value: 3,
            name: '3个及以上'
          }
        ] 
      },
      {
        title: '网口的数量，不需要或不清楚选0',
        name: 'lan',
        specheck: [
          {
            value: 0,
            name: '0个'
          },
          {
            value: 1,
            name: '1个'
          },
          {
            value: 2,
            name: '2个'
          },
          {
            value: 3,
            name: '3个及以上'
          }
        ]
      },
      {
        title: '是否需要wifi，不需要或不清楚则选否',
        name: 'wifi',
        specheck: [          
          {
            value: 0,
            name: '否'
          }, {
            value: 1,
            name: '是'
          }
        ]
      },
      {
        title: '是否需要带视频监控，不需要或不清楚选否',
        name: 'video',
        specheck: [          
          {
            value: 0,
            name: '否'
          },
          {
            value: 1,
            name: '是'
          }
        ]
      },
      {
        title: '是否需要定位功能，如果需要，请选择产品应用场所',
        name: 'location',
        specheck: [
          {
            value: 0,
            name: '否'
          },
          {
            value: 1,
            name: '固定点位'
          },
          {
            value: 2,
            name: '移动场景'
          }
        ]
      },
      {
        title: '是否需要在产品内内置app或对产品二次开发',
        name: 'app',
        specheck: [
          {
            value: 0,
            name: '否'
          },
          {
            value: 1,
            name: '是'
          },
        ]
      },
      {
        title: '是否需要产品支持VPN功能',
        name: 'vpn',
        specheck: [
          {
            value: 0,
            name: '否'
          },
          {
            value: 1,
            name: '是'
          },
        ]
      }
    ],
    products: {
      H7920: {
        network: 1,
        serial: 1,
        lan : 1,
        wifi: 0,
        video: 0,
        location: 1,
        app: 0,
        vpn: 0,
        name: 'H7920',
        imgurl: 'H7920.png',
        detail: '支持4G、3G、2.5G网络，采用高性能32位处理器，嵌入式操作系统的设计，完美支持USB高速模式。采用232接口，支持串口数据传输，同时支持M2M云管理平台。'
      },
      H7921: {
        network: 1,
        serial: 1,
        lan: 1,
        wifi: 0,
        video: 0,
        location: 1,
        app: 0,
        vpn: 1,
        name: 'H7921',
        imgurl: 'H7921.png',
        detail: '支持VPN专网接入，组网简单、迅速、灵活；采用隧道技术、加解密技术、密钥管理技术以及使用者与设备身份认证技术，实现多重加密，数据传输的安全性更高。'

      },
      H8951: {
        network: 1,
        serial: 1,
        lan: 2,
        wifi: 1,
        video: 0,
        location: 1,
        app: 0,
        vpn: 1,
        name: 'H8951',
        imgurl: 'H8951.png',
        detail: '内置WiFi模块，支持有线与无线、无线与无线相互备份；支持2*LAN口，其中LAN2可定制为WAN或者RJ45串口，可选支持DTU功能；多种工作模式，随需选择。'
      },
      H8922: {
        network: 2,
        serial: 0,
        lan: 3,
        wifi: 1,
        video: 0,
        location: 2,
        app: 0,
        vpn: 1,
        name: 'H8922',
        imgurl: 'H8922.png',
        detail: '双SIM，支持多模多网同时在线及有线与无线、无线与无线相互备份；接口更丰富，扩展性更强（4个LAN口，1个WAN口）。'
      },
      H8922S: {
        network: 2,
        serial: 1,
        lan: 3,
        wifi: 1,
        video: 0,
        location: 2,
        app: 0,
        vpn: 1,
        name: 'H8922S',
        imgurl: 'H8922S.png',
        detail: '采用高性能32位MIPS处理器，嵌入式操作系统的设计，APN/VPDN专网接入，双模双卡互为备份双重保障数据传输安全。提供高速可靠的路由及数据传输功能。可选支持GPS定位，使之更专注于应用于充电桩、银行营业网点、ATM机。'
      },
      H7210: {
        network: 0,
        serial: 1,
        lan: 0,
        wifi: 0,
        video: 0,
        location: 1,
        app: 0,
        vpn: 0,
        name: 'H7210',
        imgurl: 'H7210.png',
        detail: '采用性价比更高的通用配置，应用更广泛；在模块外部使用硬件狗电路，实时监控模块运行状态。支持复杂的网络环境，适合大规模组网和多种工作模式。'
      },
      H7710: {
        network: 1,
        serial: 1,
        lan: 0,
        wifi: 0,
        video: 0,
        location: 1,
        app: 0,
        vpn: 0,
        name: 'H7710',
        imgurl: 'H7710.png',
        detail: '基于4G数据通信网络，采用工业级端子排接口，产品设计符合工业级标准，内嵌PPP、TCP/IP、DDP等多种协议，可实现用户设备到数据中心远程透明数据通信。接受订制化开发需求。'
      },
      H7118: {
        network: 1,
        serial: 1,
        lan: 0,
        wifi: 0,
        video: 0,
        location: 1,
        app: 0,
        vpn: 0,
        name: 'H7118',
        imgurl: 'H7118.png',
        detail: '采用高性能工业级设计，军工级模块，温度适应能力超强，特别适用于恶劣的工业环境；体积最小、功耗最低的一款外置式产品，尺寸相当于通用名片的大小，厚度不到2CM。'
      },
      H7710E: {
        network: 0,
        serial: 1,
        lan: 0,
        wifi: 0,
        video: 0,
        location: 1,
        app: 0,
        vpn: 0,
        name: 'H7710E',
        imgurl: 'H7710E.png',
        detail: '嵌入式设计，体积小，接口灵活，便于集成，应用更广泛；低功耗，通讯平均功耗仅约150mA@+4VDC；支持大规模组网和M2M云管理平台。'
      },
      H7710DLNZ: {
        network: 1,
        serial: 2,
        lan: 0,
        wifi: 0,
        video: 0,
        location: 1,
        app: 0,
        vpn: 0,
        name: 'H7710DLNZ',
        imgurl: 'H7710DLNZ.png',
        detail: '电力行业专用，更高级别的加密安全设计；支持电力网管平台，通过电科院EMC4级测试认证；丰富的通信接口，便于集成和大规模组网。'
      },
      H8504: {
        network: 1,
        serial: 3,
        lan: 2,
        wifi: 1,
        video: 1,
        location: 2,
        app: 0,
        vpn: 1,
        name: 'H8504',
        imgurl: 'H8504.png',
        detail: '采用嵌入式操作系统，并针对无线网络的不稳定性、视频及数据延时变化较大等特点进行了优化设计，为您提供高速可靠的视频传输及数据传输功能。'
      },
      H9380: {
        network: 1,
        serial: 3,
        lan: 2,
        wifi: 1,
        video: 1,
        location: 2,
        app: 1,
        vpn: 1,
        name: 'H9380',
        imgurl: 'H9380.png',
        detail: '采用嵌入式微处理器和嵌入式操作系统设计的高可靠性、高稳定性智能工控设备。具备优秀的3G、4G无线传输性能。广泛应用于充电桩、智能售货、智能快递柜、门禁管理等领域。'
      },
      H9303: {
        network: 1,
        serial: 0,
        lan: 1,
        wifi: 1,
        video: 0,
        location: 2,
        app: 1,
        vpn: 0,
        name: 'H9303',
        imgurl: 'H9303.png',
        detail: '丰富的网络接入方案，支持WiFi免费接入；高并发性，可支持同时20-80人上网；多种内容存储和更新方案；支持广告推送吸粉；架构简单，部署方便。'
      },
    },
    showList:[]
  },

  formSubmit: function(e){
    this.data.showList = [];
    var newObj = this.defValue(e.detail.value);
    this.matchProducts(newObj);
    this.setData({
      showList: this.data.showList,
      flag: 1
    });
  },

  defValue: function(obj){
    for(let x in obj){
      if(obj[x]==''){
        obj[x]==0;
      }
    }
    return obj
  },

  matchProducts(obj){
    var i;
    for(let x in this.data.products){
      i = 0;
      for(let y in this.data.products[x]){
        if(obj.hasOwnProperty(y)){
          if (obj[y] <= this.data.products[x][y]){
            i++;
          }
        }
      }
      if(i==8){
        this.data.showList.push(this.data.products[x]);
      }
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})