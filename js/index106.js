function getUserID(){
    return 50;
}
function isUserValid(){
    if(getUserID() > 30){
        return true;
    }
    else{
        return false;
    }
}
if(isUserValid()){
    console.log('User is Valid');
}
else{
    console.log('User is not valid');
}