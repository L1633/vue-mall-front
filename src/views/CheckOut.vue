<template>
    <div class="shop-checkout">

        <div class="checkOut">
            <div class="logo"></div>
            <div class="fl">确认订单</div>
        </div>

         <div class="info">
            <div class="title">收货人信息</div>
            <div class="addInfo" @click="dialogFormVisible = true">添加收货人</div>
        </div>

        <div class="goodInfo">
            <div class="title">确认订单信息信息</div>

        </div>

        <div class="count-actions">
            <div class="title">使用优惠抵扣</div>
            
        </div>

        <div class="pay">
            <div class="title">选择支付方式</div>
            <ul class="clearfix">
                
                <li class="fl Extra-large">支付宝</li>
                <li class="fl">
                    <el-radio v-model="pay" label="1">支付宝</el-radio>
                </li>
                <li class="fl">
                    <span class="alipay"></span>
                </li>
                
            </ul>
            <ul class="clearfix">
                <li class="fl Extra-large">微信</li>
                <li class="fl">
                    <el-radio v-model="pay" label="2">微信支付</el-radio>
                </li>
                <li class="fl">
                    <span class="weixin"></span>
                </li>
            </ul>
            <ul class="clearfix">
                <li class="fl Extra-large">网上银行</li>
                <li class="fl"></li>
            </ul>
        </div>


        <el-button type="primary">下单并支付</el-button>

        <el-dialog title="收货地址" :visible.sync="dialogFormVisible" width="660px">
            <el-form :model="form">
                <el-form-item label="活动名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">保存</el-button>
            </div>
        </el-dialog>


    </div>
</template>

<script>
    export default {
        data() {
            return {
                form:{
                    name:'',
                    region:''
                },
                dialogFormVisible: false,
                formLabelWidth: '120px',
                pay:''
            }
        },
    }
</script>

<style scoped lang="scss">
    .shop-checkout{
         width: 100%;
         .title{
             padding: 20px 20px;
         }
         .checkOut{
            width: 1240px;
            height: 80px;
            line-height: 80px;
            margin:0 auto;
            border-bottom: 1px solid #f8fcff;
        }
        .info{
            width: 1240px;
            height: 250px;
            line-height: 40px;
            margin:0 auto;
            border-bottom: 1px solid #f8fcff;
            text-align: left;
            .title{
                height: 40px;
                line-height: 40px;
            }
            .addInfo{
                text-align: center;
                width: 270px;
                height: 180px;
                border: 1px solid #e0e0e0;
            }
        }
        .goodInfo{
            width: 1240px;
            margin:0 auto;
            border-bottom: 1px solid #f8fcff;
        }
        .pay{
            width: 1240px;
            margin:0 auto;
            border-bottom: 1px solid #f8fcff;
            text-align: left;
           ul{
               .weixin{
                   display: block;
                   width: 50px;
                   height: 50px;
                   background: url('../assets/weixin.png') no-repeat;
                   background-size: cover;
               }
               .alipay{
                   display: block;
                   width: 50px;
                   height: 50px;
                   background: url('../assets/alipay.png') no-repeat;
                   background-size: cover;
               }
               li{
                   padding: 10px 
               }
               li:nth-child(1){
                   padding-right:100px
               }    
           }
        }
    }
</style>