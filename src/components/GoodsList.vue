<template>
  <div class="list-wrapper">
      <div class="list-header van-hairline--top--bottom">
          <div
          :class="{active: type == 'all'}"
          @click="changeType('all')"
          >综合</div>
          <div
          :class="{active: type == 'sale'}"
          @click="changeType('sale')"
          >销量</div>
          <div
          :class="{active: type == 'price'}"
          @click="changeType('price')"
          >价格</div>
      </div>
      <div class="list-content">
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
              <van-list
              v-model="loading"
              :finished="finished"
              finished-text="没有了"
              @load="onLoad"
              :mmediate-check="false"
              >
                  <goods-card
                  v-for="item in goodsList"
                  :key="item.id"
                  v-bind="item"
                  >

                  </goods-card>
              </van-list>
          </van-pull-refresh>
      </div>
  </div>
</template>

<script>
import goodsCard from './GoodsCard.vue'
export default {
    data () {
        return {
            type: 'price',
            isLoading: false,
            loading: false,
            finished: false,
            page: 1,
            goodsList: [
                {
                    images: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.baike.soso.com%2Fp%2F20131220%2Fbki-20131220150437-334991377.jpg&refer=http%3A%2F%2Fpic.baike.soso.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615382640&t=d5a047c79005cd7d98c55378c9ac8a70',
                    title: '苹果甘甜可口',
                    desc: '24小时发货',
                    tags: '',
                    price: '29.9'
                },
                {
                    images: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg01.jituwang.com%2F170704%2F256877-1FF411502154.jpg&refer=http%3A%2F%2Fimg01.jituwang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615383201&t=967c732117d0ec8157cd289936c7c1b4',
                    title: '大连樱桃好吃到爆',
                    desc: '24小时发货',
                    tags: '',
                    price: '119'
                },
                {
                    images: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1165533534,1285831028&fm=26&gp=0.jpg',
                    title: '【脆甜爽口】小仔蜜瓜',
                    desc: '24小时发货    包邮',
                    tags: '',
                    price: '49.9'
                },
                {
                    images: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.qjimage.com%2Fpm0416%2Fhigh%2Fpm0416-0045in.jpg&refer=http%3A%2F%2Fpic.qjimage.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615383652&t=3934509b0f658bba1e54d9ff86155b24',
                    title: '【产地直发】智力果猕猴桃',
                    desc: '24小时发货    包邮',
                    tags: '',
                    price: '35'
                },
                {
                    images: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1632726374,3285607842&fm=26&gp=0.jpg',
                    title: '【冰淇淋蜜瓜】山东瓜王',
                    desc: '24小时发货',
                    tags: '',
                    price: '29.9'
                },
                {
                    images: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1328874019,684499997&fm=26&gp=0.jpg',
                    title: '海南黄金百香果',
                    desc: '24小时发货',
                    tags: '',
                    price: '97'
                },
                {
                    images: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F16%2F10%2F29%2F75b1f5f0fa0406556b4a20207f6972eb.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615384001&t=5933186948458e7260190226fc29f057',
                    title: '牛油果',
                    desc: '24小时发货',
                    tags: '',
                    price: '85'
                }
            ]
        }
    },
    components: {
        goodsCard
    },
    methods: {
        changeType (type) {
            if (type == 'all') {
                this.type = 'all'
            } else if (type == 'sale') {
                this.type = 'sale'
            } else {
                this.type = 'price'
            }
        },
        onRefresh () {
            this.isLoading = true;
            this.finished = false;
            this.isLoading = false;
            this.page = 1;
        },
        onLoad () {
            this.page += 1;
            this.loading = true;
        }
    }
}
</script>

<style lang="less">
.list-header{
    width: 296px;
    position: relative;
    top: 0;
    left: 79px;
    box-sizing: border-box;
    padding: 0 8px;
    display: flex;
    justify-content: flex-end;
    > div {
        width: 50px;
        height: 25px;
        line-height: 25px;
        text-align: center;
        color: #cecece;
        position: relative;
    }
    .active{
        color: #ff1a90;
        font-weight: bold;
    }
}
.list-content{
    width: 296px;
    position: fixed;
    top: 170px;
    right: 0;
    bottom: 50px;
    overflow: auto;
}
</style>
