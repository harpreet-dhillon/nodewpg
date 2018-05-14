const player = {
    name: null,
    energy: 100,
    lifes: 3,
    loseEnergy: function(damage){
        this.energy -= +damage;
        if(this.energy <= 0){
            this.energy = 0;
            this.looseLife();
        }
    },
    recoveryEnergy: function(energyUp){
        this.energy += +energyUp;
        if(this.energy > 100){
            this.energy = 100;
        }
    },
    looseLife: function(){
        return this.lifes--;
    },
    recoveryLife: function(){
        this.lifes++;
        if(this.lifes > 99){
            return this.lifes = 99;
        }
    },
};
player.name = 'Harpreet';
player.looseLife();
player.loseEnergy(10);
player.loseEnergy(5);
player.loseEnergy(15);
player.loseEnergy(20);
player.recoveryEnergy(10);
player.loseEnergy(30);
player.loseEnergy(40);
player.looseLife();
player.recoveryLife();
player.recoveryLife();
console.log(`The ${player.name} has ${player.energy} energy and  ${player.lifes} lifes`);