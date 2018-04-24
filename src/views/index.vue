<template>
  <div id="index">
    <div class="head">
      <div class="head-box">
        <a class="icon-jd" href="#"></a>
        <form action="#">
          <i class="icon-search"></i>
          <input type="text" placeholder="提示">
        </form>
        <a href="#" class="login">登录</a>
      </div>
    </div>
    <div class="jd_banner">
      <!-- 轮播图 -->
      <swiper :options="swiperOption"  ref="mySwiper">  
        <!-- 这部分放你要渲染的那些内容 -->  
        <swiper-slide v-for="(img, index) in imglist" :key="index">
          <img :src="img" alt="">
        </swiper-slide>  
        <!-- 这是轮播的小圆点 -->  
        <div class="swiper-pagination" slot="pagination"></div>  
      </swiper>
      <!--nav  -->
      <div class="jd-nav vux-1px-b">
        <div class="jd-service">
          <img src="src/assets/nav0.png" alt="">
          <p>分类查询</p>
        </div>
        <div class="jd-service">
          <img src="src/assets/nav1.png" alt="">
          <p>物流查询</p>
        </div>
        <div class="jd-service">
          <img src="src/assets/nav2.png" alt="">
          <p>购物车</p>
        </div>
        <div class="jd-service">
          <img src="src/assets/nav3.png" alt="">
          <p>我的京东</p>
        </div>
        <div class="jd-service">
          <img src="src/assets/nav4.png" alt="">
          <p>充值</p>
        </div>
        <div class="jd-service">
          <img src="src/assets/nav5.png" alt="">
          <p>领券中心</p>
        </div>
        <div class="jd-service">
          <img src="src/assets/nav6.png" alt="">
          <p>京东超市</p>
        </div>
        <div class="jd-service">
          <img src="src/assets/nav7.png" alt="">
          <p>我的关注</p>
        </div>
      </div>
      <main>
        <section>
          <div class="product-top">
            <div class="left">
              <span class="sk-icon"></span>
              <h4>掌上秒杀</h4>
              <div class="time">
                <span class="time-num">0</span>
                <span class="time-num">0</span>
                <span class="time-icon">:</span>
                <span class="time-num">0</span>
                <span class="time-num">0</span>
                <span class="time-icon">:</span>
                <span class="time-num">0</span>
                <span class="time-num">0</span>
              </div>
            </div>
            <div class="right">
              更多>
            </div>
          </div>
          <div class="product">
            <div class="product-box">
              <div class="product-img">
                <img src="src/assets/detail02.jpg" alt="">
              </div>
              <p>¥20.00</p>
              <p>¥2000.00</p>
            </div>
            <div class="product-box">
              <div class="product-img vux-1px-l">
                <img src="src/assets/detail02.jpg" alt="">
              </div>
              <p>¥20.00</p>
              <p>¥2000.00</p>              
            </div>
            <div class="product-box">
              <div class="product-img vux-1px-r">
                <img src="src/assets/detail02.jpg" alt="">
              </div>
              <p>¥20.00</p>
              <p>¥2000.00</p>              
            </div>
          </div>
        </section>
        <section>
          <div class="product-top vux-1px-b">
            <h4>超值购</h4>
          </div>
          <div class="product">
            <div class="left vux-1px-r">
              <img src="src/assets/cp1.jpg" alt="">
            </div>
            <div class="right">
              <div class="right-t vux-1px-b">
                <img src="src/assets/cp2.jpg" alt="">
              </div>
              <div class="right-b">
                <img src="src/assets/cp3.jpg" alt="">
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="product-top vux-1px-b">
            <h4>热门活动</h4>
          </div>
          <div class="product">
            <div class="left">
              <div class="left-t vux-1px-b">
                <img src="src/assets/cp5.jpg" alt="">
              </div>
              <div class="left-b">
                <img src="src/assets/cp6.jpg" alt="">
              </div>
            </div>
            <div class="right vux-1px-l">
              <img src="src/assets/cp4.jpg" alt="">
            </div>            
          </div>          
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'index',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        notNextTick: true,
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 30,
        autoplay: {
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        loop: true,
        onSlideChangeEnd: swiper => {
          this.page = swiper.realIndex + 1
          this.index = swiper.realIndex
        }
      },
      imglist: [
        'src/assets/l1.jpg',
        'src/assets/l2.jpg',
        'src/assets/l3.jpg',
        'src/assets/l4.jpg',
        'src/assets/l5.jpg',
        'src/assets/l6.jpg',
        'src/assets/l7.jpg',
        'src/assets/l8.jpg'
      ]
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    this.swiper.slideTo(0, 0, false)
  }
}
</script>

