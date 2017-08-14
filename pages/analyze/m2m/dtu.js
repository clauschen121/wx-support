var problems = {
  '1': {
    title: '请选择您要处理的问题类型',
    option: [
      {
        text: '产品使用中故障处理',
        value: '0'
      },
      {
        text: '咨询产品如何使用或配置',
        value: '1'
      },
      {
        text: '咨询如何远程管理产品并优化运维',
        value: '2'
      }
    ]
  },
  '10': {
    title: '请选择使用中出现的产品问题',
    option: [
      {
        text: '下位机无法与中心通信',
        value: '0'
      },
      {
        text: '通信过程中经常掉线',
        value: '1'
      },
      {
        text: '其他问题',
        value: '2'
      }
    ]
  },
  '11': {
    title: '请选择需要咨询的使用或配置问题',
    option: [
      {
        text: '调试时串口线如何连接？',
        value: '0'
      },
      {
        text: '如何配置DTU？',
        value: '1'
      },
      {
        text: 'DTU需要配置的常用参数说明',
        value: '2'
      },
      {
        text: '中心的网络环境如何搭建？',
        value: '3'
      },
      {
        text: '只在需要发送数据时才让dtu拨号，如何配置？',
        value: '4'
      },
      {
        text: '中心软件只支持串口通信如何配置？',
        value: '5'
      },
      {
        text: '要实现两个点之间的点对点通信如何配置？',
        value: '6'
      },
      {
        text: '咨询其它使用问题',
        value: '7'
      }
    ]
  },
  '100': {
    title: '把dtu与电脑相连，通过宏电工具盒，进入dtu的配置，选择调试信息为info，并重启dtu，打开串口工具，监听与dtu相连的串口的信息，查看调试信息显示的dtu工作状态',
    option: [
      {
        text: '找不到sim卡',
        value: '0'
      },
      {
        text: '能找到sim卡但是拨号失败',
        value: '1'
      },
      {
        text: '拨号成功但连接中心失败',
        value: '2'
      },
      {
        text: '连接中心成功',
        value: '3'
      }
    ]
  },
  '101': {
    title: '把dtu与电脑相连，通过宏电工具盒，进入dtu的配置，选择调试信息为info，并重启dtu，打开串口工具，监听与dtu相连的串口的信息，查看调试信息显示的dtu信号强度',
    option: [
      {
        text: '信号强度大于20',
        value: '0'
      },
      {
        text: '信号强度小于20',
        value: '1'
      }
    ]
  },
  '102': {
    title: '请选择您遇到的其他问题？',
    option: [
      {
        text: 'dtu上电后指示灯不亮，无法通过工具盒进入dtu配置界面',
        value: '0'
      },
      {
        text: '使用工具盒无法进入dtu配置界面',
        value: '1'
      },
      {
        text: '其他问题',
        value: '2'
      }
    ]
  },
  '1000': {
    title: '查看dtu的sim卡是否已经正确插入卡槽',
    option: [
      {
        text: '是',
        value: '0'
      },
      {
        text: '否',
        value: '1'
      }
    ]
  },
  '1001': {
    title: '插入的sim卡是否是否符合dtu支持的网络，dtu支持的网络类型可以查看dtu的标签',
    option: [
      {
        text: '是',
        value: '0'
      },
      {
        text: '否',
        value: '1'
      }
    ]
  },
  '1002': {
    title: '查看dtu配置的ip地址，端口号以及连接方式是否与服务器匹配',
    option: [
      {
        text: '是',
        value: '0'
      },
      {
        text: '否',
        value: '1'
      }
    ]
  },
  '1003': {
    title: '使用工具盒登陆dtu配置，查看RTU选项，确认dtu配置的串口参数是否与下位机匹配（波特率、数据位、停止位、校验）',
    option: [
      {
        text: '是',
        value: '0'
      },
      {
        text: '否',
        value: '1'
      }
    ]
  },
  '1010': {
    title: 'DTU每天掉线的次数是否小于10次且在掉线后能快速恢复正常',
    option: [
      {
        text: '是',
        value: '0'
      },
      {
        text: '否',
        value: '1'
      }
    ]
  },
  '10010': {
    title: 'sim卡业务是否正常，可把卡插入手机或usb上网卡验证',
    option: [
      {
        text: '是',
        value: '0'
      },
      {
        text: '否',
        value: '1'
      }
    ]
  },
  '10020': {
    title: '服务端是否配置正常，能够正常访问与登陆，可用测试工具模拟dtu进行网络测试',
    option: [
      {
        text: '是',
        value: '0'
      },
      {
        text: '否',
        value: '1'
      }
    ]
  },
  '10030': {
    title: 'dtu的调试信息是否关闭，在dtu配置界面查看【常用-调试信息】，观察是否为off',
    option: [
      {
        text: '是',
        value: '0'
      },
      {
        text: '否',
        value: '1'
      }
    ]
  },
  '100100': {
    title: '请选择sim卡的业务类型，专网卡一般为集团客户经理处办理的，与业务联通但与互联网隔离的卡，一般营业厅办理的或可以上互联网的卡均为公网卡',
    option: [
      {
        text: '公网卡',
        value: '0'
      },
      {
        text: '专网卡',
        value: '1'
      }
    ]
  },
  '1001001': {
    title: '运营商是否提供了接入点、用户名、密码等信息并配置到了dtu中',
    option: [
      {
        text: '是',
        value: '0'
      },
      {
        text: '否',
        value: '1'
      }
    ]
  }
};

