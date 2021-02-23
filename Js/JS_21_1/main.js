window.addEventListener('load', function(){
    const name = document.querySelector('#name')
    const age = document.querySelector('#age')
    const sand = document.querySelector('.sand')
    let letters = /[A-Za-zА-Яа-яЁё]/;
    let numb = /[0-9]/;

    function request(options = {}){
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState == 4 && options.success) {
                options.success(xhr.responseText)
            }
        })
        xhr.open(options.method, options.url, true);
    
        xhr.send(JSON.stringify(options.body)); // 1s
    }

    name.addEventListener('input', function(){
        this.value = this.value.replace(numb, '');
        return name.value 
    })
    age.addEventListener('input', function(){
        this.value = this.value.replace(letters, '');
        return age.value
    })
    
    sand.addEventListener('click', event => {
        event.preventDefault

        let body = { 
            name: name.value,
            age:  age.value,
        };

        request({
            method: 'POST',
            body,
            url: '/registration'
        });
    })
})
