<template>
            <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback" >
                <!-- slides -->
                <swiper-slide v-for="(item,index) in 4" :key="index">
                   <span>图书</span>
                   <p>海量好书，享受精品阅读时光</p>
                   <a href="javascript:;">前往阅读更多 </a>
                   <img src="../../static/images/tiny1.jpg" alt="">
                </swiper-slide>
            
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
                <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
                <div class="swiper-button-prev2" slot="button-prev"></div>
                <div class="swiper-button-next2" slot="button-next"></div> 

            </swiper>

</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    // import '../styles/swiper.scss'
    export default {
        data() {
            return {
                swiperOption:{
                    // autoplay:true,
                    pagination:{
                        el:'.swiper-pagination',
                        clickable:true,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next2',
                        prevEl: '.swiper-button-prev2',
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
    .swiper-button-prev2,
    .swiper-button-next2 {
        position: absolute;
        top: 50%;
        width: 27px;
        height: 44px;
        margin-top: -22px;
        z-index: 10;
        cursor: pointer;
        background-size: 27px 44px;
        background-position: center;
        background-repeat: no-repeat;
    }
    .swiper-button-prev2,
    .swiper-container-rtl .swiper-button-next {
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E");
        left: 10px;
        right: auto;
    }
    .swiper-button-next2,
    .swiper-container-rtl .swiper-button-prev {
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E");
        right: 10px;
        left: auto;
    }
</style>