var solutions = {
  '12': {
    title: '如何远程管理DTU',
    detail: 'dtu可以通过3种方式实现远程管理： \n1.使用ddp协议进行远程管理： \n可以通过中心下发ddp协议的数据来实现远程管理（包括状态查询与参数配置） \n2.使用短信方式进行远程管理： \n在dtu参数中配置服务中心号码为需要远程配置dtu的手机号码（00001为允许所有手机进行配置），即可通过短信方式查询dtu的状态与进行参数配置 \n3.使用云管理平台进行远程管理： \n在dtu中配置相关的wmmp参数，并在我司平台上添加该dtu，则可以实现在平台上远程监控dtu的状态，进行信号强度、流量、在线率等统计，并可实现远程参数配置'
  },
  '110': {
    title: '调试时串口线如何连接',
    detail: '我司不同产品的串口线接法各有不同，请参照您购买的产品型号选择相应的接线方法： \nH7710，H7210： \n如果选择的232接口，使用我司提供的调试线，颜色与线序（从左至右依次为1-12）对应如下：黄色-2，橙色-3，黑色-10，电源负极-11，电源正极-12 \n如果选择的485接口，B-2，A-3，电源负极-11，电源正极-12 \nH7118： \n如果选择的232接口，我司提供了排线转db9和电源的调试线，可直接使用 \n如果选择的485接口，请参考我司说明书的接线定义进行接线 \n其余产品请参照使用说明书进行接线，如果有任何疑问，请选择人工服务，我司会安排专人及时为您解决问题'
  },
  '111': {
    title: '如何配置dtu',
    detail: '1.通过电脑与dtu相连并给dtu上电 \n2.打开dtu配置工具盒（如果没有请选择人工服务，联系我司技术支持为您提供），点击右上角的下拉菜单配置串口信息，需要与dtu匹配（新产品仅需要配置电脑串口号，其余保持默认即可） \n3.工具盒会自动连接dtu并登陆，这时可以对dtu进行常用参数配置 \n4.如果需要配置更多的参数，请点击右侧菜单中的管理员登陆，输入密码，一般为admin，很老的产品可能为1234或不用填写'
  },
  '112': {
    title: 'dtu需要配置的常用参数',
    detail: '1.DSC的IP地址或域名：必填，如果服务中心是固定ip，则填写ip地址，如果服务中心为域名，则填写域名 \n2.DSC的端口：必填，填写服务中心开放连接的端口 \n3.与DSC的连接方式：必填，填写中心支持的连接方式，如果中心为我司动态库开发或者亚控组态王、力控等支持我司协议的组态软件，则选择tcp/udp + ddp的方式，其余则选择tcp或udp的连接方式 \n4.RTU设置：必填，包含波特率，数据位，停止位，校验位等，填写匹配下位机的串口参数 \n5.调试信息：必填，与电脑连接调试时选择INFO，与下位机连接使用时选择OFF \n6.dtu身份识别码：当连接方式为udp/tcp + ddp时，必填，如果中心为组态软件时，必须保证与组态软件配置的号码匹配，如果连接方式为udp/tcp，则无需填写'
  },
  '113': {
    title: '中心的网络环境如何搭建',
    detail: '1.如果中心连接的点位大于100个，最好外网有固定的公网ip地址，可以向运营商申请或把中心搭建在有公网ip的云上（阿里云，腾讯云等） \n2.如果中心有动态的公网ip，则需要向域名服务商（花生壳等域名服务商）申请域名，dtu可以通过域名找到中心 \n3.由于中心的最外层为防火墙或者路由器，需要在相应的防火墙或路由器上做转发，使外网的端口能够映射到搭载中心软件的服务器上 \n4.如果中心没有公网ip，可以通过有nat穿透能力的服务商（比如花生壳），申请nat穿透，dtu配置nat穿透分配的公网域名和端口即可（不建议此方法，仅支持tcp且不能保证通信的稳定性） \n5.中心环境搭建好后，可以使用测试工具进行测试验证中心能够被外网访问'
  },
  '114': {
    title: '只在需要发送数据时才让dtu拨号，如何配置',
    detail: '1.通过管理工具进入dtu配置，登陆管理员 \n2.【运行-ip通道上线方式】，选择wake，【运行-ip通道唤醒方式】，根据需要触发上线的类型进行选择，建议使用默认 \n3.如果要使用手机远程唤醒dtu，则需要配置【通道-通道服务号码】 \n4.【运行-下线时间】，配置上线后多久下线的时间。【运行-下线检测方式】，配置下线时的检测方式 \n5.完成以上配置后则可以实现dtu按照需要触发进行上线，并经过指定的时间进行下线'
  },
  '115': {
    title: '中心软件只支持串口通信如何配置',
    detail: '由于dtu是把串口数据转换为tcp/ip数据在网络中传输，如果要在中心接收数据，需要软件能够支持tcp/ip的数据传输方式。有些串口软件不支持该方式，则需要中心部署网口转串口的软件进行二次转发，把串口数据给到接收软件实现数据的远程通信： \n1.使用宏电VCOM软件进行串口转发，需要安装虚拟串口软件虚拟出串口进行通信（软件可联系宏电技术支持工程师获取） \n2.dtu需要配置通信方式为UDP/ TCP + DDP方式，同时需要配置dtu身份识别码，需要与VCOM软件中配置的dtu号码匹配 \n3.具体配置建议联系宏电工程师协助配置'
  },
  '116': {
    title: '要实现两个dtu之间点对点通信如何配置',
    detail: '由于在网络中传输，一般都需要有公网ip才能进行传输，如果要实现两个点之间的通信，可以采用如下3个方式： \n1.短信方式，两个dtu互相配置为短信方式通信，设置为对方号码为通道服务号码，该方式适用于对延迟要求很低，通信频率很低的场所 \n2.中转方式，在一个有固定ip的地方建立中转服务器，两个dtu均连上该服务器，通过该服务器实现数据的中转 \n3.专网方式，找运营商集团客服经理开通专网，要求sim卡拥有固定ip，且两个卡能够互相通信。sim卡开好后一个dtu配置为tcp server方式，一个dtu配置为tcp client方式，互相指定对方ip，端口，即可实现点对点通信'
  },
  '117': {
    title: '咨询其它问题',
    detail: '请选择人工服务，我司会安排专人及时为您解决问题'
  },
  '1011': {
    title: '信号强度小于20',
    detail: '信号强度较低，可能会导致偶尔掉线的情况： \n1.请确保天线接好并放置在无金属遮罩的地方 \n2.可以采用更换定向天线提高信号强度 \n3.可选择信号更好的sim卡运营商 \n如果仍不能解决您的问题，请选择人工服务，我司会安排专人及时为您解决问题'
  },
  '1020': {
    title: '上电后灯不亮',
    detail: '首先确保电源供电正常，如果电源供电正常，请选择人工服务，我司会安排专人及时为您解决问题'
  },
  '1021': {
    title: '使用工具盒无法进入dtu配置界面',
    detail: '打开工具盒后，当工具盒正显示正在连接时，观察dtu灯闪的情况，如果data灯没有闪烁，请检查接线是否正确。 \n如果接线正常，请选择人工服务，我司会安排专人及时为您解决问题'
  },
  '1022': {
    title: '其他问题',
    detail: '请选择人工服务，我司会安排专人及时为您解决问题'
  },
  '10000': {
    title: 'sim卡正确插入卡槽',
    detail: '请尝试更换一张sim卡进行验证，如果您没有额外的sim卡或者更换后仍有问题，请选择人工服务，我司会安排专人及时为您解决问题'
  },
  '10001': {
    title: 'sim卡未正确插入卡槽',
    detail: '请尝试正确的把sim卡插入卡槽，如果卡槽损坏，请选择人工服务，我司会安排专人及时为您解决问题'
  },
  '10011': {
    title: '插入的sim卡不符合dtu支持的网络',
    detail: '请更换匹配dtu网络的sim卡，如果您的卡不能更换或者还有疑问，请选择人工服务，我司会安排专人及时为您解决问题'
  },
  '10021': {
    title: 'dtu参数配置异常',
    detail: '请重新填写正确的配置，如果仍有其他问题，请选择人工服务，我司会安排专人及时为您解决问题'
  },
  '10031': {
    title: 'dtu波特率与下位机不匹配',
    detail: '请重新配置dtu或者下位机的串口参数，确保两者匹配'
  },
  '10100': {
    title: '每天掉线次数小于10次且掉线后能快速恢复',
    detail: '该现象为正常现象，为了解决运营商基站资源占用问题，运营商会每隔一段时间踢掉用户，避免建立连接但数据收发量很小的用户占用基站资源，我司dtu拥有自动重连性能，所以踢掉后能够迅速再次上线'
  },
  '10101': {
    title: '每天掉线次数大于10次且掉线后不能快速恢复',
    detail: '您可以更换其他运营商的sim卡排查是否为该运营商在当地网络问题，如果没有额外sim卡或者仍存在此问题，请选择人工服务，我司会安排专人及时为您解决问题'
  },
  '100101': {
    title: 'sim卡业务异常',
    detail: '请和运营商协商解决sim卡业务异常的问题'
  },
  '100200': {
    title: '中心网络正常',
    detail: '请选择人工服务，我司会安排专人及时为您解决问题'
  },
  '100201': {
    title: '中心网络异常',
    detail: '请解决中心网络的问题，使中心提供的服务能够被外网访问'
  },
  '1001000': {
    title: '公网卡',
    detail: '在dtu输出的调试信息中查看dtu信号强度是否大于15，如果小于15请确认天线正常接好并放置在无金属遮罩的地方。也可更换其他运营商sim卡来确认是否为当地运营商网络问题。如果仍有其他问题，请选择人工服务，我司会安排专人及时为您解决问题'
  },
  '10010010': {
    title: '运营商提供了相应的接入点与用户名密码并正确的配置到了dtu中',
    detail: '请选择人工服务，我司会安排专人及时为您解决问题'
  },
  '10010011': {
    title: '运营商未提供相应的接入点与用户名密码或未配置到dtu中',
    detail: '请协调运营商提供相应的接入点、用户名、密码等信息，并通过dtu工具盒把参数配置到dtu中'
  }
}

module.exports = {
  problems: problems,
  solutions: solutions
}