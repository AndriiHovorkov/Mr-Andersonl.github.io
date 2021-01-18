window.addEventListener('load', function(){

    class C1{
        constructor(p2) {
            this.p2 = p2;
        }
    }
    
    class C2 extends C1 {
        constructor(p2, p1, p3) {
            super(p2);
            this.p1 = p1;
            this.p3 = p3;
        }
    }
    
    class C3 extends C2 {
        constructor(p2, p1, p3, p4) {
            super(p2, p1, p3);
            this.p4 = p4;
        } 
    }
    
    const chainlet = new C3(1, 2, 3, 4);

    console.log(chainlet);
})