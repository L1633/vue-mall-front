<template>
    <div>
        <h2>已收藏商品</h2>
        <el-card :body-style="{ padding: '10px' }" v-for="(item,index) in favoriteArr" :key="item.id" class="product-card-item fl" shadow="hover">
            <i class="el-icon-delete" @click="deleteFav(item.id,index)"></i>
            <div class="card-img">
                    <img :src="item.image" class="image">
            </div>
            <div style="padding: 14px;">
                    <p>{{item.title}}</p>
                    <p>{{item.description}}</p>
                    <p>{{item.price}}</p>
                </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
              favoriteArr:[],
            }
        },
        created(){
            this.favorite();
        },
        methods:{
             favorite(){
                this.axios.get("/products/favorites")
                .then( (res)=> {
                    console.log(res)
                    this.favoriteArr = res.data.list;
                })
                .catch( (error)=> {
                    console.log(error);
                });
            },
            deleteFav(id,index){
                this.axios.delete(`/products/${id}/favorite`)
                .then(res => {
                    if(res.data.status_code == 0){
                        this.favoriteArr.splice(index,1);
                        this.$message({
                            message: "取消收藏成功",
                            type: 'success'
                        });
                    }
                })
                .catch( error=> {
                    console.log(error);
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    .product-card-item{
        height: 300px;
        width: 236px;
        margin: 0 0 14px 15px;
        .card-img{
            width: 180px;
            height: 135px;
            margin:36px auto 0;
            .image {
                width: 100%;
                display: block;
            }
        }
        
    }
  
</style>