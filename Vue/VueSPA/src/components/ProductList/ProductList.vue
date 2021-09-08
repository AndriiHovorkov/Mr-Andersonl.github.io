<template>
    <div id="cont">
        <ProductItem
            v-for="(products, index) in products" :key="index"
            v-bind:products="products"
        /> 
    </div>
</template>


<script>
    import ProductItem from '../ProductItem/ProductItem.vue'
    export default {

        props: ['products'],
        components: {
            ProductItem 
        }
    }
</script>

<style scoped>
    #cont {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>