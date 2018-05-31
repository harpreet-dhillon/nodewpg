const greet = (firstname, lastname) => `Hi ${firstname} ${lastname}`;
const greetMessage = greet('Harpreet', 'Dhillon');
console.log(greetMessage);

// Extra
const callbackFunction = () => console.log('This code gets executed after the greet function call');

const greet2 = (firstname, lastname, extraFunction) => {
    console.log(`Hi ${firstname} ${lastname}`);
    extraFunction();
}

greet2('Harpreet', 'Dhillon', callbackFunction);