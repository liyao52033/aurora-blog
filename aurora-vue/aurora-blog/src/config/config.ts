export default {
  captcha: {
    TENCENT_CAPTCHA: '198133390'
  },
  /* qqLogin: {
    QQ_APP_ID: '101999415',
    QQ_REDIRECT_URI: 'https://43.142.13.221/oauth/login/qq'
  }, */
  routes: [
    {
      name: 'Home',
      path: '/',
      i18n: {
        cn: '首页',
        // en: 'Home'
      },
      children: []
    },
    {
      name: 'Message',
      path: '/message',
      i18n: {
        cn: '留言',
        // en: 'Message'
      },
      children: []
    },
    {
      name: 'Friends',
      path: '/friends',
      i18n: {
        cn: '友链',
        // en: 'Friends'
      },
      children: []
    }
  ]
}
