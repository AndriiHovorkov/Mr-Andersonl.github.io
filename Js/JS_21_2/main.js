window.addEventListener('load', function(){
    const age = document.querySelector('.age')
    const sand = document.querySelector('.sand')
    const clickMe = document.querySelector('.click_me')
    const  prom = document.querySelector('.prom')
    let letters = /[A-Za-zА-Яа-яЁё]/;
    let ageGroop = [];
    
    function addNumb(){
        age.addEventListener('input', function(){
            this.value = this.value.replace(letters, '');
            return age.value
        })
    
        
        sand.addEventListener('click', event => {
            let time = 1000;
            event.preventDefault
    
            if(age.value !== ''){
                ageGroop.push(Number(age.value))
            }
            
            age.value ='';
    
            age.disabled = true;
            setTimeout(() => {
                age.disabled = false;
            },time)
    
            return ageGroop;
            
        })
        return ageGroop;
    }

    const clickProm = new Promise((resolve, reject) => {
        clickMe.addEventListener('click', function(){
            resolve();
            
        })
    });
    clickProm
        .then(() => {
            prom.classList.remove("none");
            addNumb();
            let thisTime = 10000;
            setTimeout(() => {
                prom.classList.add("none");
                console.log(ageGroop)
            },thisTime)
        })
})