// app.js
App({
  onLaunch: function () {
    this.login();
//     // 展示本地存储能力
//     var logs = wx.getStorageSync('logs') || []
//     logs.unshift(Date.now())
//     wx.setStorageSync('logs', logs)

//     // 登录
//     wx.login({
//       success: res => {
//         // 发送 res.code 到后台换取 openId, sessionKey, unionId
//       }
//     })
//     // 获取用户信息
//     wx.getSetting({
//       success: res => {
//         if (res.authSetting['scope.userInfo']) {
//           // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
//           wx.getUserInfo({
//             success: res => {
//               // 可以将 res 发送给后台解码出 unionId
//               this.globalData.userInfo = res.userInfo

//               // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//               // 所以此处加入 callback 以防止这种情况
//               if (this.userInfoReadyCallback) {
//                 this.userInfoReadyCallback(res)
//               }
//             }
//           })
//         }
//       }
//     })
  },
  request: function(code,callback){
    wx.request({
    url:this.globalData.host+'session.php',
    data:{
      code:code
    },
    success: function(res) {
      if(callback){
        callback(res);
      }
    },
    complete: function(res) {},
   });
  },

  login:function(){
    var _this = this;
    
    wx.login({
      success:function(res){
        if(res.code){
          _this.request(res.code,function (res) {
            _this.globalData.glosid = res.data.sid;
            _this.globalData.openid = res.data.user[0].openid;
          });
        }
      }
    })


    
  },

  globalData: {
    host:'http://localhost/wechat/',
    glosid:null,
    userinfo:null,
    openid:null
  }
})