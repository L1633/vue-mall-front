<template>
    <div class="shop-carousel">
        <div class="carousel-category">
            <ul>
                <li class="carousel-category-item" v-for="good in goodsList" :key="good.id">
                    {{good.name}}
                    <div class="category-item-children">
                        <ul>
                            <li v-for="goodchild in good._child" :key="goodchild.id"> {{goodchild.name}}</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        <el-carousel height="480px" class="clearfix" >
            <!-- arrow="always" -->
            <el-carousel-item >
                <img src="../../static/images/1.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item >
                <img src="../../static/images/2.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item >
                <img src="../../static/images/3.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item >
                <img src="../../static/images/4.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item >
                <img src="../../static/images/5.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item >
                <img src="../../static/images/6.jpg" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>    
  
</template>

<script>
    export default {
        data() {
            return {
                goodsList:{},
            }
        },
        created(){
            this.getList();
        },
        methods: {
            getList() {
                this.axios.get('/productClassify')
                .then(res=>{
                    console.log(res,'商品列表')
                    this.goodsList = res.data.list;
                }).catch(error=>{

                })
            }
        },
    }
</script>

<style scoped lang="scss">
    .shop-carousel{
        position: relative;
        .carousel-category{
            position: absolute;
            left: 50%;
            top: 0;
            margin-left: -620px;
            padding-top: 12px;
            height: 480px;
            width: 244px;
            background-color: rgba(248,247,247,.8);
            background-color: #f8f7f7/9;
            z-index: 33;
            .carousel-category-item{
                height: 57px;
                line-height: 57px;
                &:hover .category-item-children{
                     display: block;
                }
                .category-item-children{
                    width: 450px;
                    display: none;
                    position: absolute;
                    left: 244px;
                    top: 0;
                    z-index: 24;
                    height: 458px;
                    border: 1px solid #e0e0e0;
                    border-left: 0;
                    background: #fff;
                    box-shadow: 0 8px 16px rgba(0,0,0,0.05);
                    // box-shadow: 0 8px 16px rgba(0,0,0,0.18);
                }
            }
        }
    }

</style>