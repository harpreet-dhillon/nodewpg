let perimeter;
function getShapePerimiter(base, height){
    if(base == height){
        perimeter = 4 * base;
        perimeterBig(perimeter);

    }
    else if(base != height){
        perimeter = 2*(base + height);
        perimeterBig(perimeter);
    }
    console.log(`${perimeter} is the shape of perimeter`);
}
function perimeterBig(perimeter){
    if(perimeter > 100){
        console.log('The perimeter is too big');
    }
    else{
        console.log('The perimeter is fine');
    }
}
getShapePerimiter(30, 30);