let f1 = -1;
let f2 = 1;
for(let f = 0; f <= 10; f++){
    f = f1 + f2;
    f1 = f2;
    f2 = f;
    console.log(f);
}