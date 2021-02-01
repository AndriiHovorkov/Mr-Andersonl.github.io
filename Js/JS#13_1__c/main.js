window.addEventListener('load', function(){

    const Mario = document.querySelector('.Mario')
    const block =document.querySelector('.block')

    function eventHandler(event){

        /* console.log(event.type, event) */

        if(event.keyCode == 39 ){
            Mario.style.transform = 'rotateY(' + 360 + 'deg)';
            let nevLeft;
            if(Mario.style.left == ''){
                nevLeft = 0;
            } else{
                nevLeft = parseInt(Mario.style.left) + 5;
                let botderRight = 610;
                if(nevLeft > botderRight){
                    nevLeft = 610;
                }
            }
            Mario.style.left = `${nevLeft + 5}px`;
        }

        if(event.keyCode == 37 ){
            Mario.style.transform = 'rotateY(' + 180 + 'deg)';
            if(Mario.style.left == ''){
                nevLeft = 0;
            } else{
                nevLeft = parseInt(Mario.style.left) - 5;
                let botderLeft = -10;
                if(nevLeft < botderLeft){
                    nevLeft = -10;
                }
            }
            Mario.style.left = `${nevLeft - 5}px`;
        }
        if(event.keyCode == 17 ){
            let A = 100;
            let B = 40;
            let C = 15;
            let nevHeight = A  - A  * B/A ;
            Mario.style.height = `${nevHeight}px`;
            let nevWidth= A + A * C/A;
            Mario.style.width= `${nevWidth}px`;
        }
        
        if(event.keyCode == 38 ){
            let nevBottom;
            if(Mario.style.bottom == ''){
                nevBottom = 0;
            } else{
                nevBottom = parseInt(Mario.style.bottom) + 5;
                let botderTop = 260;
                if(nevBottom > botderTop){
                    nevBottom = 260;
                }
            }
            Mario.style.bottom = `${nevBottom + 5}px`;
        }

        if(event.keyCode == 40 ){
            let nevBottom;
            if(Mario.style.bottom == ''){
                nevBottom = 0;
            } else{
                nevBottom = parseInt(Mario.style.bottom) - 5;
                let botderBottom = 0;
                if(nevBottom < botderBottom){
                    nevBottom = 5;
                }
            }
            Mario.style.bottom = `${nevBottom - 5}px`;
        }
        
        

        if(event.keyCode == 32){
            if(Mario.style.bottom == ''){
                nevBottom = 45;
            } else{
                nevBottom = parseInt(Mario.style.bottom) + 45; 
                let botderTop = 260;
                if(nevBottom > botderTop){
                    nevBottom = 260;
                }
            }
            Mario.style.bottom = `${nevBottom + 45}px`;
        }

        
    }

    function eventHandlerUp(event){
        if(event.keyCode == 32){
            nevBottom = parseInt(Mario.style.bottom) - 45; 
            Mario.style.bottom = `${nevBottom -  45}px`;
        }

        if(event.keyCode == 17 ){
            nevHeight = 100 ;
            Mario.style.height = `${nevHeight}px`;
            nevWidth= 100;
            Mario.style.width= `${nevWidth}px`;
        }
    }

    document.addEventListener('keydown', eventHandler);
    document.addEventListener('keyup', eventHandlerUp);
    


