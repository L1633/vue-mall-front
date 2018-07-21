<template>
    <div class="product-cards">
        <div class="product-main clearfix">

            <div class="product-title">
                <slot name="title"></slot>
            </div> 

            <div class="product-card">
                <slot name="product-card"></slot>
            </div>


        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="scss">
    .product-cards{
        width: 100%;
        margin-bottom: 22px;
        // height: 686px;
        .product-main{
            width: 1240px;
            // padding-left: 14px;
            height: 100%;
            margin: 0 auto;
            background-color: #fff;
            .product-title{
                width: 100%;
                height: 58px;
                line-height: 58px;
            }
            .product-card{
                width: 100%;
            }
        }
    }
</style>