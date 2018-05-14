const consoleVariable = 'PS4';
const games = [
    {
        name: 'Crash Bandicoot N. Sane Trilogy',
        price: 1060,
        sold: 20,
        console: 'PS4',
        showDetail: function(){
            console.log(`name: ${this.name}`);
            console.log(`price: ${this.price}`);
            console.log(`sold: ${this.sold}`);
            console.log(`console: ${this.console}`);            
        }
    },
    {
        name: 'Lego Marvel Super Heroes',
        price: 700,
        sold: 25,
        console: 'XBOX',
        showDetail: function(){
            console.log(`name: ${this.name}`);
            console.log(`price: ${this.price}`);
            console.log(`sold: ${this.sold}`);
            console.log(`console: ${this.console}`);            
        }
    },
    {
        name: 'GTA V',
        price: 1449,
        sold: 30,
        console: 'PS4',
        showDetail: function(){
            console.log(`name: ${this.name}`);
            console.log(`price: ${this.price}`);
            console.log(`sold: ${this.sold}`);
            console.log(`console: ${this.console}`);            
        }
    },
    {
        name: 'Mortal Kombat Xl',
        price: 1190,
        sold: 34,
        console: 'PS4',
        showDetail: function(){
            console.log(`name: ${this.name}`);
            console.log(`price: ${this.price}`);
            console.log(`sold: ${this.sold}`);
            console.log(`console: ${this.console}`);            
        }
    },
    {
        name: 'GTA V',
        price: 1250,
        sold: 60,
        console: 'XBOX',
        showDetail: function(){
            console.log(`name: ${this.name}`);
            console.log(`price: ${this.price}`);
            console.log(`sold: ${this.sold}`);
            console.log(`console: ${this.console}`);            
        }
    },
    {
        name: 'FIFA 2017',
        price: 890,
        sold: 15,
        console: 'PS4',
        showDetail: function(){
            console.log(`name: ${this.name}`);
            console.log(`price: ${this.price}`);
            console.log(`sold: ${this.sold}`);
            console.log(`console: ${this.console}`);            
        }
    },
    {
        name: 'Uncharted 4',
        price: 950,
        sold: 30,
        console: 'PS4',
        showDetail: function(){
            console.log(`name: ${this.name}`);
            console.log(`price: ${this.price}`);
            console.log(`sold: ${this.sold}`);
            console.log(`console: ${this.console}`);            
        }
    },
    {
        name: 'Mortal Kombat Xl',
        price: 940,
        sold: 30,
        console: 'XBOX',
        showDetail: function(){
            console.log(`name: ${this.name}`);
            console.log(`price: ${this.price}`);
            console.log(`sold: ${this.sold}`);
            console.log(`console: ${this.console}`);            
        }
    },
    {
        name: 'Need For Speed',
        price: 790,
        sold: 10,
        console: 'PS4',
        showDetail: function(){
            console.log(`name: ${this.name}`);
            console.log(`price: ${this.price}`);
            console.log(`sold: ${this.sold}`);
            console.log(`console: ${this.console}`);            
        }
    },
    {
        name: 'Lego Batman',
        price: 1000,
        sold: 18,
        console: 'PS4',
        showDetail: function(){
            console.log(`name: ${this.name}`);
            console.log(`price: ${this.price}`);
            console.log(`sold: ${this.sold}`);
            console.log(`console: ${this.console}`);            
        }
    },
    {
        name: 'FIFA 17',
        price: 1290,
        sold: 12,
        console: 'PS4',
        showDetail: function(){
            console.log(`name: ${this.name}`);
            console.log(`price: ${this.price}`);
            console.log(`sold: ${this.sold}`);
            console.log(`console: ${this.console}`);            
        }
    },
    {
        name: 'Resident Evil 7',
        price: 1390,
        sold: 10,
        console: 'PS4',
        showDetail: function(){
            console.log(`name: ${this.name}`);
            console.log(`price: ${this.price}`);
            console.log(`sold: ${this.sold}`);
            console.log(`console: ${this.console}`);            
        }
    },
    {
        name: 'Dragon Ball XX',
        price: 1390,
        sold: 25,
        console: 'XBOX',
        showDetail: function(){
            console.log(`name: ${this.name}`);
            console.log(`price: ${this.price}`);
            console.log(`sold: ${this.sold}`);
            console.log(`console: ${this.console}`);            
        }
    }
];
let gamesXbox = games.filter(function(game){
    return game.console === consoleVariable;
});
let budget = 0;
gamesXbox.forEach(function(game){
    budget += game.price;
});
console.log(`I need ${budget} CAD to get all this PS4 great games!!`);    

const gameNames = games.map(function(gameName){
    return gameName.name;
});
const gamePrices = games.map(function(gamePrice){
    return gamePrice.price;
});
console.log(gameNames);
console.log(gamePrices);