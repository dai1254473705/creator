/**
 * 推荐网站
 */
import { IMenu } from '../../type.d';

const menu: IMenu[] = [
  {
    id: '1',
    title: '在线文章编辑器',
    children: [
      {
        id: '1-1',
        title: '96编辑器',
        favicon: 'https://bj.96weixin.com/favicon.ico',
        isWebView: true,
        bgColor: 'bg-gradual-red',
        url: 'https://bj.96weixin.com/',
      },
      {
        id: '1-2',
        title: '运营日历',
        favicon: 'https://bj.96weixin.com/favicon.ico',
        isWebView: true,
        bgColor: 'bg-gradual-orange',
        url: 'https://bj.96weixin.com/calendar',
      },
      {
        id: '1-3',
        title: 'markdown',
        favicon: 'https://editor.mdnice.com/favicon.svg',
        isWebView: false,
        bgColor: 'bg-gradual-green',
        url: 'https://editor.mdnice.com/',
      },
      {
        id: '1-4',
        title: '秀米',
        favicon: 'https://stc.xiumius.com/images/316e42.xiumi_logo_40.png',
        isWebView: false,
        bgColor: 'bg-gradual-purple',
        url: 'https://xiumi.us/#/',
      },
      {
        id: '1-5',
        title: '壹伴',
        favicon: 'https://assets.yiban.io/assets/imgs/favicon-new-8615028296.ico',
        isWebView: false,
        bgColor: 'bg-gradual-pink',
        url: 'https://yiban.io/',
      },
      {
        id: '1-6',
        title: '135编辑器',
        favicon: 'https://www.135editor.com/favicon.ico',
        isWebView: false,
        bgColor: 'bg-gradual-blue',
        url: 'https://www.135editor.com/',
      },
    ],
  },
  {
    id: '2',
    title: '在线文档',
    active: false,
    children: [
      {
        id: '2-1',
        title: '腾讯文档',
        favicon: 'https://docs.idqqimg.com/tim/docs/desktop/favicon.ico',
        isWebView: true,
        bgColor: 'bg-gradual-blue',
        url: 'https://docs.qq.com/desktop/',
      },
    ],
  },
  {
    id: '3',
    title: '前端学习',
    active: false,
    children: [
      {
        id: '3-1',
        title: 'github',
        favicon: 'https://github.githubassets.com/favicons/favicon.svg',
        isWebView: true,
        bgColor: 'bg-gradual-pink',
        url: 'https://github.com/dai1254473705/',
      },
      {
        id: '3-2',
        title: '知乎',
        favicon: 'https://static.zhihu.com/heifetz/favicon.ico',
        isWebView: true,
        bgColor: 'bg-gradual-purple',
        url: 'https://www.zhihu.com/',
      },
    ],
  },
  {
    id: '4',
    title: '公众号',
    active: false,
    children: [
      {
        id: '4-1',
        title: '头像',
        favicon: 'http://wx.qlogo.cn/mmhead/Q3auHgzwzM7ypQtTIeA2YoeSfHPnHzM0x2eUJQClrv01BPpS7iatj1A/0',
        isWebView: true,
        bgColor: 'bg-gradual-green',
        url: 'http://mp.weixin.qq.com/mp/homepage?__biz=MzUxNjA4MTcyOA==&hid=4&sn=f00f1715e74a4266458b425a565b9ce2',
      },
    ],
  },
  {
    id: '5',
    title: '音频工具',
    active: false,
    children: [
      {
        id: '5-1',
        title: '爱给网',
        favicon: 'https://cdn-sqn.aigei.com/assets/site/img/icon/favicon.ico',
        isWebView: true,
        bgColor: 'bg-gradual-orange',
        url: 'https://www.aigei.com/',
      },
      {
        id: '5-2',
        title: '淘声网',
        favicon: 'https://www.tosound.com/favicon.ico',
        isWebView: true,
        bgColor: 'bg-gradual-red',
        url: 'https://www.tosound.com/',
      },
    ],
  },
  {
    id: '6',
    title: '数据分析',
    active: false,
    children: [
      {
        id: '6-1',
        title: '卡思数据',
        favicon: 'https://www.caasdata.com/favicon.ico?t=4.10.22',
        isWebView: true,
        bgColor: 'bg-gradual-orange',
        url: 'https://www.caasdata.com/',
      },
      {
        id: '6-2',
        title: '好搜指数',
        favicon: 'https://s.ssl.qhimg.com/static/121a1737750aa53d.ico',
        isWebView: true,
        bgColor: 'bg-gradual-green',
        url: 'https://trends.so.com/?src=index.haosou.com',
      },
      {
        id: '6-3',
        title: '飞瓜数据',
        favicon: 'https://dy.feigua.cn/Content/images/favicon.ico',
        isWebView: true,
        bgColor: 'bg-gradual-purple',
        url: 'https://dy.feigua.cn/',
      }
    ]
  },
  {
    id: '7',
    title: '文案参考',
    active: false,
    children: [
      {
        id: '7-1',
        title: '数英网',
        favicon: 'https://www.digitaling.com/file/images/favicon.ico',
        isWebView: true,
        bgColor: 'bg-gradual-pink',
        url: 'https://www.digitaling.com/articles/',
      },
      {
        id: '7-2',
        title: '广告门',
        favicon: 'https://www.adquan.com/favicon.ico',
        isWebView: true,
        bgColor: 'bg-gradual-blue',
        url: 'https://www.adquan.com/',
      },
      {
        id: '7-3',
        title: '文案狗',
        favicon: 'http://www.wenangou.com/favicon.ico',
        isWebView: true,
        bgColor: 'bg-gradual-purple',
        url: 'http://www.wenangou.com/',
      },
      {
        id: '7-4',
        title: '梅花网',
        favicon: 'https://www.meihua.info/static/images/icon/meihua.ico',
        isWebView: true,
        bgColor: 'bg-gradual-green',
        url: 'https://www.meihua.info/',
      }
    ]
  }
];
export default menu;
