<template>
  <div class="search-wrapper">
      <div class="search-head">
          <van-icon name="arrow-left" class="arr-left" @click="handle()" />
          <van-search
          class="search-content"
          v-model="value"
          show-action
          :placeholder="place"
          >
          </van-search>
      </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            place: '酒',
            value: this.place
        }
    },
    methods: {
        handle () {
            if (this.$router == '/home/classify') {
                return;
            }
            this.$router.push('/home/classify')
        }
    }
}
</script>

<style lang="less" scoped>
.search-wrapper{
    width: 100%;
    height: 100vh;
    z-index: 10;
    background-color: #fff;
    .search-head {
        width: 345px;
        background-color: #fff;
        margin: 0 auto;
        display: flex;
        align-items: center;
        .arr-left{
            font-size: 22px;
        }
        .search-content{
            flex: 1;
        }
    }
}
</style>
