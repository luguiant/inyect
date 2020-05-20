let accounts = [];
const findAccount = Symbol("findAccount");
const trimName = name => 
    `XXXXXXXX${name
        .replace(/\s/g,"")
        .slice(-4)
        .toUpperCase()}`;

const logger = data => console.log(data);

class Bank {
    config({logger}){
        this.logger = logger;
    }
    [findAccount](name) {
        return accounts.find(acc => acc.name === name);
    }
    createAccount(name, monies = 0) {
        if(!this[findAccount](name)){
            accounts.push(
                {
                   name,
                   monies 
                }
            );
            if(this.logger){
                this.logger.write(`Cuenta creada ${trimName(name)}`);
            }
        } else {
            console.log('la cuenta ya existe');
        }
    }
    credit(name, amount) {
        if(this[findAccount](name)){
            accounts.forEach(
                acc => {
                    if (acc.name === name ) {
                        acc.monies = acc.monies + amount;
                    }
                }
            );
            if(this.logger){
                this.logger.write(`Datos de la cuenta: ${amount} -  ${trimName(name)}`);
            }
        }
    }
    debbit(name,amount){
        if (this[findAccount](name)) {
            accounts.forEach(
                acc => {acc.monies = acc.monies - amount;}
            );
        }
    }
    getFounds(name){
        if (this[findAccount](name)) {
            return accounts.find(acc => acc.name === name)["monies"];
        } 
        return "Cuenta sin fondos";
    }
}

module.exports = new Bank();