<style lang="less">
@import "../style/global.less";

#index {
  min-width: 300px;
  max-width: 640px;

  position: relative;
  margin: 0 auto;
  .head {
    width: 100%;
    height: 40px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    .head-box {
      min-width: 300px;
      max-width: 640px;
      height: 40px;
      margin: 0 auto;
      background: @jdred;
      position: relative;
      .icon-jd {
        width: 60px;
        height: 36px;
        position: absolute;
        left: 10px;
        top: 4px;
        background-position: 0 -103px;
      }
      form {
        padding-left: 75px;
        padding-right: 80px;
        height: 100%;
        .icon-search {
          width: 20px;
          height: 20px;
          display: inline-block;
          background-position: -60px -109px;
          position: absolute;
          top: 10px;
          left: 85px;
        }
        input {
          width: 100%;
          height: 30px;
          border-radius: 15px;
          margin-top: 5px;
          padding-left: 30px;
        }
      }
      .login {
        position: absolute;
        right: 0px;
        top: 0px;
        width: 50px;
        height: 40px;
        color: #ffffff;
        line-height: 40px;
        text-align: center;
      }
    }
  }
  .jd_banner {
    width: 100%;
    img {
      width: 100%;
      display: inline-block;
    }
    .jd-nav {
      display: flex;
      flex-wrap: wrap;
      height: 150px;
      padding: 0 20px;
      padding-top: 11px;
      background: #ffffff;
      .jd-service {
        flex: 0 0 25%;
        height: 69px;
        text-align: center;
        img {
          width: 40px;
          height: 40px;
        }
        p {
          font-size: 14px;
        }
      }
    }
    .vux-1px-b {
      border-color: #e0e0e0;
    }
  }
  main {
    margin: 0 5px;
    // 公共头部
    section {
      margin-top: 8px;
      background: #ffffff;
      box-shadow: 0 0 1px 1px #e0e0e0;     
      &:first-child {
        padding-bottom: 10px;
        .product-top {
          .left {
            float: left;
            display: flex;
            .sk-icon {
              flex: 0 0 16px;
              height: 20px;
              display: inline-block;
              background: url("..//assets/seckill-icon.png") no-repeat;
              background-size: 16px 20px;
              margin-top: 6px;
              margin-left: 8px;
            }
            h4 {
              flex: 0 0 60px;
              height: 20px;
              margin-top: 6px;
              margin-left: 8px;
              font-size: 15px;
              color: #d8505c;
            }
            .time {
              flex: 0 0 122px;
              margin-top: 6px;
              margin-left: 8px;
            }
            .time-num {
              width: 15px;
              height: 15px;
              line-height: 15px;
              display: inline-block;
              text-align: center;
              background: #000000;
              color: #ffffff;
              margin: 0 -4px 0px 3px;
            }
            .time-icon {
              width: 4px;
              height: 15px;
              display: inline-block;
              line-height: 15px;
              margin: 0 -4px;
              margin-left: 3px;
            }
          }
          .right {
            float: right;
            line-height: 32px;
            margin-right: 10px;
          }
        }
        .product {
          display: flex;
          text-align: center;
          .product-box {
            flex: 0 0 33.3%;
          }
          .product-img {
            width: 100%;
            height: 134px;
            text-align: center;
            img {
              width: 134px;
              height: 134px;
              display: inline-block;
            }
          }
          p {
            color: #d8505c;
            font-size: 13px;
            text-align: center;
            &:last-child {
              font-size: 12px;
              text-decoration: line-through;
              text-align: center;
              color: #888;              
            }
          }
        }
      }
      &:nth-of-type(2),&:nth-child(3) {
        .product-top {
          position: relative;
          h4 {
            font-size: 15px;
            color: #666;
            padding-left: 15px;
            font-weight: inherit;
            line-height: 32px;
            &::before {
              content: "";
              display: block;
              width: 3px;
              height: 12px;
              background: #d8505c;
              position: absolute;
              top: 10px;
              left: 8px;
            }
          }
        }
        .product {
          display: flex;
          .left {
            flex: 1;
          }
          .right {
            flex: 1;
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
            .right-t {
              flex: 1;
            }
            .right-b {
              flex: 1;
            }
          }
        }
        img {
          width: 100%;
          display: block;
        }
      }
      &:nth-child(3) {
        .product {
          display: flex;
          .right {
            flex: 1;
          }
          .left {
            flex: 1;
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
            .left-t {
              flex: 1;
            }
            .left-b {
              flex: 1;
            }
          }
        }        
      }
    }
    .product-top {
      height: 32px;
    }
  }
}
</style>

