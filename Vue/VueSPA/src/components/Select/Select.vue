<template>
    <div class="Select">
        <p 
            class="title"
            @click="areOptionsVisible = !areOptionsVisible"
        >{{selected}}</p>

        <div 
            class="options"
            v-if="areOptionsVisible"
        >
            <p
                v-for="options in options"
                :key="options.velue"
                @click="selectOption(options)"
            >
                {{options.name}}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Select',
        props:{
            options:{
                type: Array,
                default() {
                    return[]
                }
            },
            selected:{
                type: String,
                default:''
            }
        },
        data(){
            return{
                areOptionsVisible: false
            }
        },
        methods:{
            selectOption(options) {
                this.$emit('select', options)
                this.areOptionsVisible = false;
            },
            hideSelect(){
                this.areOptionsVisible = false;
            }
        },
        mounted(){
            document.addEventListener('click', this.hideSelect.bind(this),true)
        },
        beforeDestroy(){
            document.removeEventListener('click', this.hideSelect)
        }
    }
</script>

<style scoped>
    .Select{
        position: relative;
        width: 200px;
        top: -25px;
    }
    .Select p {
        margin: 0;
    }
    .options {
        border: solid 1px #aeaeae;
        position: absolute;
        top: 20px;
        right: 0;
        width: 100%;
        cursor: pointer;
        background: #fff;
    }
    .options p:hover {
        background: #e7e7e7;
    }
    .title {
        border: solid 1px #aeaeae;
        cursor: pointer;
    }

</style>