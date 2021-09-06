<template>
    <div>
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