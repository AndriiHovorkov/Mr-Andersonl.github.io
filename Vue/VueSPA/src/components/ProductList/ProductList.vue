<template>
    <div class="ProductList">
        <Select
            :options="options"
            @select="optionSelect"
            :selected="selected"
        />

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
        props: ['products'],
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
            }
        },
        data() {
            return {
                options:[
                    {name:'Все', velue: 'All'},
                    {name:'По цене (возростание)', velue: 'high'},
                    {name:'По цене (убывание)', velue: 'low'},
                    {name:'А до Я', velue: 'A'},
                    {name:'Я до А', velue: 'B'}
                ],
                selected:'Все',
                sortedProducts: []
            }
        }
    }
</script>

<style scoped>
    .cont {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>