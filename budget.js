//budgeting compulsary task 2 from L2T4

//Create an income object constructor with attributes listed
function Income(name, amount, recurring) {
  this.name = name;
  this.amount = amount;
  this.recurring = recurring;
};

//Create an expenses object constructor with attributes listed
function Expenses(name, amount, recurring) {
  this.name = name;
  this.amount = amount;
  this.recurring = recurring;
};

//create 5 income objects
const salary = new Income("Salary", 2500, true);
const tutoring = new Income("Tutoring Pay", 500, false);
const investments = new Income("Investments", 1000, true);
const bonuses = new Income("Bonuses", 600, false);
const gifts = new Income("Gifts", 200, false);

//create an array of objects to get disposible income
let incomeArray = [salary, tutoring, investments, bonuses, gifts];

//create 5 expenses objects
const rent = new Expenses("Rent", 900, true);
const bills = new Expenses("Bills", 300, true);
const groceries = new Expenses("Groceries", 400, true);
const entertainment = new Expenses("Entertainment", 400, false);
const gym = new Expenses("Gym Membership", 20, true);

//create an array of objects to get expenses
let expensesArray = [rent, bills, groceries, entertainment, gym];

//Add session storage to store income objects
sessionStorage.setItem("salary", JSON.stringify(salary));
sessionStorage.setItem("tutoring", JSON.stringify(tutoring));
sessionStorage.setItem("investments", JSON.stringify(investments));
sessionStorage.setItem("bonuses", JSON.stringify(bonuses));
sessionStorage.setItem("gifts", JSON.stringify(gifts));

//Add session storage to store expenses objects
sessionStorage.setItem("rent", JSON.stringify(rent));
sessionStorage.setItem("bills", JSON.stringify(bills));
sessionStorage.setItem("groceries", JSON.stringify(groceries));
sessionStorage.setItem("entertainment", JSON.stringify(entertainment));
sessionStorage.setItem("gym", JSON.stringify(gym));

//Prompt box displaying income items
let newIncomePrompt = prompt(`Current Income items:
1. Name: ${salary.name}, Amount: $${salary.amount}, Recurring: ${salary.recurring}
2. Name: ${tutoring.name}, Amount: $${tutoring.amount}, Recurring: ${tutoring.recurring}
3. Name: ${investments.name}, Amount: $${investments.amount}, Recurring: ${investments.recurring}
4. Name: ${bonuses.name}, Amount: $${bonuses.amount}, Recurring: ${bonuses.recurring}
5. Name: ${gifts.name}, Amount: $${gifts.amount}, Recurring: ${gifts.recurring}

Would you like to add another item? Yes/No`);

//if-else statements for user choice
if (newIncomePrompt.toLowerCase() === "yes") {
  //prompt user to add new object
  const name = prompt("Please enter the name of the new income item: ");
  const amount = Number(
    prompt("Please enter the amount (in dollars) of the new income item: ")
  );
  const recurring =
    prompt("Is this income recurring? Type Yes or No: ").toLowerCase() ===
    "yes"; //this allows any input that is not 'yes' the boolean will return false
  //create new income object
  const newIncome = new Income(name, amount, recurring);
  //add session storage for new object
  sessionStorage.setItem(name.toLowerCase(), JSON.stringify(newIncome));
  //push new object into array
  incomeArray.push(newIncome);
  console.log(incomeArray);
} else {
  alert("There are no new income items added");
  console.log(incomeArray);
};

//Prompt box displaying income items
let newExpensesPrompt = prompt(`Current Expenses items:
1. Name: ${rent.name}, Amount: $${rent.amount}, Recurring: ${rent.recurring}
2. Name: ${bills.name}, Amount: $${bills.amount}, Recurring: ${bills.recurring}
3. Name: ${groceries.name}, Amount: $${groceries.amount}, Recurring: ${groceries.recurring}
4. Name: ${entertainment.name}, Amount: $${entertainment.amount}, Recurring: ${entertainment.recurring}
5. Name: ${gym.name}, Amount: $${gym.amount}, Recurring: ${gym.recurring}

Would you like to add another item? Yes/No`);
//if-else statements similar to income one above
if (newExpensesPrompt.toLowerCase() === "yes") {
  const name = prompt("Please enter the name of the new expense item: ");
  const amount = Number(
    prompt("Please enter the amount (in dollars) of the new expense item: ")
  );
  const recurring =
    prompt("Is this a recurring expense? Type Yes or No: ").toLowerCase() ===
    "yes"; 
  const newExpense = new Expenses(name, amount, recurring);
  sessionStorage.setItem(name.toLowerCase(), JSON.stringify(newExpense));
  expensesArray.push(newExpense);
  console.log(expensesArray);
} else {
  alert("There are no new expense items added");
  console.log(expensesArray);
};

//display total amount of disposable income
let calculatedIncome = 0;
//for loop to loop through amount in income array and add together 
for (i = 0; i < incomeArray.length; i++) {
  calculatedIncome += incomeArray[i].amount;
};

//then again for the expenses array
let calculatedExpenses = 0;
//for loop to loop through amount in expenses array and add together 
for (i = 0; i < expensesArray.length; i++) {
  calculatedExpenses += expensesArray[i].amount;
};
//subtract these 2 totals from each other
let disposableIncome = calculatedIncome - calculatedExpenses;
//prompt for a number value to put in savings
let savings = Number(
  prompt(
    `You have $${disposableIncome} as disposable income. How much would you like to add to your savings? `
  )
);
//subtract that from disposable income amount previously displayed
let total = disposableIncome - savings;
//alert user to new total
alert(`You have $${total} of disposable income left.`);

//Note: Used task notes to complete this task and Prettier to format this document
