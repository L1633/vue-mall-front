<template>
    <div class="shop-footer">
        <div class="footer-top">
            <ul>
                <li class="footer-top-item"> 顺丰包邮</li>
                <li>100+ 城市次日送达</li>
                <li> 7 天无理由退货</li>
                <li> 15 天换货保障</li>
                <li> 1 年免费保修</li>
                <li>2300+ 线下体验店</li>
                <li>远程支持服务 </li>
                <li> 上门快修</li>
            </ul>

            <div class="footer-contact">
                <p>400-788-3333</p>
                <p>周一至周日 8:00-18:00 <br>（仅收市话费）</p>
                <el-button plain>联系我们</el-button>
            </div>
        </div>

        <div class="footer-bottom">
            <a>&copy;2018 Meizu Telecom Equipment Co., Ltd. All rights reserved.</a>
            <a href="">粤ICP备13003602号-2</a>
            <a href="">合字B2-20170010</a>
            <a href="">营业执照</a>
            <a href="">法律声明</a>
            <a href="">粤公网安备 44049102496009 号</a>
        </div>
        
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang='scss'>
    .shop-footer{
        // position: absolute;
        // bottom: 0;
        // left: 0;
        width: 100%;
        height: 295px;
        color: #999;
        font-size: 12px;
        border-top: 1px solid #efefef;
        background-color: #fff;
        overflow: hidden;
        .footer-top{
            width: 1240px;
            height: 120px;
            margin: 60px auto 14px;
            ul{
                width: 960px;
                float: left;
                li{
                    float: left;
                    width: 240px;
                    height: 33px;
                }
            }
            .footer-contact{
                 float: right;
            }
             
        }
        .footer-bottom{
            height: 80px;
        }
    }
</style>