function Account(nmae, balance) {
  this.name ="name";
  this.balance ="balance";  
}

Account.prototype.deposit=function(amount){
    if (amount>0){
        this.balance +=amount;
    console.info('Deposit: $(this.name) new balance is $${this.balance}');
        return true;
    } else{
        console.error("Deposit amount must be positive");
         return false;
    }
}

Account.prototype.withdraw = function(amount) {
    if (amount > 0 && amount <= this.balance) {  
        this.balance -= amount;
        console.info(`Withdraw: ${this.name}'s new balance is $${this.balance}`);
        return true;
    } else if (amount > this.balance) {
        console.error("Withdrawal denied: Insufficient funds!");
        return false;
    } else {
        console.error("Withdrawal amount must be positive!");
        return false;
    }
};


Account.prototype.displayBalance = function() {
    console.log(`Current balance for ${this.name}: $${this.balance}`);
    return this.balance; 
};


const myAccount = new Account("John Doe", 1000);

// Example operations
myAccount.deposit(500);       
myAccount.withdraw(300);      

// Display the balance
myAccount.displayBalance();   





