<template id="item">
    <div id="comp">
        <div id="wrap_img"><img :src="products.image_link" alt="image" id="img"/></div>
        <span> {{products.name}}</span>
        <span> Brand: {{products.brand}}</span>
        <span> Colour: {{products.product_colors[0].colour_name}}</span>
        <span> Price: {{products.price}}</span>
        <button>Buy</button>
    </div>
    
</template>


<script>

    export default {
        props:{
            products: {
                type: Object,
                required: true
            }
        } ,
        components: {
        }
    }
</script>

<style lang="css" scoped> 
    #comp{
        border: solid 1px black;
        padding: 5px 10px 5px 10px;
        display: flex;
        flex-direction: column;
        width: 200px;
        margin: 10px;
    }
    span{
        margin-bottom: 10px;
        border-bottom: 1px solid #000;
    }
    #img{
        width: 190px;
        height: 150px;
    }
    #wrap_img{
        margin-bottom: 10px;
    }
</style>