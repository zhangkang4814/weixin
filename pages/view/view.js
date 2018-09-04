// pages/view/view.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:{
      img: ['1.png','新品推荐','2.png','行李箱'],
      img2: ['3.png','开店礼包','4.png','男女包'],
      img3: ['5.png','一起拼团', '6.png','男女鞋'],
      img4: ['7.png','限时秒杀', '8.png','皮带系'],
      img5: ['9.png','抽奖福利','10.png','袜子区'],
      
      }
  },
  onClickSearch:function(){
    var url ='/pages/view/search/search';
    wx.navigateTo({
      url:url
    });
  },
  onClickNav:function(){
    var url = '/pages/products/product';
    wx.navigateTo({
      url:url
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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