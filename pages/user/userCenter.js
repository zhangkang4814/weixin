// pages/user/userCenter.js
const app = getApp();
const glob = app.globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userinfo:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userinfo: glob.userinfo
    });
    // console.log(this.data.userinfo);
    var _this = this;
    wx.getUserInfo({
      withCredentials: true,
      success: function (res) {
        
      }
    })
  },


  bindGetUserInfo: function (e) {
    var user = glob;
    user.userinfo.face = e.detail.userInfo.avatarUrl;
    user.userinfo.sex = e.detail.userInfo.gender;
    user.userinfo.nickname = e.detail.userInfo.nickName;
    glob.userinfo = user.userinfo;
    this.setData({
      userinfo:user.userinfo
    })
  },

  getPhoneNumber: function (e) {
    var _this = this;
    var user = glob;
    wx.request({
      url: glob.host+'demo.php',
      data:{
        iv: e.detail.iv,
        encryptedData: e.detail.encryptedData,
        sessionKey: glob.sessionkey,
        userid: glob.userinfo.userid
      },
      success:function(res){
        // console.log(res.data);
        user.userinfo.phone = res.data;
        console.log(user);
        glob.userinfo = user.userinfo;
        _this.saveUser(glob.userinfo);
        console.log(glob.userinfo);
      }
    }) 
  },

  saveUser:function(userinfo){
    wx.request({
      url: glob.host+'saveuser.php',
      data:{
        user:glob.userinfo
      },
      success:function(res){
        // console.log(res);
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})