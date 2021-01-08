<template>
  <div class="my">
    <van-nav-bar title="购物车" />
    <!-- 用户头像 -->
    <div class="user">
      <div class="user_avator">
        <van-image
          round
          fit="cover"
          width="100"
          height="100"
          lazy-load
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        >
          <template v-slot:loading>
            <van-loading type="spinner" size="20" /> </template
        ></van-image>
        <div class="user_nickname">用户名</div>
      </div>
    </div>
    <!-- 订单信息 -->
    <div class="user_order">
      <van-cell value="书店订单" />
      <van-grid>
        <van-grid-item icon="todo-list-o" text="待付款" />
        <van-grid-item icon="logistics" text="待发货" />
        <van-grid-item icon="sign" text="待收货" />
        <van-grid-item icon="records" text="待评价" />
      </van-grid>
    </div>
    <div class="ad">
      <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="" />
    </div>
    <div class="user_sevice">
      <van-cell value="我的服务" />
      <van-grid>
        <van-grid-item icon="location-o" text="收货地址" />
        <van-grid-item icon="description" text="意见反馈" />
        <van-grid-item icon="service-o" text="客服电话" />
        <van-grid-item icon="warning-o" text="关于我们" />
      </van-grid>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Lazyload } from "vant";

Vue.use(Lazyload);
export default {};
</script>
<style scoped>
.user {
  width: 100%;
  height: 200px;
  background-color: #aeb0c9;
  display: flex;
  justify-content: center;
  align-items: center;
}
.user_avator {
  width: 100px;
  height: 100px;
}
.user_avator img {
  width: 100%;
  height: 100%;
}
.user_nickname {
  text-align: center;
}
.van-cell {
  color: #323233;
  font-size: 14px;
  font-weight: bold;
}
.ad {
  width: 90%;
  height: 100px;
  padding: 5px 5%;
}
.ad img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
</style>