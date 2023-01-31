import inquirer from "inquirer";

const answers = await inquirer.prompt([
    {
        type : "input",
        name : "userid",
        message : "enter your id"
    },
    {
        type : "number",
        name : "userpin",
        message : "enter your pin"
    },
    {
        type : "list",
        name : "accountType",
        choices : ["current account", "saving account"],
        message : "select your account type"
    },
    {
        type : "list",
        name : "transactionType",
        choices : ["fast cash", "withdraw"],
        message : "select your transaction",
        when(answers){
            return answers.accountType
        }
    },
    {
        type : "list",
        name : "amount",
        choices : [1000,2000,3000,4000,5000],
        message : "select your amount",
        when(answers){
            return answers.transactionType == "fast cash"
        }
    },
    {
        type : "number",
        name : "amount",
        message : "enter your amount",
        when(answers){
            return answers.transactionType == "withdraw"
        },
    },
])
if(answers.userid && answers.userpin){
    const balance = 50000;
    console.log("previous balance",balance);
    const enterAmount = answers.amount;

    if( balance >= enterAmount){
        const remaining = balance - enterAmount;
        console.log("your current balance is", remaining);     
    }
    else{
        console.log("insufficient Balance");
        
    }
}