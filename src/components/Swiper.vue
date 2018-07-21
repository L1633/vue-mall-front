<template>
    <div class="shop-swiper">
        <div class="swiper-main clearfix">

            <div class="swiper-title">热品推荐</div>
            <swiper :options="swiperOption" ref="mySwiper" >
                <!-- slides -->
                <swiper-slide v-for="(item,index) in 10" :key="index">
                    <el-card :body-style="{ padding: '10px' }"  shadow="never">
                        <img src="../../static/images/card2.jpg" class="image">
                        <div style="padding: 14px;">
                            <span>信息</span>
                            <div class="bottom clearfix">
                            <time class="time"> </time>
                            <el-button type="text" class="button">操作按钮</el-button>
                            </div>
                        </div>
                    </el-card>
                </swiper-slide>
            
                <!-- Optional controls -->
                <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
                <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->

            </swiper>

            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div> 

        </div>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import '../styles/swiper.scss'
    export default {
        data() {
            return {
                swiperOption:{
                    slidesPerView: 5,
                    spaceBetween: 0,
                    autoplay:true,
                    // pagination:{
                    //     el:'.swiper-pagination',
                    //     clickable:true,
                    // },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                }
            }
        },
        components: {
            swiper,
            swiperSlide,
        },
        computed: {
            swiper() {
            return this.$refs.mySwiper.swiper
            }
        },

    }
</script>

<style scoped lang="scss">
    .shop-swiper{
        width: 100%;
        height: 391px;
        margin: 40px 0;
        .swiper-main{
            width: 1240px;
            margin: 0 auto;
            position: relative;
            .swiper-title{
                line-height: 50px;
            }
            .image {
            width: 100%;
            display: block;
            }
            .swiper-slide{
                height: 340px;
                text-align: center;
                background: #fff;
            }
        }
        
    }

    .swiper-button-prev, .swiper-button-next{
        position: absolute;
        top: 0;
        right: 0;
        width: 27px;
        height: 44px;
        // margin-top: -22px;
        z-index: 10;
        cursor: pointer;
        background-size: 27px 44px;
        background-position: center;
        background-repeat: no-repeat;
    }
</style>