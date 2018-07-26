<template>
    <div class="shop-product">
        <shop-header></shop-header>
        <div class="product-bread">
            <el-breadcrumb separator="/" class="bread">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">{{productDelList.title}}</a></el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <!-- 主要内容 -->
        <div class="product-main clearfix">
            
            <div class="product-detail fl">
                <!-- 左边的图片 -->
                <div class="product-detail-pics" >
                    <div class="preview-booth">
                        <a href="javascript:;">
                            <img src="//openfile.meizu.com/group1/M00/04/7D/Cgbj0FsM-iuAC1_rAAdqS97vQTk763.png680x680.jpg" height="375" width="375"
                                    alt="">
                        </a>
                    </div>
                    <ul class="pics-thumb clearfix">
                            <li class="current">
                                <a data-mtype="store_de_tp_1" href="#"><img
                                        src="//openfile.meizu.com/group1/M00/04/7D/Cgbj0FsM-iuAC1_rAAdqS97vQTk763.png120x120.jpg" width="75" height="75"></a>
                            </li>
                            <li >
                                <a data-mtype="store_de_tp_2" href="#"><img
                                        src="//openfile.meizu.com/group1/M00/04/7D/Cgbj0FsM-iWAHIIUAAOReO9LCh4720.png120x120.jpg" width="75" height="75"></a>
                            </li>
                             <li >
                                <a data-mtype="store_de_tp_3" href="#"><img
                                        src="//openfile.meizu.com/group1/M00/04/8C/Cgbj0VsM-iWALbRNAANxJDYaZvA593.png120x120.jpg" width="75" height="75"></a>
                            </li>
                            <li >
                                <a data-mtype="store_de_tp_4" href="#"><img
                                        src="//openfile.meizu.com/group1/M00/04/8C/Cgbj0VsM-iWAS7ecAAHZaB_-IJI619.png120x120.jpg" width="75" height="75"></a>
                            </li>
                    </ul>
                    <div class="preview-action">
                        <a class="vm-favorite" data-mtype="store_de_favorite" id="J_favorite" href="javascript:;" @click="favorite"><i class="el-icon-star-off"></i>收藏 </a>
                        <a class="compare-btn-list" id="J_compare" data-mtype="store_de_compare"><i class="iconfont icon-duibi compare-duibi"></i><span>对比</span></a>
                    </div>
                </div>
            </div>
            <!-- 右边的参数 -->
            
            <div class="product-detail-sku fr">
                    
                    <div class="property" id="property">

                        <div class="property-head">
                            <h1 class="Extra-Extra-large">{{productDelList.title}}</h1>
                            <p class="mod-info">限时享6期免息</p>
                        </div>

                        <div class="property-sell">
                            <dl class="property-sell-price clearfix small">
                                <dt class="fl">价<span class="s-space"></span><span
                                        class="s-space"></span>格：
                                </dt>
                                <dd class="fl">
                                    <div class="mod-price">
                                        <small class="price-color Extra-Extra-large">¥</small>
                                        <span id="J_price" class="price-color Extra-Extra-large">{{productDelList.price}}</span>
                                    </div>
                                </dd>
                            </dl>
                            <dl class="property-sell-app clearfix" id="J_propertySellAppPrice" style="display: none">
                                <dt class="vm-metatit" id="J_appTag">优<span class="s-space"></span><span class="s-space"></span>惠：</dt>
                                <dd>
                                    <div class="mod-app-tip" id="J_appTip" style="display:none;">
                                        <p>APP下单</p>
                                        <p class="vm-money">省</p>
                                        <p id="J_appPrice" class="vm-money"></p>
                                        <p class="vm-money">元</p>
                                    </div>
                                </dd>
                            </dl>
                            <dl class="property-sell-coupon clearfix" id="J_prodPromo" style="display:none;">
                                <dt class="vm-metatit">领<span class="s-space"></span><span class="s-space"></span>券：
                                </dt>
                                <dd>
                                    <p id="J_promoInner">
                                    </p>
                                    <a class="vm-more" data-mtype="store_de_coupon_more" id="J_promoMore" href="#">更多></a>
                                </dd>
                            </dl>
                        </div>
                        <div class="property-sibling">
                            <dl data-property="型号" class="property-sibling-item clearfix">
                                <dt class="fl">
                                        选<span class="s-space"></span><span class="s-space"></span>择：
                                </dt>
                                <dd class=" fl">
                                            <a href="javascript:;" v-for="property in productSkus" :key="property.id" class="s-space" @click="sku_id=property.id">{{property.title}}</a>
                                            <!-- <a href="//detail.meizu.com/item/meilan_6.html?click=store_de_sib_1" data-itemid="11126" class="prop" data-mtype="store_de_sib_1">魅蓝 6</a>
                                            <a href="javascript:;" data-itemid="11737" class="prop selected" data-mtype="store_de_sib_2">魅蓝 6T</a> -->
                                </dd>
                            </dl>
                        </div>

                        <div class="property-set">
                            <dl class="property-set-sale" data-property="网络类型">
                                <dt class="fl">网络类型：</dt>
                                <dd class="fl">
                                        <a data-value="14:18238"
                                        
                                        data-mtype="store_de_sp_1_1" href="#"
                                        title="全网通公开版">
                                                <span>全网通公开版</span>
                                        </a>
                                </dd>
                            </dl>
                            <dl class="property-set-sale clearfix" data-property="颜色分类">
                                <dt class="fl">颜色分类：</dt>
                                <dd class="fl">
                                        <a data-value="3:14286"
                                        class="vm-sale-img"
                                        data-mtype="store_de_sp_2_1" href="#"
                                        title="香槟金">
                                                    <img src="//openfile.meizu.com/group1/M00/04/8D/Cgbj0VsM-kuAGYZmAAm_NQr8nSk674.png80x80.png" width="32" height="32">
                                                <span>香槟金</span>
                                        </a>
                                        <a data-value="3:19394"
                                        class="vm-sale-img"
                                        data-mtype="store_de_sp_2_2" href="#"
                                        title="曜石黑">
                                                    <img src="//openfile.meizu.com/group1/M00/04/8C/Cgbj0VsM-iyAAgTIAAbXIwKFVL4647.png80x80.png" width="32" height="32">
                                                <span>曜石黑</span>
                                        </a>
                                        <a data-value="3:25682"
                                        class="vm-sale-img"
                                        data-mtype="store_de_sp_2_3" href="#"
                                        title="珊瑚红">
                                                    <img src="//openfile.meizu.com/group1/M00/04/7E/Cgbj0FsM-juAKmulAAnA4CeHAb4634.png80x80.png" width="32" height="32">
                                                <span>珊瑚红</span>
                                        </a>
                                </dd>
                            </dl>
                            <dl class="property-set-sale clearfix" data-property="内存容量">
                                <dt class="fl">内存容量：</dt>
                                <dd class="fl">
                                        <a data-value="13:28005"
                                        
                                        data-mtype="store_de_sp_3_1" href="#"
                                        title="3+32GB">
                                                <span>3+32GB</span>
                                        </a>
                                        <a data-value="13:28006"
                                        
                                        data-mtype="store_de_sp_3_2" href="#"
                                        title="4+32GB">
                                                <span>4+32GB</span>
                                        </a>
                                        <a data-value="13:28258"
                                        
                                        data-mtype="store_de_sp_3_3" href="#"
                                        title="4+64GB">
                                                <span>4+64GB</span>
                                        </a>
                                </dd>
                            </dl>
                            <dl class="property-set-package clearfix" data-property="套餐">
                                <dt class="fl">套<span class="s-space"></span><span class="s-space"></span>餐：</dt>
                                <dd class="fl">
                                    <div class="package-tab clearfix" id="J_packageTab" data-property="套餐">
                                            <a data-mtype="store_de_tc_1" data-value="" href="#" title="官方标配">
                                                    <p class="vm-text ">官方标配<span class="vm-text-standard">无优惠</span></p>
                                            </a>
                                            <a data-mtype="store_de_tc_2" data-value="235" href="#" title="碎屏保套餐">
                                                    <p class="vm-text ">碎屏保套餐<span class="vm-text-standard">无优惠</span></p>
                                            </a>
                                            <a data-mtype="store_de_tc_3" data-value="237" href="#" title="套餐一">
                                                    <p class="vm-text ">套餐一<span class="vm-text-standard">无优惠</span></p>
                                            </a>
                                    </div>
                                    <div class="package-content hide" id="J_packageContent" style="display: none;">
                                        <span class="s-triangle" id="J_triangle"></span>
                                        <div class="mod-bd" id="J_packageBody"></div>
                                    </div>
                                </dd>
                            </dl>
                        </div>

                        <div class="property-service">
                            <dl class="property-service-item clearfix">
                                <dt class="fl">支<span class="s-space"></span><span class="s-space"></span>持：
                                </dt>
                                <dd class="fl">
                                    <span><i
                                            class="icon icon-service"></i>花呗分期</span>
                                    <span><a
                                            href="//store.meizu.com/marrive/summary.html" target="_blank"><i
                                            class="icon icon-service"></i>百城速达</a></span>
                                        <span><i class="icon icon-service"></i>顺丰包邮</span>
                                        <span><i class="icon icon-service"></i>7天无理由退货</span>
                                </dd>
                            </dl>
                        <!--去掉百城速达判断-->
                            <dl class="property-service-suda clearfix" id="J_delivery">
                                <dt class="fl">配<span class="s-space"></span><span class="s-space"></span>送：</dt>
                                <dd class="mod-site clearfix fl">
                                    <div id="site-selector" class="site-selector">
                                        <div class="text"></div>
                                        <div class="content"></div>
                                    </div>
                                        <span class="site-status" id="J_siteStatus">
                                        </span>
                                </dd>
                            </dl>
                        <!---->
                            <dl class="property-service-provider clearfix">
                                <dt class="fl">服<span class="s-space"></span><span class="s-space"></span>务：
                                </dt>
                                <dd class="fl">
                                    <span id="J_installmentInfo"></span>
                                        本商品由 魅族 负责发货并提供售后服务
                                    <a class="vm-kefu" style="display: none;" data-mtype="store_de_kefu" id="J_kefu" href="javascript:;"><i class="iconfont-detail icon-kefu"></i><span>在线客服</span></a>
                                </dd>
                            </dl>
                        </div>
                        <div class="property-huabei clearfix">
                            <div class="vm-metatit">花呗分期：</div>
                            <div class="clearfix property-huabei-bd" id="J_huabeiBody">

                                    <a data-value="3" class="prop" data-mtype="store_de_hb_3">
                                        <span class="vm-periods">¥266.33×3期</span>
                                            <span class="vm-rate">(含手续费0.00/期)</span>
                                    </a>
                                    <a data-value="6" class="prop" data-mtype="store_de_hb_6">
                                        <span class="vm-periods">¥133.17×6期</span>
                                            <span class="vm-rate">(含手续费0.00/期)</span>
                                    </a>
                                    <a data-value="12" class="prop" data-mtype="store_de_hb_12">
                                        <span class="vm-periods">¥66.58×12期</span>
                                            <span class="vm-rate">(含手续费59.92/期)</span>
                                    </a>
                            </div>
                            <a href="//hd.meizu.com/rules/huabei.html" target="_blank" class="vm-desc">
                                <i class="iconfont-detail icon-question"></i>
                                什么是花呗分期
                            </a>
                        </div>
                        <div class="property-buy">
                            <p class="vm-message" id="J_message">
                            </p>
                            <dl class="property-buy-quantity clearfix">
                                <dt class="fl">数<span class="s-space"></span><span class="s-space"></span>量：
                                </dt>
                                <dd class="fl">
                                    <div class="mod-control">
                                        <a title="减少" href="javascript:;" class="vm-minus" @click="editCart('minus')">-</a>
                                        <input type="text" value="1"  v-model="mount">
                                        <a title="增加" href="javascript:;" class="vm-plus" @click="editCart('plus')">+</a>
                                    </div>
                                </dd>
                            </dl>
                            <div class="property-buy-action">
                                  <el-button type="danger" >立即购买</el-button>
                                  <el-button type="primary" @click="addCart">加入购物车</el-button>
                                <!-- <a data-mtype="store_de_buy" href="javascript:void(0);" id="J_btnBuy" class="btn btn-danger btn-lg mr20 "><i></i>立即购买</a>
                                <a data-mtype="store_de_cart" href="javascript:void(0);" id="J_btnAddCart" class="btn btn-primary btn-lg hide"><i></i>加入购物车</a> -->
                                <a href="javascript:void(0);" data-mtype="store_de_remind" id="J_btnRemind" class="btn btn-primary btn-lg hide"><i></i>开售提醒</a>
                                <span class="vm-service" id="J_panicBuyingWrap"></span>
                            </div>
                        </div>
                        <div class="prod-addition">
                            <input type="hidden" id="servertime" value="1532159160993">

                            <div class="layer-promo" id="layerPromo" style="display:none;">
                                <div class="layer-promo-hd">
                                    领取优惠券
                                    <a class="vm-close" id="J_promoClose" href="#">
                                        ╳
                                    </a>
                                </div>
                                <div class="layer-promo-bd">
                                    <dl class="discount-coupon" id="J_discountCoupon">
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <!-- 右边结束 -->
        </div>

        <div class="product-tab">
            <el-tabs v-model="activeName" class="tab">
                <el-tab-pane label="商品详情" name="first">
                    商品详情
                    <img src="../../static/images/detail1.jpg" alt="">
                    <img src="../../static/images/detail2.jpg" alt="">
                    <img src="../../static/images/detail3.jpg" alt="">
                    <img src="../../static/images/detail4.jpg" alt="">
                    <img src="../../static/images/detail5.jpg" alt="">
                    <img src="../../static/images/detail6.jpg" alt="">
                    <img src="../../static/images/detail7.jpg" alt="">
                </el-tab-pane>
                <el-tab-pane label="规格参数" name="second">
                    规格参数
                </el-tab-pane>
                <el-tab-pane label="常见问题" name="third">
                    常见问题
                </el-tab-pane>
            </el-tabs>
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
                activeName: 'first',
                productDelList:{ },
                productSkus:[ ],
                //  商品skuID
                sku_id:'',
                mount:1,
            }
        },
        props:['id'],
        components:{
            ShopHeader,
            ShopFooter
        },
        created(){
            this.init();
        },
        methods: {
            init(){
                this.axios.get('/products/'+ this.id)
                .then(res=>{
                    console.log(res,'商品详情')
                    this.productDelList = res.data.list.product;
                    this.productSkus = res.data.list.productSkus;
                })
                .catch(err=>{
                    console.log(err)
                })
            },
            favorite() {
                this.axios.post(`/products/${this.id}/favorite`)
                .then(res=>{
                    console.log(res,'收藏商品接口')
                    if(res.data.status_code == 0){
                        console.log('收藏成功')
                        this.$message({
                            message: '收藏成功',
                            type: 'success'
                            });
                    }
                })
                .catch(err=>{
                    if(err.status == '400'){
                        console.log('请登录')
                        this.$alert('请先登录', '标题名称', {
                            confirmButtonText: '确定',
                            callback: action => {
                                this.$message({
                                type: 'info',
                                message: `action: ${ action }`
                                });
                            }
                            });
                    }
                })
            },
            editCart(flag){
              if(flag =='plus'){
                  this.mount++;
                }else if( flag =='minus'){
                  if(this.mount <=1){
                    return;
                  }
                  this.mount--;
                }
            },
            // 加入购物车
            addCart(){
                this.axios.post('/cart',{
                    sku_id:this.sku_id,
                    amount:1
                })
                .then(res=>{
                    if(res.data.status_code == 0){
                        this.$message({
                            message: '加入购物车成功',
                            type: 'success'
                            });
                    }
                })
                .catch(err=>{
                    console.log(err)
                    if(err.status == 400){
                        this.$message({
                            message: '请先登录',
                            type: 'warning'
                            });
                    }
                })
            }
        },
    }
