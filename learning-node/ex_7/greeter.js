// const callbackFunction = () => console.log('This code gets executed after the greet function call');

const greet = (firstname, lastname, extraFunction) => {
    console.log(`Hi ${firstname} ${lastname}`);
    extraFunction();
}

// greet('Harpreet', 'Dhillon', callbackFunction);

module.exports = greet;