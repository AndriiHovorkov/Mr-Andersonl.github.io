<template>
    <div class="ProductList">
        <Select
            :options="options"
            @select="optionSelect"
            :selected="selected"
        />
        <div class="range-slider">
            Min Price: {{minPrice}}
            <input 
                type="range" 
                min="0" 
                max="70" 
                step="10"
                v-model.number="minPrice"
                @change="setRangeSliders"
            >
            Max Price: {{maxPrice}}
            <input 
                type="range" 
                min="0" 
                max="70" 
                step="10"
                v-model.number="maxPrice"
                @change="setRangeSliders"
            >
        </div>

        <p>Products</p>

        <div class="cont">
            <ProductItem
                v-for="(products, index) in sortedPro" :key="index"
                v-bind:products="products"
                @sendId="showCons"
            /> 
        </div>
    </div>

</template>


<script>
    import Select from '../Select/Select.vue'
    import ProductItem from '../ProductItem/ProductItem.vue'
    export default {
        name:'ProductList',
        components: {
            ProductItem,
            Select 
        },
        computed:{
            sortedPro(){
                if(this.sortedProducts.length){
                    return this.sortedProducts
                } else {
                    return this.products
                }
            }
        },
        methods:{
            showCons(data){
                console.log(data)
            },
            optionSelect(option){
                this.selected = option.name
                this.sortedProducts =[];
                let vm = this
                this.products.map((item) => {
                    if(option.velue == 'high'){
                        vm.sortedProducts.push(item)
                        vm.sortedProducts.sort((a, b) => Number(b.price) - Number(a.price));
                    }
                    if(option.velue == 'low'){
                        vm.sortedProducts.push(item)
                        vm.sortedProducts.sort((a, b) => Number(a.price) - Number(b.price));
                    }
                    if(option.velue == 'A'){
                        vm.sortedProducts.push(item)
                        vm.sortedProducts.sort((a, b) => a.name.localeCompare(b.name))
                    }
                    if(option.velue == 'B'){
                        vm.sortedProducts.push(item)
                        vm.sortedProducts.sort((a, b) => b.name.localeCompare(a.name))
                    }
                })
            },
            setRangeSliders() {
                if(this.minPrice > this.maxPrice) {
                    let tmp =this.maxPrice;
                    this.maxPrice =this.minPrice;
                    this.minPrice = tmp
                }
                this.sortCategories()
            },
            sortCategories(category){
                let vm = this
                this.sortedProducts =[...this.products]
                this.sortedProducts = this.sortedProducts.filter((item)=>{
                    return item.price >= vm.minPrice && item.price <= vm.maxPrice
                })
                if(category){
                    this.sortedProducts = this.sortedProducts.filter((e)=>{
                        vm.selected === category.name
                        return e.category === category.name
                    })
                }
            }
        },
        data() {
            return {
                products: [
                    /* {id:1048, brand: 'colourpop', name: 'Lippie Pencil', price: 5, image:"https://cdn.shopify.com/s/files/1/1338/0845/collections/lippie-pencil_grande.jpg?v=1512588769"  },
                    {id:1043, brand: 'colourpop', name: 'Lippie_1', price: 5, image:"https://cdn.shopify.com/s/files/1/1338/0845/collections/lippie-pencil_grande.jpg?v=1512588769"  },
                    {id:1053, brand: 'colourpop', name: 'Pencil_1', price: 5, image:"https://cdn.shopify.com/s/files/1/1338/0845/collections/lippie-pencil_grande.jpg?v=1512588769"  }, */
                ],
                options:[
                    {name:'Все', velue: 'All'},
                    {name:'По цене (возростание)', velue: 'high'},
                    {name:'По цене (убывание)', velue: 'low'},
                    {name:'А до Я', velue: 'A'},
                    {name:'Я до А', velue: 'B'}
                ],
                selected:'Все',
                sortedProducts: [],
                minPrice: 0,
                maxPrice: 70,
            }
        },
        mounted(){
            fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
                .then(response =>  response.json())
                .then(json => {this.products = json  });
                this.ortCategories()
        },
    }
</script>

<style scoped>
    .cont {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    .range-slider {
        width: 200px;
        display: flex;
        flex-direction: column;

    }
    

</style>