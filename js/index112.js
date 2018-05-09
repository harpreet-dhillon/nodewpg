function showNumbers(start, end){
    if(typeof start != 'number' || typeof end != 'number'){
        console.log('Please enter only numeric value');
    }
    else if(start > end){
        start--;  
        while(start > end){
            console.log(start);
            start--;
        }
        // for(start--; start > end;start--){
        //     console.log(start);
        // }
    }
    else if(start < end){
        start++;  
        while(start < end){
            console.log(start);
            start++;
        }
        // for(start++; start < end; start++){
        //     console.log(start);  
        // }      
    }
    else if(start == end){
        console.log('both numbers are same');
    }
}
showNumbers(0, 1000);
showNumbers(1000, 0);
showNumbers(100, 100);
showNumbers('100', 300);