// contextmenu   ДЗ 21. #17_1       ____________________________________________________________________________________________________

    document.addEventListener("contextmenu", event =>{
        event.preventDefault()
        document.getElementById('menu_doc').classList.add('active');
        return false;
    })

    Mario.addEventListener("contextmenu", event =>{
        event.preventDefault()
        event.stopPropagation()
        document.getElementById('menu').classList.add('active');
        return false;
    })

    document.onclick = function () { 
        document.getElementById('menu').classList.remove('active');
        document.getElementById('menu_doc').classList.remove('active');
    };

    const contextMenu = document.querySelector('.context_menu');
    const contextMenu_doc = document.querySelector('.context_menu_doc');
    
    document.addEventListener('mouseup', event =>{
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        
        contextMenu.style.left = mouseX + 'px';
        contextMenu.style.top = mouseY +'px';

        contextMenu_doc.style.left = mouseX + 'px';
        contextMenu_doc.style.top = mouseY +'px';

        isBlockInWindow()
    });
    

    let jump = document.getElementById('jump');
    let moveLeft = document.getElementById('MoveLeft')
    let moveRight = document.getElementById('MoveRight')
    let changeColor = document.getElementById('ChangeColor')
    let ChangeImage = document.getElementById('ChangeImage')

    jump.onclick  = function () {
        if(Mario.style.bottom == ''){
            nevBottom = 45;
        } else{
            nevBottom = parseInt(Mario.style.bottom) + 45; 
            let botderTop = 260;
            if(nevBottom > botderTop){
                nevBottom = 260;
            }
        }
        Mario.style.bottom = `${nevBottom + 45}px`;
        setTimeout(() => {

            nevBottom = parseInt(Mario.style.bottom) - 45; 
            Mario.style.bottom = `${nevBottom -  45}px`;
        },150);
    };

    moveLeft.onclick  = function () {
        Mario.style.transform = 'rotateY(' + 180 + 'deg)';
        if(Mario.style.left == ''){
            nevLeft = 0;
        } else{
            nevLeft = parseInt(Mario.style.left) - 5;
            let botderLeft = -10;
            if(nevLeft < botderLeft){
                nevLeft = -10;
            }
        }
        Mario.style.left = `${nevLeft - 5}px`;
    };

    moveRight.onclick  = function () {
        Mario.style.transform = 'rotateY(' + 360 + 'deg)';
        let nevLeft;
        if(Mario.style.left == ''){
            nevLeft = 0;
        } else{
            nevLeft = parseInt(Mario.style.left) + 5;
            let botderRight = 610;
            if(nevLeft > botderRight){
                nevLeft = 610;
            }
        }
        Mario.style.left = `${nevLeft + 5}px`;
    }; 

    function getR(min, max) {
        return Math.floor(Math.random()*(max-min) - min)
    }

    changeColor.onclick  = function () {
        Mario.style.backgroundColor = 'rgb('+getR(0, 256)+', '+getR(0, 256)+', '+getR(0, 256)+')';
    };

    ChangeImage.onclick  = function () {
            var imgs=new Array(
                'https://i.gifer.com/33HU.gif',
                'https://i.gifer.com/origin/78/787899e9d4e4491f797aba5c61294dfc_w200.gif',
                'https://i.gifer.com/3Z8.gif',
                'https://www.meme-arsenal.com/memes/c52027c7fc13528b4ede256b1ccaf743.jpg',
                'https://st4.depositphotos.com/2419757/20318/v/600/depositphotos_203182236-stock-illustration-game-character-man-icon-color.jpg'
            );

            var rand = imgs[Math.floor(Math.random() * imgs.length)];
            Mario.src = rand;
    };

    
    let addCharacter = document.getElementById('Add_Character');
    let removeCharacter = document.getElementById('Remove_Character')
    let resetPosition = document.getElementById('ResetPosition')

    addCharacter.onclick  = function () {
        Mario.style.opacity="1"
    };

    removeCharacter.onclick  = function () {
        Mario.style.opacity="0"
    };


    resetPosition.onclick  = function () {
        Mario.style.bottom ="0"
        Mario.style.left ="0"
    };



    let throttle = false;
    const throttleTime = 100;

    function isBlockInWindow() {
        if (throttle == true) {
            return true;
        }

        throttle = true;
        setTimeout(() => {
            throttle = false;
        }, throttleTime);

        if (contextMenu_doc.offsetLeft + contextMenu_doc.offsetWidth >= window.innerWidth) {
            contextMenu_doc.style.left = window.innerWidth - contextMenu_doc.offsetWidth - 10  + 'px';        
            return false;
        }

        if (contextMenu_doc.offsetLeft <= 0) {
            contextMenu_doc.style.left = -10 + 'px';
            return false;
        }

        if (contextMenu_doc.offsetTop + contextMenu_doc.offsetHeight >= window.innerHeight) {
            contextMenu_doc.style.top = window.innerHeight - contextMenu_doc.offsetHeight - 10  + 'px';
            return false;
        }

        if (contextMenu_doc.offsetTop <= 0) {
            contextMenu_doc.style.top = -10  + 'px';
            return false;
        }

        return true;
    }
})