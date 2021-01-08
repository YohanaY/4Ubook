<template>
  <div class="cart">
    <van-nav-bar title="购物车" />
    <div class="cart-area">
      <!-- 购物车为空时 -->
      <!-- 文字较长时，通过禁用 scrollable 属性关闭滚动播放 -->
      <!-- <div class="cart_empty" v-else>
      <van-notice-bar
        left-icon="volume-o"
        :scrollable="false"
        text="你的购物车是空的"
      />
      <div class="cart-0">
        <img src="../assets/icon/cart-0.png" alt="" />
      </div>
    </div> -->
      <!-- 购物车不为空 -->
      <!-- 商品列表 -->
      <ul>
        <li>
          <div class="cart_list">
            <van-checkbox v-model="checked"></van-checkbox>
            <div class="cart_desc">
              <div class="book_img">
                <img
                  src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2524669519,434769883&fm=26&gp=0.jpg"
                  alt=""
                />
              </div>
              <div class="book_detail">
                <div class="book_title">书名</div>
                <div class="book_author">作者</div>
                <div class="book_price">￥19.00</div>
              </div>
              <div class="book_num">
                <van-stepper v-model="num" async-change />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 提交订单 -->
    <div class="cart_forter">
      <van-submit-bar :price="30500" button-text="结算" @submit="onSubmit">
        <van-checkbox v-model="allchecked" @click="checkAll">全选</van-checkbox>
        <template #tip> 你的收货地址不支持同城送, </template>
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allchecked: false,
    };
  },
  // 计算属性
  computed:{
    // ...mapGetters("")
  },
  methods: {
    // 全选
    checkAll() {
      this.refs.checkboxGroup.toggleAll(true);
    },
    // 反选
    toggleAll() {
      this.refs.checkboxGroup.toggleAll();
    },
    // 结算
    onSubmit() {},
  },
  mounted() {
    // 获取购物车数据
    this.axios.get('/cart').then(res=>{
      console.log(res);
    })
  },
};
</script>
<style scoped>
/* 空购物车 */
.cart-0 {
  width: 100%;
  display: flex;
}
.cart-0 img {
  width: 30%;
  height: 30%;
  margin: 100px auto;
}
/* 购物车不为空 */
.cart_list {
  width: 100%;
  height: 100px;
  display: flex;
  float: left;
  /* background-color: wheat; */
}
.cart_desc {
  display: flex;
  float: left;
}
.book_detail {
  position: relative;
}
.book_img {
  width: 70px;
  margin: 0 10px;
  padding: 5px;
}
.book_img img {
  width: 100%;
  height: 100%;
}
.book_title {
  font-size: 15px;
  margin: 5px;
}
.book_author {
  font-size: 12px;
  color: darkgray;
  margin: 5px;
}
.book_price {
  font-size: 14px;
  color: red;
  position: relative;
  left: 5px;
  bottom: -20px;
}
.van-stepper {
  position: relative;
  left: 90px;
  top: 65px;
}
.cart-area >>> .van-checkbox__icon {
  font-size: 20px;
  margin-left: 10px;
}
.cart-area >>> .van-checkbox__label {
  width: 100%;
}
.van-card {
  background-color: #fff;
}
.van-button--round {
  border-radius: 5px;
}
.van-submit-bar {
  margin-bottom: 50px;
}
.van-submit-bar__tip {
  color: #13c3a8;
  background-color: #e8f9f6;
  text-align: center;
}
.van-submit-bar__button--danger {
  background: -webkit-linear-gradient(left, #13c3a8, #13c3a8);
  background: linear-gradient(to right, #13c3a8, #13c3a8);
}
</style>