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
             <div class="cart-item-head">
                <ul>
                    
                    <li>商品名称</li>
                    <li>单价</li>
                    <li>数量</li>
                    <li>小计</li>
                    <li>配送方式</li>
                </ul>
            </div>

            <ul class="cart-item-list">
                    <li v-for="(item,index) in orderInfo" :key="item.id">
                        <div class="cart-tab-1">
                            <div class="cart-item-check">
                                <a href="javascipt:;" class="checkbox-btn item-check-btn" v-bind:class="{'check':item.checked=='1'}" @click="editCart('checked',item,index)">
                                <svg class="icon icon-ok">
                                    <use xlink:href="#icon-ok"></use>
                                </svg>
                                </a>
                            </div>
                            <div class="cart-item-pic">
                                <!-- <img v-lazy="'/static/'+item.productImage" v-bind:alt="item.productName"> -->
                                <img :src="item.productSku.product.image" alt="">
                            </div>
                            <div class="cart-item-title">
                                <div class="item-name">{{item.productSku.product.title}}</div>
                            </div>
                        </div>
                        <div class="cart-tab-2">
                            <!-- <div class="item-price">{{item.salePrice|currency('$')}}</div> -->
                            <div class="item-price">{{item.productSku.product.price}}</div>
                        </div>
                        <div class="cart-tab-3">
                            <div class="item-quantity">
                                <div class="select-self select-self-open">
                                    <div class="select-self-area">
                                        <a class="input-sub" @click="editCart('minu',item)">-</a>
                                        <span class="select-ipt">{{item.amount}}</span>
                                        <a class="input-add" @click="editCart('add',item)">+</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cart-tab-4">
                            <!-- <div class="item-price-total">{{(item.productNum*item.salePrice)|currency('$')}}</div> -->
                            <div class="item-price-total">{{item.amount*item.productSku.product.price}}</div>
                        </div>
                        <div class="cart-tab-5">
                            <div class="cart-item-opration">
                                <a href="javascript:;" class="item-edit-btn" @click="delCartConfirm(item.product_sku_id,index)">
                                    <i class="el-icon-delete"></i>
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>


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


        <el-button type="primary" @click="orderPay">下单并支付</el-button>

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
        mounted(){
            console.log(this.$route.params.orderInfo);
            this.orderInfo = this.$route.params.orderInfo;
        },
        methods: {
            orderPay() {
                this.axios.post('/orders')
                .then(res=>{

                })
                .catch(err=>{

                })
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