<template>
    <div class="shop-swiper">
        <div class="swiper-main">

            <div class="swiper-top clearfix">
                <div class="swiper-title fl">热品推荐</div>
                <div class="swiper-prev" slot="button-prev"></div>
                <div class="swiper-next" slot="button-next"></div> 
            </div>
            
            <swiper :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide v-for="good in hotGoods" :key="good.id">
                    <el-card :body-style="{ padding: '0 10px' }"  shadow="never">
                        <div class="swiper-img">
                            <img :src="good.image" class="image">
                        </div>
                        <div style="padding: 14px;">
                            <p>{{good.title}}</p>
                            <p>{{good.description}}</p>
                            <p>{{good.price}}</p>
                        </div>
                    </el-card>
                </swiper-slide>
            
                <!-- Optional controls -->
                <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
                <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->

            </swiper>

           

        </div>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
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
                        nextEl: '.swiper-next',
                        prevEl: '.swiper-prev',
                    },
                },
                hotGoods:[],

            }
        },
        components: {
            swiper,
            swiperSlide,
        },
        created(){
            this.init();
        },
        computed: {
            swiper() {
            return this.$refs.mySwiper.swiper
            }
        },
        methods:{
            init(){
                this.axios.get('/hotProducts')
                .then(res=>{
                    console.log(res,"轮播图");
                    this.hotGoods = res.data.list;
                    console.log(this.hotGoods,'热门商品');
                })
                .catch(error=>{

                })
            }
        }

    }
</script>

<style scoped lang="scss">
    .shop-swiper{
        width: 100%;
        height: 391px;
        margin: 40px 0;
        .swiper-main{
            width: 1240px;
            height: 391px;
            margin: 0 auto;
            .swiper-top{
                position: relative;
                .swiper-title{
                    line-height: 50px;
                }
                // 改写了swiper 组件，原来的样式是.swiper-button-prev
                // .swiper-button-next,
                .swiper-prev, .swiper-next{
                    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E");
                    position: absolute;
                    top: 50%;
                    right: 0;
                    width: 30px;
                    height: 30px;
                    margin-top: -15px;
                    z-index: 10;
                    cursor: pointer;
                    background-size: 27px 44px;
                    background-position: center;
                    background-repeat: no-repeat;
                }
                .swiper-next,{
                    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E");
                    right: 40px;
                }
                .swiper-prev.swiper-button-disabled,
                .swiper-next.swiper-button-disabled {
                    opacity: 0.35;
                    cursor: auto;
                    pointer-events: none;
                }
            }
            .swiper-img{
                width: 180px;
                height: 180px;
                margin:36px auto 0;
                .image {
                    width: 100%;
                    display: block;
                }
            }
            .swiper-slide{
                height: 340px;
                text-align: center;
                background: #fff;
            }
        }
        
    }
    
</style>