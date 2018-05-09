let selectedColor = '';
function getHexaColor(color){
    switch (color){
        case 'white':
        selectedColor = '#FFFFFF';
        break;
        case 'black':
        selectedColor = '#000000';
        break;
        case 'blue':
        selectedColor = '#0b24fb';
        break;
        case 'green':
        selectedColor = '#0e7e12';
        break;
        case 'yellow':
        selectedColor = '#fffd38';
        break;
        case 'pink':
        selectedColor = '#fec1cc';
        break;
     }
    console.log(selectedColor);
}
getHexaColor('black');