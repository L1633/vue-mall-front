<template>
    <div class="shop-cart">

        <div class="my-cart">
            <div class="logo"></div>
            <div class="title fl">我的购物车</div>
            <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
            <a href="#/login">登录</a>
            <a href="#/register">注册</a>
        </div>

        <div class="cart-main">
            <div class="cart">
                <div class="item-list-wrap">
                    <div class="cart-item">
                        <div class="cart-item-head">
                            <ul>
                                
                                <li>商品名称</li>
                                <li>单价</li>
                                <li>数量</li>
                                <li>小计</li>
                                <li>操作</li>
                            </ul>
                        </div>
                        <ul class="cart-item-list">
                            <li v-for="(item,index) in cartList" :key="item.id">
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
                </div>
                <div class="cart-foot-wrap clearfix">
                    <div class="cart-foot-inner">

                        <div class="cart-foot-l fl">
                            <div class="item-all-check">
                                <a href="javascipt:;" @click="toggleCheckAll">
                                    <span class="checkbox-btn item-check-btn" v-bind:class="{'check':checkAllFlag}">
                                        <svg class="icon icon-ok"><use xlink:href="#icon-ok"/></svg>
                                    </span>
                                    <span>全选</span>
                                </a>
                            </div>
                        </div>

                        <div class="cart-foot-r">
                            <div class="item-total">
                                总价: <span class="total-price">{{totalPrice}}</span>
                                <!-- Item total: <span class="total-price">{{totalPrice|currency('$')}}</span> -->
                            </div>
                            <div class="btn-wrap fr">
                              <el-button type="primary">
                                <a class="btn btn--red" v-bind:class="{'btn--dis':checkedCount==0}" @click="checkOut">去结算</a>
                              </el-button> 
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <shop-footer></shop-footer>

    </div>
</template>

