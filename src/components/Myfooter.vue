<template>
  <!-- 底部导航 -->
  <div class="myfooter">
    <van-tabbar route>
      <van-tabbar-item replace to="/" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/category" icon="apps-o"
        >分类</van-tabbar-item
      >
      <van-tabbar-item replace to="/cart" icon="shopping-cart-o"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item replace to="/my" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style>
.myfooter {
  margin-bottom: 50px;
}
/* 底部导航 */
.van-tabbar-item--active {
  color: #19c3aa;
}
</style>