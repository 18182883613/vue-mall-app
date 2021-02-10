<template>
  <div class="sidebar-wrapper" ref="side">
      <div
      v-for="(item,i) in sideList"
      :key="item.title"
      :class="{active: index === i}"
      @touchend="scrollTo(i, $event)"
      @touchstart="move = false"
      @touchmove="move = true"
      >{{ item.title }}</div>
  </div>
</template>

<script>
import tool from '../util/tool.js'
export default {
    data () {
        return {
            index: 0,
            sideList: [
                {
                    title: '全部'
                },
                {
                    title: '苹果'
                },
                {
                    title: '香蕉'
                },
                {
                    title: '榴莲'
                },
                {
                    title: '柚子'
                },
                {
                    title: '西瓜'
                },
                {
                    title: '车厘子'
                },
                {
                    title: '百香果'
                },
                {
                    title: '牛油果'
                },
                {
                    title: '奇异果'
                },
                {
                    title: '甜瓜蜜瓜'
                },
                {
                    title: '草莓'
                },
                {
                    title: '蓝莓'
                }
            ]
        }
    },
    methods: {
        scrollTo (i, e) {
            if (this.move) {
                return
            }
            this.index = i
            const { side } = this.$refs
            const sonTop = e.target.getBoundingClientRect().top
            const sonHeight = e.target.offsetHeight
            const pTop = side.getBoundingClientRect().top
            const pHeight = side.offsetHeight
            tool.moveTo(side.scrollTop, sonTop + sonHeight / 2 - pTop - pHeight / 2, side, 'scrollTop')
        }
    }
};
</script>

<style lang="less">
.sidebar-wrapper{
    position: fixed;
    left: 0;
    width: 79px;
    top: 135px;
    bottom: 50px;
    overflow: auto;
    background-color: #f8f8f8;
    div{
        width: 79px;
        text-align: center;
        height: 40px;
        line-height: 40px;
        position: relative;
    }
    .active{
        font-weight: bold;
        color: #d13193;
    }
    .active::before{
        position: absolute;
        width: 6px;
        height: 18px;
        background-color: #ff1a90;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        content: '';
    }
}
.sidebar-wrapper::-webkit-scrollbar{
    width: 0;
    background-color: none;
}
</style>
