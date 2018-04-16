let playerName = 'Patrik Laine is lame';
let teams = 'New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins';
let message = `Winnipeg is the best Canadian citi, Go Winnipeg`;

playerName = playerName.slice(0, -7).toUpperCase() + playerName.charAt(13).toLowerCase() + playerName.charAt(14).toLowerCase();


teams = teams.charAt(46).toUpperCase() + teams.slice(47, 50);

let message1 = message.slice(11, 21);

let message2 = message.slice(34, -8);

const template = playerName.concat(message1, teams, ' player', message2, teams, '!!');
console.log(template);