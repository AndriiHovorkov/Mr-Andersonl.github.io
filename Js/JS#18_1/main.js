window.addEventListener('load', function(){
    const click1 = document.querySelector('.click1')
    const click2 = document.querySelector('.click2')
    const count1 = document.querySelector('.count1')
    const count2 = document.querySelector('.count2')
    const contein1 = document.querySelector('.contein1')
    const contein2 = document.querySelector('.contein2')
    const ClearCounter = document.querySelector('.ClearCount')
    const setCounter = document.querySelector('.set_counter')

    function getR(min, max) {
        return Math.floor(Math.random()*(max-min) - min)
    }

    function PlusMin(){

        click1.addEventListener('click', function () {
            const BlockColot1 = localStorage.Block_color1;
            const BlockCost1 = localStorage.Block_click1;
            localStorage.Block_color1 ='rgb('+getR(0, 256)+', '+getR(0, 256)+', '+getR(0, 256)+')';
            localStorage.Block_click1 = BlockCost1 === undefined ? 1: Number(BlockCost1) + 1;
            renderClick()
        })

        click2.addEventListener('click', function () {
            const BlockColot2 = localStorage.Block_color2;
            const BlockCost2 = localStorage.Block_click2;
            localStorage.Block_color2 ='rgb('+getR(0, 256)+', '+getR(0, 256)+', '+getR(0, 256)+')';
            localStorage.Block_click2 = BlockCost2 === undefined ? 1: Number(BlockCost2) + 1;
            renderClick()
        })

        ClearCounter.addEventListener('click', function () {
            const BlockCost1 = localStorage.Block_click1;
            const BlockColot1 = localStorage.Block_color1;
            localStorage.Block_click1 = 0;
            count1.innerHTML = 0;
            localStorage.Block_color1 = 'rgb('+256+', '+256+', '+256+')';
            contein1.style.backgroundColor = 'rgb('+256+', '+256+', '+256+')';

            const BlockCost2 = localStorage.Block_click2;
            const BlockColot2 = localStorage.Block_color2;
            localStorage.Block_click2 = 0;
            count2.innerHTML = 0;
            localStorage.Block_color2 = 'rgb('+256+', '+256+', '+256+')';
            contein2.style.backgroundColor = 'rgb('+256+', '+256+', '+256+')';
        })
    } 
    function renderClick(){
        const BlockCost1 = localStorage.Block_click1;
        const BlockColot1 = localStorage.Block_color1;
        count1.innerHTML =BlockCost1 === undefined ? 0: BlockCost1;
        contein1.style.backgroundColor = BlockColot1;
        
        if(localStorage.Block_click1 >= 50){
            contein1.style.backgroundColor = 'rgb('+256+', '+256+', '+256+')';
            localStorage.Block_click1 = 50;
            count1.innerHTML = 50;
        }

        const BlockCost2 = localStorage.Block_click2;
        const BlockColot2 = localStorage.Block_color2;
        count2.innerHTML =BlockCost2 === undefined ? 0: BlockCost2;
        contein2.style.backgroundColor = BlockColot2;
        
        if(localStorage.Block_click2 >= 50){
            contein2.style.backgroundColor = 'rgb('+256+', '+256+', '+256+')';
            localStorage.Block_click2 = 50;
            count2.innerHTML = 50;
        }
        prom()
    }
    PlusMin()
    renderClick()
    function prom(){
        const BlockColot1 = localStorage.Block_color1;
        const BlockColot2 = localStorage.Block_color2;
        setCounter.addEventListener('click', function () {
            let idBlock = prompt("Id block ? id-1 or id-2","id-1");
            let numberBlock = +prompt("Number");
            if(isNaN(numberBlock)){
                numberBlock = +prompt("It's not a numbet, enter the number");
            }

            if(idBlock == 'id-1' || idBlock == 'id-2'){
                if(idBlock == 'id-1'){
                    localStorage.Block_click1 = numberBlock;
                    count1.innerHTML = numberBlock;
                    localStorage.Block_color1 ='rgb('+getR(0, 256)+', '+getR(0, 256)+', '+getR(0, 256)+')';
                    contein1.style.backgroundColor = BlockColot1; 
                    renderClick()
                }
                if(idBlock == 'id-2'){
                    localStorage.Block_click2 = numberBlock;
                    count2.innerHTML = numberBlock;
                    localStorage.Block_color2 ='rgb('+getR(0, 256)+', '+getR(0, 256)+', '+getR(0, 256)+')';
                    contein2.style.backgroundColor = BlockColot2;
                    renderClick()
                }
            }else{
                console.log("Is id undefined")
            }
            if(numberBlock > 50){
                numberBlock = +prompt("Max number = 50","50");
            }
        })
    }
    

    

})