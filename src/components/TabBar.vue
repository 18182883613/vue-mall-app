<template>
  <van-tabbar route fixed>
    <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
    <van-tabbar-item icon="apps-o" to="/home/classify">分类</van-tabbar-item>
    <van-tabbar-item icon="cart-o" to="/home/shopping" :badge="number" id="shop-car"
      >购物车</van-tabbar-item
    >
    <van-tabbar-item icon="user-circle-o" to="/my">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data () {
    return {
      number: 0
    }
  }
};
</script>

<style>
</style>
