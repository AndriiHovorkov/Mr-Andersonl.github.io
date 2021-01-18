window.addEventListener('load', function(){

    class C1{
        constructor() {
            this.property1 = 'p2';
        }
    }
    
    
    class C2 extends C1 {
        constructor() {
            super();
            this.property2 = 'p1';
            this.property3 = 'p3';
        }
    }
    
    class C3 extends C2 {
        constructor() {
            super();
            this.property4 = 'p4';
        } 
    }
    
    const chainlet = new C3();
    console.log(chainlet);

})