<script>
    import ShopFooter from '@/components/ShopFooter';    
    export default {
        data() {
            return {
                // cartList:[{"productImage":"1.jpg","salePrice":"129","productName":"小钢炮蓝牙音箱","productId":"201710017","_id":{"$oid":"58e7058498dab115d336b3fc"},"productNum":"5","checked":"0"}]
                cartList:[],
                cartIdCollection:[]
            }
        },
        components:{
            ShopFooter
        },
        created(){
          this.init();
        },
        computed:{
          checkAllFlag(){
            return this.checkedCount == this.cartList.length;
          },
          checkedCount(){
            var i = 0;
            this.cartList.forEach((item)=>{
              if(item.checked=='1')i++;
            })
            return i;
          },
          totalPrice(){
            var money = 0;
            this.cartList.forEach((item)=>{
              if(item.checked=='1'){
                money += parseFloat(item.productSku.product.price)*parseInt(item.amount);
              }
            })
            return money;
          }
        },
        methods: {
            init(){
              this.axios.get('/cart')
              .then(res=>{
                console.log(res,'购物车')
                this.cartList = res.data.list;
                this.cartList.forEach(item=>{
                  item.checked = '0';
                })
                console.log(this.cartList,'购物车2')
              })
              .catch(err=>{

              })
            },
            deleteRow(index, rows) {
                rows.splice(index, 1);
            },
            toggleSelection(){

            },
            editCart(flag,item,index){
              if(flag=='add'){
                  item.amount++;
                }else if(flag =='minu'){
                  if(item.amount<=1){
                    return;
                  }
                  item.amount--;
                }else{
                  // item.checked = item.checked == '1'? '0':'1';
                  //替换数组
                  const obj = this.cartList[index];
                  obj.checked = obj.checked == '1'? '0':'1';
                  this.$set(this.cartList,index,obj);
                }
                // this.axios.post("/users/cartEdit",{
                //   productId:item.productId,
                //   productNum:item.productNum,
                //   checked:item.checked
                // }).then((response)=>{
                //     let res = response.data;
                //     if(res.status=="0"){
                //       this.$store.commit("updateCartCount",flag=="add"?1:-1);
                //     }
                // })
                this.axios.put(`/cart/${item.id}`,{
                  id:item.id,
                  amount:item.amount
                }).then((res)=>{
                    console.log(res,'加减的反馈')
                    // let res = response.data;
                    // if(res.status=="0"){
                    //   this.$store.commit("updateCartCount",flag=="add"?1:-1);
                    // }
                })
            },
            toggleCheckAll(){
                var flag = !this.checkAllFlag;
                this.cartList.forEach((item)=>{
                  item.checked = flag?'1':'0';
                })
                // this.axios.post("/users/editCheckAll",{
                //   checkAll:flag
                // }).then((response)=>{
                //     let res = response.data;
                //     if(res.status=='0'){
                //         console.log("update suc");
                //     }
                // })
            },
            // 结算    去创建订单
            checkOut(){
                this.cartList.forEach((item)=>{
                  if(item.checked == '1'){
                    this.cartIdCollection.push(item.id);
                  }
                })
                this.axios.post('/cart/settle',{
                  cartIdCollection:this.cartIdCollection
                })
                .then(res=>{
                  console.log(res,'获取所选的商品');
                  if(res.data.status_code == 0){
                     this.$router.push({name:'checkout',params:{orderInfo:res.data.list}});
                  }
                })
                .catch(err=>{

                })
               
            },
            delCartConfirm(id,index){
                this.$confirm('您确定要删除该商品吗？', '提示', {
                  confirmButtonText: '删除',
                  cancelButtonText: '取消',
                  type: 'warning'
                }).then(() => {
                  this.axios.delete(`/cart/${id}`)
                .then(res=>{
                    console.log(res);
                    if(res.data.status_code == 0){
                        this.cartList.splice(index,1);
                        this.$message({
                            message: "删除成功",
                            type: 'success'
                        });
                    }
                  })
                  .catch(err=>{
                    console.log(err)
                  })
                }).catch(() => {
                  this.$message({
                    type: 'info',
                    message: '已取消删除'
                  });          
                });
                
            }
        },
    }
</script>

<style scoped lang="scss">
    .shop-cart{
        width: 100%;
        .my-cart{
            width: 1240px;
            height: 80px;
            line-height: 80px;
            margin:0 auto;
            border-bottom: 1px solid #f8fcff;
        }
        .cart-main{
            width: 1240px;
            margin:0 auto;
            background-color: #f8fcff;
        }
    }

.cart-item {
  display: table;
  width: 100%;
}

.cart-item-head {
  display: table-header-group;
  width: 100%;
}

.cart-item-head ul {
  display: table-row;
  width: 100%;
}

.cart-item-head li {
  display: table-cell;
  height: 40px;
  line-height: 40px;
  background: #fff;
  color: #424242;
  border-bottom: 1px solid #e9e9e9;
  text-align: center;
  text-transform: uppercase;
  font-family: "moderat", sans-serif;
  letter-spacing: .25em;
}

.cart-item-head li:nth-child(2), .cart-item-head li:nth-child(3), .cart-item-head li:nth-child(4), .cart-item-head li:nth-child(5) {
  /*width: 11%;*/
  padding: 0 10px;
}

.cart-item-list {
  display: table-row-group;
}

.cart-item-list > li {
  position: relative;
  display: table-row;
  padding: 32px 0;
  background: #fff;
}

.cart-item-list > li > div {
  position: relative;
  display: table-cell;
  text-align: center;
  vertical-align: top;
  border-bottom: 1px solid #e9e9e9;
  height: 100%;
}

.cart-item-list > li.disabled {
  background: #e9e9e9;
}

.cart-item-list > li.disabled .item-check-btn {
  background: #ccc;
}

.cart-item-list > li.disabled > div:after {
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  width: 100%;
  height: 100%;
  z-index: 5;
}

