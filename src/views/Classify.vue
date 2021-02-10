<template>
  <div class="classify-wrapper">
      <!-- 搜索框 -->
    <router-link class="search-btn" to="/search" tag="div">
      <van-icon name="search" />
      <div>苹果特价1元1斤</div>
    </router-link>
    <!-- 一级导航 -->
    <one-tab></one-tab>
    <template>
      <!-- 左侧导航 -->
      <side-bar></side-bar>
      <!-- 右侧商品 -->
      <goods-list></goods-list>
    </template>
  </div>
</template>

<script>
import oneTab from '../components/OneTab.vue'
import sideBar from '../components/sideBar.vue'
import goodsList from '../components/GoodsList.vue'
export default {
  components: {
      oneTab,
      sideBar,
      goodsList
  }
};
</script>

<style lang="less" scoped>
.classify-wrapper {
  width: 375px;
  .search-btn{
      width: 355px;
      height: 33px;
      line-height: 33px;
      background-color: #eee;
      margin: 11px auto 0;
      border-radius: 10px;
      font-size: 14px;
      text-align: center;
      color: #a1a1a1;
      > * {
          display: inline-block;
          vertical-align: middle;
      }
  }
}
</style>


