const evenNumbers = function(){
    for(var i = 0; i < 100; i++){
        if(i % 2 === 0){
            console.log(i);
        }
    }
}

let number = 0;
while(number < 5){
    evenNumbers();
    number++;
}