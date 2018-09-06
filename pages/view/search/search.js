// pages/view/search/search.js
const app = getApp();
const glob = app.globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    str:''
  },

  onSearch:function(){
    var str = this.data.str;
    var arr = this.data.list;
    var preg = /[^\s$]+/;
    if(preg.test(str)){
      this.updateStr(str);
      arr.push(str);
      this.setData({
        list: arr,
        str: ''
      });
    }else{
      this.setData({
        str: ''
      });
    } 
  },

  getValue:function(e){
    this.data.str = e.detail.value;
  },

  iconClose:function(e){
    var id=e.currentTarget.dataset.id;
    var arr=this.data.list;
    var str=arr[id];
    arr.splice(id,1);
    this.delSeStr(str);
    this.setData({
      list:arr
    });
  },

  updateStr:function(str){
    wx.showLoading({
      title: '加载中',
    });
    var sid = glob.glosid;
    wx.request({
      url: glob.host+'updatestr.php',
      // header:{
      //   "Set-Cookie":"PHPSESSID="+sid,
      // },
      data:{
        str:str,
        sid:sid
      },
      complete: function () {
        wx.hideLoading();
      }
    })
  },

  loadStr:function(callback){
    wx.showLoading({
      title: '加载中',
    });
    var _this = this;
    var sid = glob.glosid;
    console.log(sid);
    wx.request({
      url: glob.host+'loadstr.php',
      // header: {
      //   "Set-Cookie": "PHPSESSID=" + sid
      // },
      data:{
        sid:sid
      },
      success:function(res){
        if(callback){
          callback(res);
        }
      },
      complete:function(){
        wx.hideLoading();
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    this.loadStr(function(res){
      if(res.data){
        // var str = res.data;
        // var list = _this.data.list;
        // list.push(str);
        var list = res.data;
        _this.setData({
          list:list
        });
      }
      
    });
  },

  delSeStr:function(str){
    var sid = glob.glosid;
    wx.request({
      url: glob.host+'delsession.php',
      // header: {
      //   "Set-Cookie": "PHPSESSID=" + sid
      // },
      data:{
        sid:sid,
        str:str
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