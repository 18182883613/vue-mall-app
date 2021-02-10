<template>
  <div class="shopping-wrapper">
    <van-icon name="arrow-left" class="arr-left" @click="handle()" />
    <div class="shoppingCar">购物车</div>
  </div>
</template>

<script>
export default {
  methods: {
    handle() {
      if (this.$router == "/home/classify") {
        return;
      }
      this.$router.push("/home/classify");
    },
  },
};
</script>

<style lang="less" scoped>
.shopping-wrapper{
  width: 100%;
  height: 100vh;
  background-color: #fff;
  .arr-left{
    font-size: 22px;
    color: #aaa;
    position: absolute;
    left: 0.46rem;
    top: 0.58rem;
  }
  .shoppingCar{
    font-size: 18px;
    color: rgb(138, 135, 135);
    position: absolute;
    left: 4rem;
    top: 0.58rem;
  }
}
</style>
