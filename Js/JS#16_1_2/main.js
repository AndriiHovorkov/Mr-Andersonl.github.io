window.addEventListener('load', function(){

    /*
        1. Quantity by product
        2. Добавить кнопку Clear all
        3. Вы можете уменьшить\увеличить количество элементов по типу в "корзине". 
        4. Создать select(выпадающий список) конвертации валют. Список имеет 3 валюты - UAH, EUR, USD.
            * Курс валют захардкодить в код
            * Курс применяется только к total
    */

const products = [
    {
        id: "id-1",
        name: 'Title 1',
        price: '100',
        priceEur: '2.99',
        priceUsd: '3.60',
        image: 'https://images-na.ssl-images-amazon.com/images/I/616MVaXD29L._AC_SX679_.jpg',
    },
    {
        id: "id-2",
        name: 'Title 2',
        price: '300',
        priceEur: '8.97',
        priceUsd: '10.81',
        image: 'https://images-na.ssl-images-amazon.com/images/I/616MVaXD29L._AC_SX679_.jpg',
    }
];

let totalCost = 0;
const productsContainer =  document.querySelector('.products');

productsContainer.innerHTML = `${products.map(item => `
    <div class="product solid">   
        <div class="product__title">${item.name}</div>
        <img class="product__image" src="${item.image}">
        <div class="product__price">
            <button class="product__action" data-product-id="${item.id}">Add</button>
            <span>${item.price}</span>
        </div>  
    </div>
`).join('')}`;

const buttons = productsContainer.querySelectorAll('button.product__action');
const totalContainer = document.querySelector('#total')

buttons.forEach(btn => {
    btn.addEventListener('click', onButtonAddClick)
})

/* const cartAmoun = document.querySelector('.cart_amoun');
const buttonsMinPlu = cartAmoun.querySelectorAll('button.sing');

buttonsMinPlu.forEach(btn => {
    btn.addEventListener('click',  onButtonAddClick)
}) */


let cost1 = 0;
let cost2 = 0;
const totalContainer1 = document.querySelector('#total-1')
const totalContainer2 = document.querySelector('#total-2')

const clearAll =  document.querySelector('.clear');
const minusTotal1 = document.querySelector('.minus-total1')
const minusTotal2 = document.querySelector('.minus-total2')
const plusTotal1 = document.querySelector('.plus-total1')
const plusTotal2 = document.querySelector('.plus-total2')

function onButtonAddClick(event) {
    const productId = event.target.dataset.productId;
    const currentProduct = products.find(item => item.id == productId);

    currentProduct.id === "id-1"? (cost1 += 1, totalContainer1.innerHTML = cost1):
        (cost2 += 1, totalContainer2.innerHTML = cost2);

    const selind = document.getElementById("select");

    if(selind.value == 'value1'){
        PlusMin(100, 300, currentProduct.price);
    }
    if(selind.value == 'value2'){
        PlusMin(2.99, 8.97, currentProduct.priceEur);
    }
    if(selind.value == 'value3'){
        PlusMin(3.60, 10.81, currentProduct.priceUsd);
    }
    
    selind.addEventListener('change', function () {
        totalContainer.innerHTML = 0;
        totalContainer1.innerHTML = 0;
        totalContainer2.innerHTML = 0;
        cost1 = 0;
        cost2 = 0;
        totalCost = 0;
        
    })

    clearAll.addEventListener('click', function () {
        totalContainer.innerHTML = 0;
        totalContainer1.innerHTML = 0;
        totalContainer2.innerHTML = 0;
        cost1 = 0;
        cost2 = 0;
        totalCost = 0;
    })

}

function PlusMin(num1, num2, pri){
    totalCost += Number(pri);
    totalContainer.innerHTML = Math.round(totalCost);
    
    minusTotal1.addEventListener('click', function () {
        if(cost1 >= 1){
            totalCost -= num1;
            totalContainer.innerHTML = Math.round(totalCost);
            cost1 -= 1;
            totalContainer1.innerHTML = cost1;
        }
    })

    plusTotal1.addEventListener('click', function () {
        totalCost += num1;
        totalContainer.innerHTML = Math.round(totalCost);
        cost1 += 1;
        totalContainer1.innerHTML = cost1;
    })

    minusTotal2.addEventListener('click', function () {
        if(cost2 >= 1){
            totalCost -= num2;
            totalContainer.innerHTML = Math.round(totalCost);
            cost2 -= 1;
            totalContainer2.innerHTML = cost2;
        }
    })

    plusTotal2.addEventListener('click', function () {
        totalCost += num2;
        totalContainer.innerHTML = Math.round(totalCost);
        cost2 += 1;
        totalContainer2.innerHTML = cost2;
    } )
} 

})
