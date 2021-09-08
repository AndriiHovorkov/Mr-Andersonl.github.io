<template>
    <div>
        <ProductList
            v-bind:products="products"
        />
    </div>
</template>


<script>
    import ProductList from '../ProductList/ProductList.vue'

    export default {

        data() {
            return {
                products: [
                    /* {id:1048, brand: 'colourpop', name: 'Lippie Pencil', price: 5, image:"https://cdn.shopify.com/s/files/1/1338/0845/collections/lippie-pencil_grande.jpg?v=1512588769"  },
                    {id:1043, brand: 'colourpop', name: 'Lippie_1', price: 5, image:"https://cdn.shopify.com/s/files/1/1338/0845/collections/lippie-pencil_grande.jpg?v=1512588769"  },
                    {id:1053, brand: 'colourpop', name: 'Pencil_1', price: 5, image:"https://cdn.shopify.com/s/files/1/1338/0845/collections/lippie-pencil_grande.jpg?v=1512588769"  }, */
                ]
            }
        },
        mounted(){
            fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
                .then(response =>  response.json())
                .then(json => {this.products = json  });
        },
        components: {
            ProductList
        }
    }
</script>