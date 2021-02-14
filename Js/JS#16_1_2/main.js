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
            name: 'Title-1',
            price: '100',
            priceEur: '2.99',
            priceUsd: '3.60',
            image: 'https://images-na.ssl-images-amazon.com/images/I/616MVaXD29L._AC_SX679_.jpg',
        },
        {
            id: "id-2",
            name: 'Title-2',
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

    const minPlu =  document.querySelector('.min-plu');

    minPlu.innerHTML = `${products.map(item => `
        <div class="cont">   
            <button class="sing minus" data-product-id="${item.id}">-</button>
            <span>
                ${item.name}:
                <span id="${item.name}">0</span>
            </span>
            <button class="sing plus" data-product-id="${item.id}">+</button>
        </div>
            
    `).join('')}`;

    const total1 = document.querySelector('#Title-1');
    const total2 = document.querySelector('#Title-2');

    const buttons = productsContainer.querySelectorAll('button.product__action');
    const totalContainer = document.querySelector('#total');

    const minButtons = minPlu.querySelectorAll('button.minus');
    const plusButtons = minPlu.querySelectorAll('button.plus');

    buttons.forEach(btn => {
        btn.addEventListener('click', onButtonAddClick)
    })

    plusButtons.forEach(btn => {
        btn.addEventListener('click', onButtonAddClick)
    })

    minButtons.forEach(btn => {
        btn.addEventListener('click', minClick)
    })

    let cost1 = 0;
    let cost2 = 0;
    const clearAll =  document.querySelector('.clear');
    const selind = document.getElementById("select");

    function Clear(){
        clearAll.addEventListener('click', function () {
            totalContainer.innerHTML = 0;
            total1.innerHTML = 0;
            total2.innerHTML = 0;
            cost1 = 0;
            cost2 = 0;
            totalCost = 0;
        })
    }

    function selindChange() {
        selind.addEventListener('change', function () {
            totalContainer.innerHTML = 0;
            total1.innerHTML = 0;
            total2.innerHTML = 0;
            cost1 = 0;
            cost2 = 0;
            totalCost = 0;
        }) 
    }

    function onButtonAddClick(event, ) {
        const productId = event.target.dataset.productId;
        const currentProduct = products.find(item => item.id == productId);

        if(selind.value == 'value1'){
            totalCost += +currentProduct.price;
        }
        if(selind.value == 'value2'){
            totalCost += +currentProduct.priceEur;
        }
        if(selind.value == 'value3'){
            totalCost += +currentProduct.priceUsd;
        }
        selindChange()
        totalContainer.innerHTML = Math.round(totalCost);

        currentProduct.id === "id-1"? (cost1 += 1, total1.innerHTML = cost1):
            (cost2 += 1, total2.innerHTML = cost2);

        Clear()
    }

    function minClick(event) {
        if(totalCost >= 1){
            const productId = event.target.dataset.productId;
            const currentProduct = products.find(item => item.id == productId);

            function ifMinus(){
                if(selind.value == 'value1'){
                    totalCost -= currentProduct.price;
                }
                if(selind.value == 'value2'){
                    totalCost -= currentProduct.priceEur;
                }
                if(selind.value == 'value3'){
                    totalCost -= currentProduct.priceUsd;
                }
                totalContainer.innerHTML = Math.round(totalCost);
            }

            selindChange()

            if(currentProduct.id =="id-1"){
                if(cost1 >= 1){
                    cost1 -= 1; 
                    total1.innerHTML = cost1;
                    ifMinus();
                }
            }
            if(currentProduct.id =="id-2"){
                if(cost2 >= 1){
                    cost2 -= 1; 
                    total2.innerHTML = cost2;
                    ifMinus();
                }
            }
        }
        Clear()
    }

})
