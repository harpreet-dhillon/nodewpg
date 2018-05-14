const user = {
    username: null,
    password: null,
    greet:  function(){
        if(this.username != null){
            console.log(`Hello, I'm user ${this.username}`);
        }
        else{
            console.log('Please assign a username value');
        }
    },
    updaterUsername: function(name){
        return this.username = name;
    },
    updatePassword: function(pass){
        return this.password = pass;
    }
};
user.updaterUsername('Harpreet');
user.updatePassword(1234);
user.greet();