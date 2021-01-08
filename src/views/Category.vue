<template>
  <div class="category">
    <van-nav-bar title="全部分类" />
    <!-- 分类标题 -->
    <div class="cate" v-for="(v1, title) in cate" :key="v1.index">
      <div class="cate_title">
        {{
          title == "male"
            ? "男频"
            : title == "female"
            ? "女频"
            : title == "picture"
            ? "漫画"
            : title == "press"
            ? "出版"
            : ""
        }}
      </div>
      <van-grid :column-num="2" :border="false" :center="false">
        <van-grid-item v-for="v2 in v1" :key="v2.index" :text="v2.name" />
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 分类列表
      cate: [],
    };
  },
  methods: {
    // 随机字体颜色
    /* randomRgb() {
      let R = Math.floor(Math.random() * 255);
      let G = Math.floor(Math.random() * 255);
      let B = Math.floor(Math.random() * 255);
      return {
        color: "rgb(" + R + "," + G + "," + B + ")",
      };
    }, */
  },

  mounted() {
    // 获取分类列表
    this.axios.get("/cats/lv2/statistics").then((res) => {
      this.cate = res.data;
      console.log(this.cate);
    });
  },
};
</script>

<style scoped>
.cate_title {
  padding: 5px 10px;
  font-size: 20px;
}
.cate >>> .van-grid-item__text {
  color: #d2c4a5;
  font-size: 15px;
  line-height: 0;
}


</style>