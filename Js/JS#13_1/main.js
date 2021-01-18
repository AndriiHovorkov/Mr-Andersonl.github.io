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
    /* text.addEventListener('keydown', eventHandler); */
    
})