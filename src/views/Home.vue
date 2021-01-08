<template>
  <div class="home">
    <van-nav-bar title="首页" />
    <!-- 顶部搜索框 -->
    <div class="search">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        @search="onSearch"
      />
    </div>
    <!-- 轮播图-->
    <div class="recommend">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" alt="图片未显示" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 推荐书单  滚动 -->
    <div class="recommendbook">
      <div class="recommendtitle">
        <van-cell
          title="推荐"
          is-link
          to="booklist"
          value="全部书单"
          size="large"
        />
      </div>
      <div class="slide-box">
        <div class="slide-item" v-for="item of books" :key="item.index">
          <div class="item_cover">
            <img v-lazy="item.cover" alt="" />
          </div>
          <div class="item_title">
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
    <!-- 分类推荐 -->
    <!-- 中国文学类 -->
    <div class="category">
      <div class="title">
        <van-cell
          title="中国文学"
          is-link
          to="booklist"
          value="全部"
          size="large"
        />
      </div>
      <div>
        <van-card
          price="2.00"
          desc="作者"
          title="商品标题"
          thumb="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2524669519,434769883&fm=26&gp=0.jpg"
        />
        <van-card
          price="2.00"
          desc="作者"
          title="商品标题"
          thumb="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1746986459,4222941432&fm=26&gp=0.jpg"
        />
        <van-card
          price="2.00"
          desc="作者"
          title="商品标题"
          thumb="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2524669519,434769883&fm=26&gp=0.jpg"
        />
      </div>
    </div>
    <div class="category">
      <div class="title">
        <van-cell
          title="儿童童话"
          is-link
          to="booklist"
          value="全部"
          size="large"
        />
      </div>
      <div>
        <van-card
          price="2.00"
          desc="作者"
          title="商品标题"
          thumb="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2524669519,434769883&fm=26&gp=0.jpg"
        />
        <van-card
          price="2.00"
          desc="作者"
          title="商品标题"
          thumb="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1746986459,4222941432&fm=26&gp=0.jpg"
        />
        <van-card
          price="2.00"
          desc="作者"
          title="商品标题"
          thumb="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2524669519,434769883&fm=26&gp=0.jpg"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      // 轮播图
      images: [
        "https://static.fotor.com.cn/assets/projects/pages/82fcc2b0-1ad5-11e9-86ec-3f8b13e37713_2f176aa2-278f-4965-afd6-fdcd4624445f_thumb.jpg",
        "https://static.fotor.com.cn/assets/projects/pages/d8a4a9a0-d8cf-11e8-b656-6f3b208ef6d2_b3c2cd1f-59ca-4368-a4e8-5c6127803120_thumb.jpg",
        "https://static.fotor.com.cn/assets/projects/pages/73949c70-7318-11ea-9ef0-731676e14a4b_757f7658-00d7-4adc-9cd3-b6f8e29430ba_thumb.jpg",
        "https://static.fotor.com.cn/assets/projects/pages/49c31be0-e3fb-11e8-8dd2-87adda892b1c_f806cf26-d5ff-4109-992a-9278e893a200_thumb.jpg",
      ],
      // 推荐书单
      books: [],
    };
  },
  methods: {
    onSearch(val) {
      // Toast(val);
      console.log(val);
    },
  },
  mounted() {
    // 向服务器发送请求,以获取数据
    // 发送HTTP请求
    // 推荐书单
    this.axios.get("/book-list").then((res) => {
      this.books = res.data.bookLists;
      
      console.log(this.books);
    });

    
  },
};
</script>

<style scoped>
/* 顶部搜索框 */
/* 轮播图 */
.van-swipe {
  position: relative;
  overflow: hidden;
}
.van-swipe .van-swipe-item {
  text-align: center;
  height: 200px;
}
.van-swipe img {
  /* display: block; */
  box-sizing: border-box;
  width: 100%;
  height: 200px;
}
.van-swipe >>> .van-swipe__indicator--active {
  background-color: #19c3aa;
}
/* 推荐书单 */
.van-cell--large .van-cell__title {
  font-size: 18px;
  font-weight: 700;
}
.slide-box {
  /* margin-top: 200px; */
  display: -webkit-box;
  overflow-x: scroll;
  /* -webkit-overflow-scrolling: touch; */
}
/*去掉滚动条*/
.slide-box::-webkit-scrollbar {
  width: 0;
  height: 0;
  display: none;
}
.slide-item {
  width: 100px;
  height: 150px;
  margin: 0 5px;
  position: relative;
}
.item_cover,
.item_cover img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.item_title {
  font-size: 14px;
  color: #333;
  position: absolute;
  top: 10px;
}
.van-card {
  color: #333;
  font-size: 14px;
  background-color: #fff;
}
.van-card__thumb {
  width: 90px;
  height: 100px;
  margin-right: 10px;
}
.van-card__title {
  line-height: 25px;
  color: #333;
}
.van-card__price {
  color: #f28181;
  font-weight: 400;
  font-size: 18px;
}
</style>