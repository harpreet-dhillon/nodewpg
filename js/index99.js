let result = 0;
let number =0;
for(var i = 0; i < 1000; i++){
    if(i % 2 ===0){
        result = i + result;
        console.log(result);
        number++;
    }
    if(number >= 20){
        break;
    }
}