</script>

<style scoped lang="scss">
    .shop-product{
        width: 100%;
        .product-bread{
            width: 100%;
            .bread{
                width: 1240px;
                margin: 0 auto;
                height: 40px;
                line-height: 40px;
            }
        }
        .product-main{
            width: 1240px;
            margin: 0 auto;
            .product-detail-pics{
                width: 495px;
                height: 565px;
                .pics-thumb{
                    margin-top: 10px;
                    padding-left: 60px;
                    li{
                        float: left;
                    }
                }
            }
            .product-detail-sku{
                padding-top: 20px;
                text-align: left;
                .property-head{
                     h1{
                        margin-bottom: 10px;
                    }
                    .mod-info{
                        color: #e22841;
                        margin-bottom: 15px;
                    }
                }
                .property-sell{
                    background: #f5f5f5;
                    .property-sell-price{
                        padding-left: 10px;
                        height: 55px;
                        line-height: 55px;
                    }
                    .s-space{
                        padding: 0 6px;
                    }
                }
                .property-set{
                     padding-bottom: 16px;
                    .property-set-sale{
                        margin-bottom: 6px;
                        height: 44px;
                        line-height: 44px;
                    }
                }
                .property-sibling{
                    .property-sibling-item{
                        margin-bottom: 6px;                        
                        height: 44px;
                        line-height: 44px;
                    }
                    .s-space{
                        padding: 0 6px;
                    }
                }
            }
        }
        .product-tab{
            width: 100%;
            .tab{
                width: 1240px;
                margin: 0 auto;
            }
        }
    }
</style>