.cart-item-list > li.item-has-include .cart-item-title {
  display: block;
  min-height: 66px;
  padding-left: 160px;
}

.cart-item-list .cart-tab-1 {
  min-height: 72px;
  padding: 32px 0 32px 0;
  text-align: left;
  border-left: 1px solid #e9e9e9;
}

.cart-item-list .cart-tab-2 {
  padding-top: 64px;
}

.cart-item-list .cart-tab-3 {
  padding-top: 48px;
}

.cart-item-list .cart-tab-4 {
  padding-top: 64px;
}

.cart-item-list .cart-tab-5 {
  padding-top: 62px;
  border-right: 1px solid #e9e9e9;
}

.cart-item-list .cart-item-check {
  float: left;
  padding: 30px 0 0 20px;
}

.cart-item-list .cart-item-pic {
  float: left;
  width: 80px;
  height: 80px;
  margin-left: 20px;
  border: 1px solid #e9e9e9;
  overflow: hidden;
}

.cart-item-list .cart-item-pic img {
  width: 100%;
}

.cart-item-list .cart-item-title {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  min-height: 76px;
  padding: 0 20px 0 20px;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.cart-item-list .cart-item-title .item-name {
  width: 100%;
  line-height: 76px;
  color: #000;
  font-family: "moderat", sans-serif;
  font-weight: bold;
}

.cart-item-list .cart-item-title .item-count-down {
  margin-top: 10px;
  font-size: 12px;
}

.cart-item-list .cart-item-title .item-count-down .icon-clock {
  width: 1em;
  height: 1em;
  fill: #605F5F;
  vertical-align: top;
}

.cart-item-list .cart-item-title .item-count-down .item-count-down-time {
  padding: 1px 5px 0 5px;
  background: #f0f0f0;
  color: #605F5F;
}

.cart-item-list .cart-item-title .item-count-down .item-count-down-tips {
  margin-top: 5px;
  color: #ee7a23;
}

.cart-item-list .item-include {
  position: relative;
  width: 96%;
  padding-left: 160px;
}

.cart-item-list .item-include dl {
  padding-right: 60px;
}

.cart-item-list .item-include dl dt {
  float: left;
  width: 4.5em;
}

.cart-item-list .item-include dl dd {
  margin-bottom: 13px;
  padding-left: 4.5em;
  color: #999;
}

.cart-item-list .item-include dl dd:last-child {
  margin-bottom: 0;
}

.cart-item-list .item-include dl:after {
  visibility: hidden;
  display: block;
  content: " ";
  clear: both;
}

.cart-item-list .item-include .item-include-more {
  position: absolute;
  right: 10px;
  top: 0;
}

.cart-item-list .item-stock {
  margin-top: 5px;
  font-size: 12px;
  color: #999;
}

.cart-item-list .item-stock-no {
  color: #d1434a;
}

.cart-item-list .item-price {
  font-size: 16px;
  color: #333;
}

.cart-item-list .item-price-total {
  color: #d1434a;
  font-size: 16px;
}

.cart-item-list .item-edit-btn {
  position: relative;
  z-index: 6;
}

.cart-item-list .item-edit-btn:hover .icon {
  fill: #ee7a23;
}

.item-check-btn {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: #fff;
  border: 1px solid #999;
  border-radius: 50%;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
}

.item-check-btn .icon-ok {
  position: relative;
  display: none;
  width: 100%;
  height: 100%;
  fill: #fff;
  -webkit-transform: scale(0.6);
  -ms-transform: scale(0.6);
  transform: scale(0.6);
  vertical-align: top;
}

.item-check-btn.check {
  background-color: #ee7a23;
  border-color: #ee7a23;
}

.item-check-btn.check .icon-ok {
  display: inline-block;
}

.item-edit-btn {
  display: inline-block;
  width: 20px;
  height: 20px;
}

.item-edit-btn .icon-del {
  width: 100%;
  height: 100%;
  fill: #999;
}
</style>

