const fibonacci = function(){
    let f =0;
    let f1 =-1;
    let f2 = 1;
    while(f < 10){
        f = f1 + f2;
        f1 = f2;
        f2 = f;
        console.log(f);
    }
}
let number = 0;
while(number < 3){
    fibonacci();
    number++;
}