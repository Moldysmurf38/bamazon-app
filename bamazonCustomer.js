//App Requirements
var inquirer = require("inquirer");
var mysql = require("mysql");

//SQL database connection info
var dataBaseCon = mysql.createConnection({
  host: "<your host>",
  port: 3306,
  user: "<your user name>",
  password: "<your password>",
  database: "bamazon_db"
});
//Initiate conncetion to mysql database
dataBaseCon.connect(function (err) {
  if (err) throw err;
  dataBaseCon.query("select * from products", function (err, result) {
    //Display database info for user
    databaseDisplay(result);
    //Initialize main user interface menu
    bamazonInterface();
  })
  console.log("Connected to MySQL");
})

//Main user interface menu
function bamazonInterface(result) {
  //Begin query for user
  inquirer.prompt([
    {
      name: "buy_list",
      type: "input",
      message: "What is the Id of the item you would like to buy?",
      //Form validation to ensure the user selects a given item id
      validate: function (valueOne) {
        if (valueOne < 1 || valueOne > 10) {
          return false;
        }
        if (isNaN(valueOne) === false) {
          return true;
        }
        return false;
      }
    },
    {
      name: "purchase_quantity",
      type: "input",
      message: "How many would you like to buy?",
      //Form validation to ensure proper amount is chosen
      validate: function (valueTwo) {
        if (valueTwo < 1) {
          return false;
        }
        if (isNaN(valueTwo) === false) {
          return true;
        }
        return false;
      }
    }
  ]).then(function (answer) {
    userPurchase(answer);
  })
}
//Displays the current inventory of the store
function databaseDisplay(result) {
  console.log("Our Current Inventory:")
  for (var x = 0; x < result.length; x++) {
    console.log("Item ID: " + result[x].item_id + ", " + "Item Name: " + result[x].product_name + ", " + "Department Name: " + result[x].department_name + ", " + "Price: " + result[x].price + ", " + "Quantity: " + result[x].stock_quantity);
  }
}
//Switch board depending on user item id selection
function userPurchase(answer) {
  var userItem = answer.buy_list;
  var userChoice = answer.purchase_quantity;
  switch (userItem) {
    case "1":
      return casePath(userChoice,userItem);
    case "2":
      return casePath(userChoice,userItem);
    case "3":
      return casePath(userChoice,userItem);
    case "4":
      return casePath(userChoice,userItem);
    case "5":
      return casePath(userChoice,userItem);
    case "6":
      return casePath(userChoice,userItem);
    case "7":
      return casePath(userChoice,userItem);
    case "8":
      return casePath(userChoice,userItem);
    case "9":
      return casePath(userChoice,userItem);
    case "10":
      return casePath(userChoice,userItem);
    default:
      return console.log("An error occured!")
  }
}
//Handles purchases from user and updates the store database
function casePath(userChoice ,userItem) {
  dataBaseCon.query("select stock_quantity, product_name, price from products where item_id = '" + userItem + "'", function (err, result) {
    var newTotal = result[0].stock_quantity - userChoice;
    //Inventory quantity validation
    if (newTotal < 0) {
      console.log("Sorry not enough items available!")
      return interLoop()
    }
    var totalCost = result[0].price * userChoice;
    console.log(userChoice + " " + result[0].product_name + "s purchased!")
    console.log("Your total cost is $" + totalCost)
    var sql = "update products set stock_quantity ='" + newTotal + "' where item_id= '" + userItem + "'";
    dataBaseCon.query(sql, function (err, result) {
      if (err) throw err;
    })
    interLoop()
  });
}
//Handles user after purchase is completed and allows for more possible purchases
function interLoop() {
  inquirer.prompt([
    {
      name: "purchase_loop",
      type: "confirm",
      message: "Would you like to purchase anything else?"
    }
  ]).then(function (answer) {
    if (answer.purchase_loop == false) {
      console.log("Thank you for your purchase!");
      return process.exit()
    } else {
      dataBaseCon.query("select * from products", function (err, result) {
        databaseDisplay(result);
        bamazonInterface();;
      })
    }
  })
}