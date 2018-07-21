<template>
    <div class="shop-info">
        <div class="info-main">
            <div class="info-main-1 info-main-item fl">
                <a href="">
                    <i class="el-icon-edit">1111</i>
                </a>

                <a href="">
                    <i class="el-icon-edit">222</i>
                </a>

                <a href="">
                    <i class="el-icon-edit">333</i>
                </a>

                <a href="">
                    <i class="el-icon-edit">4444</i>
                </a>
            </div>

            <div class="info-main-2 fl"></div>

            <div class="info-main-3 fl"></div>

            <div class="info-main-4 fl"></div>

            <div class="info-main-5 fl"></div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang='scss'>
    .shop-info{
        width: 100%;
        height: 140px;
        margin-top:14px;
        .info-main{
            height: 100%;
            width: 1240px;
            margin: 0 auto;
            .info-main-item{
                width: 122px;
                height: 140px;
            }
            .info-main-1{
                width: 244px;
                background-color: #ccc;
                a{
                    float: left;
                    display: block;
                    width: 122px;
                    height: 70px;
                }
            }
            .info-main-2{
                width: 244px;
                height: 140px;
                margin-left:5px;
                background:url('../../static/images/info1.jpg') no-repeat;
                background-size: contain;
            }
            .info-main-3{
                width: 244px;
                height: 140px;
                margin-left:5px;
                background:url('../../static/images/info2.jpg') no-repeat;
                background-size: contain;
            }
            .info-main-4{
                width: 244px;
                height: 140px;
                margin-left:5px;
                background:url('../../static/images/info3.jpg') no-repeat;
                background-size: contain;
            }
            .info-main-5{
                width: 244px;
                height: 140px;
                margin-left:5px;
                background:url('../../static/images/info4.jpg') no-repeat;
                background-size: contain;
            }
        }
    }
</style>