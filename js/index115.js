function getLongerText(string1, string2){
    if(string1.length > string2.length){
        console.log(`${string1} is longer string than ${string2}`);
    }
    else{
        console.log(`${string2} is longer string than ${string1}`);        
    }
}
getLongerText('singh', 'harpreet');