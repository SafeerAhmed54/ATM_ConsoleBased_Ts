import inquirer from "inquirer";
// Defining Balance at First
const balance = 166836;
let pinCode = 1250;

// Declaring Varaible for ATM Options
const widthdraw = "Withdraw";
const deposit = "Deposit";
const getBalance = "GetBalance";
const changePin = "ChangePin";
const fastCash = "FastCash";
const otherAmount = "OtherAmount";
const thousand = "1000";
const fiveThousand = "5000";
const tenThousand = "10000";
const fiftenThousand = "15000";
const twentyThousand = "20000";

// Taking input and Option to choose from User
const answer = await inquirer.prompt([
    {
        message: "Please Enter your Pincode",
        type: "number",
        name: "pinCodeUser"
    }
]);

console.log(answer);

//Check Pincode with saved pincode
if(pinCode == answer.pinCodeUser)
{
    const answer = await inquirer.prompt([
        {
            message: "What do you want to do?",
            type: "list",
            name: "option",
            choices: [widthdraw, deposit, getBalance, changePin]
        }
    ]);

//Main ATM conditions for the ATM Option and Comparision
    if (answer.option == widthdraw) 
        {
            let withdrawn;
            const widthdrawOption = await inquirer.prompt([
                {
                    message: "How much do you want to withdraw?",
                    type: "list",
                    name: "option",
                    choices: [fastCash, otherAmount]
                }
            ]);

            if(widthdrawOption.option == fastCash)
            {
                const fastCashOption = await inquirer.prompt([
                    {
                        message: "What do you want to do?",
                        type: "list",
                        name: "option",
                        choices: [thousand,fiveThousand,tenThousand,fiftenThousand,twentyThousand]
                    }
                ]);

                if(fastCashOption.option == thousand)
                {
                    withdrawn = balance - 1000;
                    console.log("You have withdrawn 1000$");
                    console.log(`The Ammount remaing in your account is ${withdrawn}$`);
                }
                else if(fastCashOption.option == fiveThousand)
                    {
                        withdrawn = balance - 5000;
                        console.log("You have withdrawn 5000$");
                        console.log(`The Ammount remaing in your account is ${withdrawn}$`);
                    }
                    else if(fastCashOption.option == tenThousand)
                        {
                            withdrawn = balance - 10000;
                            console.log("You have withdrawn 10000$");
                            console.log(`The Ammount remaing in your account is ${withdrawn}$`);
                        }
                        else if(fastCashOption.option == fiftenThousand)
                            {
                                withdrawn = balance - 15000;
                                console.log("You have withdrawn 15000$");
                                console.log(`The Ammount remaing in your account is ${withdrawn}$`);
                            }
                            else if(fastCashOption.option == twentyThousand)
                                {
                                    withdrawn = balance - 20000;
                                    console.log("You have withdrawn 20000$");
                                    console.log(`The Ammount remaing in your account is ${withdrawn}$`);
                                }
                
            }
            else if(widthdrawOption.option == otherAmount)
            {
                const widthdrawAmount = await inquirer.prompt([
                    {
                        message: "What amount do you want to withdraw type it please",
                        type: "number",
                        name: "withdrawnAmount",
                    }
                ]);

                if(widthdrawAmount.withdrawnAmount <= balance)
                {
                    withdrawn = widthdrawAmount.withdrawnAmount - balance;
                    console.log(`You have withdrawn ${widthdrawAmount.withdrawnAmount}`);
                    console.log(`The Ammount remaing in your account is ${withdrawn}`);
                }
                else
                {
                    console.log("You don't have such amount in your account");
                }
            }
            
        }
        else if (answer.option == deposit) 
        {
            const depositAmount = await inquirer.prompt([
                {
                    message: "Please Enter Amount to Deposit : ",
                    type: "number",
                    name: "depositAmount"
                }
            ]);
            let deposited = depositAmount.depositAmount + balance;
            console.log(`You have deposited ${depositAmount.depositAmount}`);
            console.log(`The Balance in your account is  ${deposited}`);
        
        }
        else if (answer.option == getBalance) 
        {
            console.log(`The Balance in your account is  ${balance}`);
        }
        else if (answer.option == changePin) 
        {
            const newPinCode = await inquirer.prompt([
                {
                    message: "Please Enter New Pin Code : ",
                    type: "number",
                    name: "newPinCode"
                }
            ]);

            pinCode = newPinCode.newPinCode;
            console.log("You have changed the Pin Code");
        }
}
else 
{
    console.log("The Pin Number you entered is wrong");
}


