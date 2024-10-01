// : Create a createShoppingCart function that allows users to add items to a shopping cart, calculate the total cost, and display the cart contents.
// :
// The createShoppingCart function should return an object with the following methods:
// addItem(itemName, price): Adds an item to the cart.
// removeItem(itemName): Removes an item from the cart if it exists.
// getTotal(): Returns the total cost of the items in the cart.
// showCart(): Displays all items currently in the cart.
// : Use a closure to store the cart items and their prices privately.

// function createShoppingCart(){
//     const cardItems = {};

//     return{
//         addItems(itemName, price){
//             if(cardItems[itemName]){
//                 console.log(`${itemName} karti hazirdir`)
//             }
//             cardItems[itemName] = price
//         },
//         removeItems(itemName){
//             if(cardItems[itemName]){
//                 delete cardItems[itemName]
//                 console.log(`${itemName} karti silindi`)
//             }
//             else{
//                 console.log(`${itemName} karti yoxdur`)
//             }
//         },
//         getTotal(){
//             let total = 0;
//             cardItems.forEach(price => total += price)
//             return total;

//         },
//         showCard(){
//             if(cardItems.size === 0){
//                 console.log("kart bosdur");
//             }
//             else{
//                 cardItems.forEach((price, itemName) => {
//                     console.log(`- ${itemName}: $${price.toFixed(2)}`);
//                 })
//             }
//         }
//     };
// }

// const myCard = createShoppingCart();
// myCard.addItems("banana", 0.50);
// myCard.addItems("gavali", 1.70);
// myCard.showCard();
// myCard.removeItems("gavali");



// : Create a createBankAccountWithInterest function that simulates a bank account with interest accumulation.
// :
// The function should return an object with:
// deposit(amount): Deposits money into the account.
// withdraw(amount): Withdraws money from the account.
// checkBalance(): Returns the current balance.
// addInterest(rate): Adds interest to the balance (based on a percentage rate).
// : Use closures to maintain and update the balance and interest rate privately.

// function createBankAccountWithInterest(){
//     let privatePassword;
//     let balance = 0;
//     let interestRate = 0;

//     return{

//         deposit: function (value) {
//             balance += value;
//         },
//         checkBalance() {
//             return balance;
//         },
//         withDraw: function (amount, password) {
//             if (password === privatePassword) {
//                 if (amount > balance) {
//                     return 'yeteri qeder meblegh yoxdur';
//                 }
//                 else {
//                     balance -= amount;
//                 }
//             }
//             else {
//                 return 'you enter wrong password';
//             }
//         },
//         addInterest(rate) {
//             if(rate >=0){
//                 interestRate = rate;
//                 const interest = (balance * interestRate)
//                 balance += interest;
//                 console.log(`Added interest: $${interest.toFixed(2)}. New balance: $${balance.toFixed(2)}`);
//             }
//             else{
//                 console.log("Interest rate cannot be negative.");
//             }
//         }
//     }

// }


// const myAccount = createBankAccountWithInterest();
// myAccount.deposit(700);
// myAccount.withDraw(77);
// console.log(`Current balance: $${myAccount.checkBalance().toFixed(2)}`); 
// myAccount.addInterest(7); 
// console.log(`Current balance after interest: $${myAccount.checkBalance().toFixed(2)}`); 




// : Create a function createEventLogger that keeps track of events happening in an application.
// :
// The createEventLogger function should return an object with methods to:
// logEvent(eventName): Adds an event to the event log.
// getEvents(): Returns all logged events.
// clearLog(): Clears the event log.
// : Use closure to maintain the event log, which should be private

// function createEventLogger(){
//     const eventLog = [];

//     return{
//         logEvent(eventName){
//             if(eventName){
//                 eventLog.push(eventName);
//                 console.log(`EventLog: ${eventName}`);
//             }
//             else{
//                 console.log(`event name bosdu`);
//             }
//         },
//         getEvents(){
//             return eventLog.slice();
//         },
//         clearLog(){
//             eventLog.length = 0;
//             console.log(`event log temizlendi`);
//         }
//    }
// }

// const myLog = createEventLogger();
// myLog.logEvent("Istifadeci daxil oldu");
// myLog.logEvent("Istifadeci duymeni tikladi");
// console.log(" events:", myLog.getEvents());
// myLog.clearLog();
// console.log("event temizlendi", myLog.getEvents());



