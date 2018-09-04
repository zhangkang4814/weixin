// pages/index/products.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cate:[],
    nowId:0,

    products: []

  },

  loadCates:function(){
    return[
      {
        cateid:1,
        catename:'测试类1',
        num:0
      },
      {
        cateid:2,
        catename:'测试类2',
        num:0
      }
    ]
  },

  loadProducts:function(){
    return[
      { 
        productid:1,
        picurl:'./images/111.jpg',
        productname: '黑色T恤',
        cateid: 1,
        oldprice:299,
        price: 122,
        num:0
      },
      {
        productid: 2,
        picurl: './images/222.jpg',        
        productname: '蓝色T恤',
        cateid: 2,
        oldprice: 299,
        price: 122,
        num: 0
      },
      
    ]
  },
  /**
  *单机分类样式字体变红
  */
    onClickCate:function(e){
      var id = e.currentTarget.dataset.id;
      // console.log(e);
      this.setData({
        nowId:id,
      });
    },
  /**
   * 数量增加
   */
    onProNubInc:function(e){
      this.onProNubCh(e,1);
    },
  /**
   * 数量减少
   */
    onProNubDec:function(e){
      this.onProNubCh(e,-1);
    },

    onProNubCh:function(e,step){
      var id = e.currentTarget.dataset.id;
      var list = this.data.products;
      var item = list[id];
      if (item.num<1 && step<0){
        return ;
      }
      item.num+=step;

      var cate = this.data.cate;
      // console.log(cate);
      var cateitem = cate[this.data.nowId];
      cateitem.num+=step;

      this.setData({
        products: list,
        cate:cate
      });
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var cate = this.loadCates();
    var product = this.loadProducts();
    this.setData({
      cate:cate,
      products:product
    });
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