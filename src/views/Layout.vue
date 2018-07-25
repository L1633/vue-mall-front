<template>
    <div>
        <shop-header></shop-header>
        <carousel></carousel>
        <info-box></info-box>
        <swiper></swiper>
        
        <banner>
            <div slot="banner">
                <img src="../../static/images/banner3.jpg" alt="">
            </div>
        </banner>

        <product-card>
            <div slot="title" class="fl">手机</div>
            <div slot="product-card">
                <el-card :body-style="{ padding: '10px' }" v-for="(item,index) in 10" :key="index" class="product-card-item fl" shadow="hover">
                    <img src="../../static/images/card1.png" class="image">
                    <div style="padding: 14px;">
                        <span>信息</span>
                        <div class="bottom clearfix">
                        <el-button type="text" class="button">操作按钮</el-button>
                        </div>
                    </div>
                </el-card>
            </div>
        </product-card>

        <banner>
            <div slot="banner">
                <img src="../../static/images/banner1.jpg" alt="">
            </div>
        </banner>


        <product-card>
            <div slot="title" class="fl">数码配件</div>
            <div slot="product-card">
                <el-card :body-style="{ padding: '10px' }" v-for="(item,index) in 10" :key="index" class="product-card-item fl" shadow="hover">
                    <div class="card-img">
                        <img src="../../static/images/card4.jpg" class="image">
                    </div>
                    <div style="padding: 14px;">
                        <span>信息</span>
                        <div class="bottom clearfix">
                            <time class="time"></time>
                            <el-button type="text" class="button">操作按钮</el-button>
                        </div>
                    </div>
                </el-card>
            </div>
        </product-card>

        <banner>
            <div slot="banner">
                <img src="../../static/images/banner2.jpg" alt="">
            </div>
        </banner>


        <product-card>
            <div slot="title" class="fl">周边生活</div>
            <div slot="product-card">
                <el-card :body-style="{ padding: '10px' }" v-for="(item,index) in 10" :key="index" class="product-card-item fl" shadow="hover">
                    <div class="card-img">
                        <img src="../../static/images/card3.jpg" class="image">
                    </div>
                    <div style="padding: 14px;">
                        <span>信息</span>
                        <div class="bottom clearfix">
                            <time class="time"></time>
                            <el-button type="text" class="button">操作按钮</el-button>
                        </div>
                    </div>
                </el-card>
            </div>
        </product-card>


        <banner>
            <div slot="banner">
                <img src="../../static/images/banner3.jpg" alt="">
            </div>
        </banner>

        <product-card>
            <div slot="title" class="fl">产品热评</div>
            <div slot="product-card">
                <el-card :body-style="{ padding: '0px' }" v-for="(item,index) in 4" :key="index" class="product-card-item2 fl" shadow="hover">
                    <img src="../../static/images/hot1.jpg" class="image">
                    <p class="small">东西真心不错，用过最好用的插线板，做工外观没得挑剔，3个USB接口很实用，充电快，建议不包邮的应该在...。</p>
                    <span class="Extra-Small notice-color" >来自 XXXX 的评论</span>
                    <time class="time"></time>
                    <div class="small">魅族插线板| 49元 </div>
                </el-card>
            </div>
        </product-card>
        
         <product-card>
            <div slot="title" class="fl">内容</div>
            <div slot="product-card">
                <el-card :body-style="{ padding: '0px' }" v-for="(item,index) in 4" :key="index" class="product-card-item2 fl" shadow="hover">
                    <el-carousel >
                        <el-carousel-item v-for="item in 4" :key="item">
                            <span>图书</span>
                            <p>海量好书，享受精品阅读时光</p>
                            <a href="javascript:;">前往阅读更多 </a>
                            <img src="../../static/images/tiny1.jpg" alt="">
                        </el-carousel-item>
                    </el-carousel>
                </el-card>
            </div>
        </product-card>

        <shop-footer></shop-footer>
    </div>
</template>

<script>
    import ShopHeader from '@/components/ShopHeader';
    import Carousel from './Carousel';
    import InfoBox from './InfoBox';
    import Swiper from '@/components/Swiper';    
    import ProductCard from '@/components/ProductCard';
    import Banner from '@/components/Banner';
    import ShopFooter from '@/components/ShopFooter';
    export default {
        
        components:{
            ShopHeader,
            Carousel,
            InfoBox,
            Swiper,
            ProductCard,
            Banner,
            ShopFooter,
        }
    }
</script>

<style scoped lang='scss'>
    .product-card-item{
        height: 300px;
        width: 236px;
        margin: 0 0 14px 15px;
        .card-img{
            width: 180px;
            height: 180px;
            margin:36px auto 0;
            .image {
                width: 100%;
                display: block;
            }
        }
        
    }
    .product-card-item:nth-child(1){
        margin-left: 0;
    }
    .product-card-item:nth-child(6){
        margin-left: 0;
    }
    .product-card-item2{
        height: 415px;
        width: 295px;
        margin: 0 0 5px 20px;
        .image {
            width: 100%;
            display: block;
            margin-bottom:28px;
        }
        p{
            height: 72px;
            margin-bottom: 22px;
        }
    }
    .product-card-item2:nth-child(1){
        margin-left: 0;
        
    }
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
</style>