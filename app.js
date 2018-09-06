// app.js
App({
  onLaunch: function () {
    this.login();
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
            console.log(res);
            _this.globalData.glosid = res.data.session_id;
            _this.globalData.userinfo = res.data.user;
            _this.globalData.sessionkey = res.data.sessionKey;
            console.log(_this.globalData);
          });
        }
      }
    })


    
  },

  globalData: {
    host:'http://localhost/wechat/',
    glosid:null,
    userinfo:null,
    sessionkey:null
  }
})