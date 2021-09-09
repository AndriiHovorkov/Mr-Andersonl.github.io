<template>
    <div class="ProductItem">
        <div class="wrap_img"><img :src="products.image_link" alt="image" class="img"/></div>
        <span class="text"> {{products.name}}</span>
        <span class="text"> Brand: {{products.brand}}</span>
        <span class="text"> Colour: {{products.product_colors[0].colour_name}}</span>
        <span class="text">
            Price: {{products.price}}
            <span>{{products.price_sign}}</span>
        </span>
        <button @click="addBasket">Buy</button>
    </div>
</template>


<script>

    export default {
        name:'ProductItem',
        props:{
            products: {
                type: Object,
                required: true
            }
        } ,
        components: {},
        methods:{
            addBasket() {
                this.$emit('sendId', this.products.id)
            }
        }
    }
</script>

<style lang="css" scoped> 
    .ProductItem{
        border: solid 1px black;
        padding: 5px 10px 5px 10px;
        display: flex;
        flex-direction: column;
        width: 200px;
        margin: 10px;
    }
    .text{
        margin-bottom: 10px;
        border-bottom: 1px solid #000;
    }
    .img{
        width: 190px;
        height: 150px;
    }
    .wrap_img{
        margin-bottom: 10px;
    }
</style>