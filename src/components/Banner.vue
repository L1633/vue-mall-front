<template>
    <div class="shop-banner">
        <div class="banner">
            <slot name="banner"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="scss">
    .shop-banner{
        width: 100%;
        height: 120px;
        margin:40px 0;
        .banner{
            width: 1240px;
            height: 120px;
            margin: 0 auto;
        }
    }
</style>