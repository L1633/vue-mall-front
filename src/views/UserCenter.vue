<template>
    <div>
        <shop-header></shop-header>
        <div class="center-main">

            <el-breadcrumb separator="/" class="center-bread">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>

            <div class="center-left fl">
                <dl>
                    <dt>订单中心</dt>
                    <dd>我的订单</dd>
                    <dd>我的回购单</dd>
                    <dd>我的回购单</dd>
                    <dt>个人中心</dt>
                    <dd>地址管理</dd>
                    <dd><router-link to="/usercenter/favorite">我的收藏</router-link></dd>
                    <dd>消息提醒</dd>
                    <dd>建议反馈</dd>
                    <dt>资产中心</dt>
                    <dd>我的优惠券</dd>
                    <dd>我的红包</dd>
                    <dd>我的回购金</dd>
                    <dt>服务中心</dt>
                    <dd>退款退换货跟踪</dd>
                    <dd>意外保</dd>
                    <dd>以旧换新</dd>
                   
                </dl>
            </div>

            <div class="center-right fr">
                <router-view/>
            </div>
            
        </div>

         <shop-footer></shop-footer>
    </div>
</template>

<script>
    import ShopHeader from '@/components/ShopHeader';
    import ShopFooter from '@/components/ShopFooter';
    
    export default {
        data() {
            return {

            }
        },
        created(){
      
        },
        components:{
            ShopHeader,
            ShopFooter
        },
        methods: {
           
        },
    }
</script>

<style scoped lang="scss">
    .center-main{
        width: 1240px;
        margin: 0 auto;
        .center-bread{
            height: 40px;
            line-height: 40px;
        }
        .center-left{
            margin-top: 10px;
            background: #fafafc;
            padding: 0 0 54px 0;
            dt{
                font-size: 16px;
                font-weight: 400;
                line-height: 52px;
                color: #333;
            }
            dd{
                padding: 6px 48px;
                font-size: 14px;                
                color:rgb(117,117,117)
            }
        }
        .center-right{
            width: 978px;
            height: 600px;
            background: #fafafc;
            padding:50px 48px 20px;
            .center-right-top{
                height: 200px;
                width: 100%;
                border-bottom: 1px solid #ccc;
                .user-card{
                    width: 50%;
                    .name{
                        margin: 20px 0 0 30px;
                        span{
                            font-size: 24px;
                            font-weight: 400;
                            color: #616161;
                        }
                    }
                    p{
                        line-height: 40px;
                        color: #999;
                    }
                }
                .user-info{
                    padding-top: 14px;
                    ul li{
                        padding: 6px 0;
                        font-size: 14px;
                    }
                }
            }
            
        }
    }
</style>