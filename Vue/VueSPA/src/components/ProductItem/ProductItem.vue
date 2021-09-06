<template>
    <div>
        <!-- {{product.name}} -->
        {{products.name}}
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