<template>
    <div class="shop-cart">
        <div class="my-cart">
            <div class="logo"></div>
            <div class="title">我的购物车</div>
            <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
            <a href="">登录</a>
            <a href="">注册</a>
        </div>

        <div class="cart-main">
            <div class="cart-goods">

                 <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%;">
                    <el-table-column type="selection" width="55"></el-table-column>
                    <el-table-column label="日期" width="120">
                        <template slot-scope="scope">{{ scope.row.date }}</template>
                    </el-table-column>
                    <el-table-column prop="good" label="商品" ></el-table-column>
                    <el-table-column prop="price" label="单价(元)" width="120"></el-table-column>
                    <el-table-column prop="count" label="数量"  width="100">111111</el-table-column>
                    <el-table-column prop="total" label="小计"  width="200"></el-table-column>
                    <el-table-column prop="action" label="操作" width="50" show-overflow-tooltip>
                         <template slot-scope="scope">
                            <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">
                                移除
                            </el-button>
                        </template>
                    </el-table-column>

                </el-table>


            </div>

            <div class="cart-settlement">
                <div style="margin-top: 20px">
                    <el-button @click="toggleSelection()">取消选择</el-button>
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
                tableData: [{
                    date: '2016-05-04',
                    good: '小米8',
                    price: 2699,
                    count: 2,
                    total: '',
                    }, {
                    date: '2016-05-01',
                    good: '魅族16',
                    price: 2698,
                    count: 1,
                    total: '',
                    }, {
                    date: '2016-05-08',
                    good: '小推车',
                    price: 1,
                    count: 22,
                    total: '',
                    },]
            }
        },
        components:{
            ShopFooter
        },
        computed:{
           
        },
        methods: {
            deleteRow(index, rows) {
                rows.splice(index, 1);
            },
            toggleSelection(){

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
            margin:0 auto;
        }
        .cart-main{
            width: 1240px;
            margin:0 auto;
        }
    }
</style>