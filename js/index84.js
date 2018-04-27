let star = '*';
do{
    console.log(star);
    star = star + '**';
    star.length = star.length + 2;
}
while(star.length < 15){
}