const onelinejoke = require('one-liner-joke');
const joke = onelinejoke.getRandomJoke();
// Show a random joke as output
console.log(`Joke Body: ${joke.body}`);
// Show the joke category as output
console.log(`Joke tags: ${joke.tags}`)