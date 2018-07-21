<template>
    <div class="shop-product">
        <shop-header></shop-header>
        <div class="product-main">

            <div class="product-detail">
                <!-- 左边的图片 -->
                <div class="preview" id="preview">
                    <div class="preview-booth">
                        <a href="javascript:;" id="J_imgBooth">
                            <img src="//openfile.meizu.com/group1/M00/04/7D/Cgbj0FsM-iuAC1_rAAdqS97vQTk763.png680x680.jpg" height="375" width="375"
                                    alt="">
                        </a>
                    </div>
                    <ul class="preview-thumb clearfix" id="J_previewThumb">
                            <li class="current">
                                <a data-mtype="store_de_tp_1" href="#"><img
                                        src="//openfile.meizu.com/group1/M00/04/7D/Cgbj0FsM-iuAC1_rAAdqS97vQTk763.png120x120.jpg" width="75" height="75"></a>
                            </li>
                            <li >
                                <a data-mtype="store_de_tp_2" href="#"><img
                                        src="//openfile.meizu.com/group1/M00/04/7D/Cgbj0FsM-iWAHIIUAAOReO9LCh4720.png120x120.jpg" width="75" height="75"></a>
                            </li>
                    </ul>
                    <div class="preview-action">
                        <a class="vm-favorite" data-mtype="store_de_favorite" id="J_favorite" href="javascript:;"><i class="iconfont icon-favorite"></i>收藏 </a>
                        <a class="compare-btn-list" id="J_compare" data-mtype="store_de_compare"><i class="iconfont icon-duibi compare-duibi"></i><span>对比</span></a>
                    </div>
                </div>
                <!-- 右边的参数 -->
                
                <div class="container">
                    <section class="crumbs clearfix">
                                <a data-mtype="store_de_mbx_1" href="http://store.meizu.com/index.html">首页</a>&nbsp;&gt;&nbsp;
                                <a class="ellipsis crumbs-title">魅蓝 6T</a>
                    </section>
                    <section class="row">
                        <div class="preview" id="preview">
                            <div class="preview-booth">
                                <a href="javascript:;" id="J_imgBooth">
                                    <img src="//openfile.meizu.com/group1/M00/04/7D/Cgbj0FsM-iuAC1_rAAdqS97vQTk763.png680x680.jpg" height="375" width="375"
                                        alt="">
                                </a>
                            </div>
                            <ul class="preview-thumb clearfix" id="J_previewThumb">
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
                                <a class="vm-favorite" data-mtype="store_de_favorite" id="J_favorite" href="javascript:;"><i class="iconfont icon-favorite"></i>收藏 </a>
                                <a class="compare-btn-list" id="J_compare" data-mtype="store_de_compare"><i class="iconfont icon-duibi compare-duibi"></i><span>对比</span></a>
                            </div>
                        </div>
                        <div class="property" id="property">
                                <div class="property-hd">
                                    <h1>魅蓝 6T</h1>

                                    <p class="mod-info active">限时享6期免息</p>
                                </div>
                                <div class="property-sell">
                                    <dl class="property-sell-price clearfix">
                                        <dt class="vm-metatit" id="J_discountTag">价<span class="s-space"></span><span
                                                class="s-space"></span>格：
                                        </dt>
                                        <dd>
                                            <div class="mod-price">
                                                <small>¥</small>
                                                <span id="J_price" class="vm-money"></span>
                                            </div>
                                            <div class="mod-original" id="J_originalPrice" style="display:none;"></div>
                                            <div class="mod-activity">
                                            </div>
                                            <div class="mod-countdown" id="J_discountCountDown" style="display:none;">
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
                                    <dl data-property="型号" class="property-sibling-item">
                                        <dt class="vm-metatit">
                                                型<span class="s-space"></span><span class="s-space"></span>号：
                                        </dt>
                                        <dd class="clearfix">
                                                    <a href="//detail.meizu.com/item/meilan_6.html?click=store_de_sib_1" data-itemid="11126" class="prop" data-mtype="store_de_sib_1">魅蓝 6</a>
                                                    <a href="javascript:;" data-itemid="11737" class="prop selected" data-mtype="store_de_sib_2">魅蓝 6T</a>
                                        </dd>
                                    </dl>
                                </div>
                                <div class="property-set">
                                        <dl class="property-set-sale" data-property="网络类型">
                                            <dt class="vm-metatit">网络类型：</dt>
                                            <dd class="clearfix">
                                                    <a data-value="14:18238"
                                                    
                                                    data-mtype="store_de_sp_1_1" href="#"
                                                    title="全网通公开版">
                                                            <span>全网通公开版</span>
                                                    </a>
                                            </dd>
                                        </dl>
                                        <dl class="property-set-sale" data-property="颜色分类">
                                            <dt class="vm-metatit">颜色分类：</dt>
                                            <dd class="clearfix">
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
                                        <dl class="property-set-sale" data-property="内存容量">
                                            <dt class="vm-metatit">内存容量：</dt>
                                            <dd class="clearfix">
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
                                        <dl class="property-set-package" id="propertyPackage" data-property="套餐">
                                            <dt class="vm-metatit">套<span class="s-space"></span><span class="s-space"></span>餐：</dt>
                                            <dd class="package">
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
                                            <dt class="vm-metatit">支<span class="s-space"></span><span class="s-space"></span>持：
                                            </dt>
                                            <dd class="mod-bd" id="J_prodService">
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
                                            <dt class="vm-metatit">配<span class="s-space"></span><span class="s-space"></span>送：</dt>
                                            <dd class="mod-site clearfix">
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
                                            <dt class="vm-metatit">服<span class="s-space"></span><span class="s-space"></span>务：
                                            </dt>
                                            <dd class="clearfix">
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
                                    <dl class="property-buy-quantity">
                                        <dt class="vm-metatit">数<span class="s-space"></span><span class="s-space"></span>量：
                                        </dt>
                                        <dd class="clearfix">
                                            <div class="mod-control">
                                                <a title="减少" href="javascript:;" class="vm-minus">-</a>
                                                <input type="text" value="1" id="J_quantity"
                                                    data-max="1">
                                                <a title="增加" href="javascript:;" class="vm-plus">+</a>
                                            </div>
                                        </dd>
                                    </dl>
                                    <div class="property-buy-action">

                                        <a data-mtype="store_de_buy" href="javascript:void(0);" id="J_btnBuy" class="btn btn-danger btn-lg mr20 "><i></i>立即购买</a>
                                        <a data-mtype="store_de_cart" href="javascript:void(0);" id="J_btnAddCart" class="btn btn-primary btn-lg hide"><i></i>加入购物车</a>
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
                    </section>
                </div>


                    
            </div>
        
            
            <el-tabs v-model="activeName" >
                <el-tab-pane label="商品详情" name="first">
                    商品详情
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
                activeName: 'first'
            }
        },
        components:{
            ShopHeader,
            ShopFooter
        }
    }
</script>

<style scoped lang="scss">
    .shop-product{
        width: 100%;
        .product-main{
            width: 1240px;
            margin: 0 auto;
        }
    }
</style>