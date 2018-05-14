let result = 0;
function add(){
    for(let i = 0; i < arguments.length; i++){
        result +=arguments[i];
    }
    return result;
}
console.log(add(5, 4, 1, 10));
console.log(add(5, 5, 4, 4, 8, 8, 6, 6, 9, 9));