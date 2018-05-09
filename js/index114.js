let newStr = '';
function revert(value){
    for(let i = value.length - 1; i >=0; i--){
        newStr = newStr + value[i];
    }    
    console.log(newStr);
}
revert('hello');