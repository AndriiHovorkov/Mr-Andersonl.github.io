window.addEventListener('load', function(){

    const block =document.querySelector('.block')
    const boom =document.querySelector('.boom')

    function eventHandler(event){


        if(event.keyCode == 39 ){
            let nevLeft;
            if(block.style.left == ''){
                nevLeft = 0;
            } else{
                nevLeft = parseInt(block.style.left) + 10;
            }
            block.style.left= `${nevLeft + 10}px`;
        }

        if(event.keyCode == 37 ){
            if(block.style.left == ''){
                nevLeft = 0;
            } else{
                nevLeft = parseInt(block.style.left) - 10;
            }
            block.style.left = `${nevLeft - 10}px`;
        }
        
        if(event.keyCode == 38 ){
            let nevTop;
            if(block.style.top == ''){
                nevTop = 0;
            } else{
                nevTop = parseInt(block.style.top) - 10;
            }
            block.style.top = `${nevTop - 10}px`;
        }

        if(event.keyCode == 40 ){
            if(block.style.top == ''){
                nevTop = 0;
            } else{
                nevTop = parseInt(block.style.top) + 10;
            }
            block.style.top = `${nevTop + 10}px`;
        }
        isBlockInWindow()
    }
    document.addEventListener('keydown', eventHandler);

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

        if (block.offsetLeft + block.offsetWidth >= window.innerWidth) {
            block.style.left = window.innerWidth - block.offsetWidth - 1000  + 'px';        

            boom.style.opacity = 1;

            setTimeout(function() {
                boom.style.opacity = 0;
            }, 2000);

            return false;
        }

        if (block.offsetLeft <= 0) {
            block.style.left = -700 + 'px';
            boom.style.opacity = 1;
            setTimeout(function() {
                boom.style.opacity = 0;
            }, 2000);
            return false;
        }

        if (block.offsetTop + block.offsetHeight >= window.innerHeight) {
            block.style.top = window.innerHeight - block.offsetHeight - 400  + 'px';
            boom.style.opacity = 1;
            setTimeout(function() {
                boom.style.opacity = 0;
            }, 2000);
            return false;
        }

        if (block.offsetTop <= 0) {
            block.style.top = -200  + 'px';
            boom.style.opacity = 1;
            setTimeout(function() {
                boom.style.opacity = 0;
            }, 2000);

            return false;
        }

        return true;
    }
    isBlockInWindow()
})
