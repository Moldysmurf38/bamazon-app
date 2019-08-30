# **Bamazon Node.js App:**

### **Project Description:**

An application that utilizes MySQL database and a node.js interface to create an interactive store inventory.

### **Getting Started:**

Create and use your own MySQL database using the MySQL workbench. Use the given schema file to create and fill the table that is needed for the app.

Add your MySQL user and password information into the bamazonCustomer.js file.

When you want to run the application, type npm start into the command line within the terminal of the app's main directory.

### **How to Use:**

Open the bamazon app in your command terminal. Initilize the app by typing in "npm start" or "node bamazonCustomer": <br/>
![Bamazon App Photo](https://github.com/Moldysmurf38/bamazon-app/blob/master/example_pics/bamazonpic1.png)

You will be given a full list of the inventory from your MySQL database: <br/>
![Bamazon App Photo](https://github.com/Moldysmurf38/bamazon-app/blob/master/example_pics/bamazonpic2.png)

Type in a number 1-10 to select the item id of the item you would like to purchase: <br/>
![Bamazon App Photo](https://github.com/Moldysmurf38/bamazon-app/blob/master/example_pics/bamazonpic3.png)

When you have selected your desired item, you will be asked the desired quantity of that given item: <br/>
![Bamazon App Photo](https://github.com/Moldysmurf38/bamazon-app/blob/master/example_pics/bamazonpic4.png)

Enter in your desired item quantity: <br/>
![Bamazon App Photo](https://github.com/Moldysmurf38/bamazon-app/blob/master/example_pics/bamazonpic5.png)

You will see a confirmation message about the number and type of times you purchased as well as their total cost. <br/>
![Bamazon App Photo](https://github.com/Moldysmurf38/bamazon-app/blob/master/example_pics/bamazonpic6.png)

After you have made your purchase you will be asked if you are finished shopping or not (in this case the selection is to continue shopping). <br/>
![Bamazon App Photo](https://github.com/Moldysmurf38/bamazon-app/blob/master/example_pics/bamazonpic7.png)

If you selected yes to more purchases, then you will be shown the updated inventory (notice there are 20 less TVs due to our prior purhcase). <br/>
![Bamazon App Photo](https://github.com/Moldysmurf38/bamazon-app/blob/master/example_pics/bamazonpic8.png)

If you try to purchase a quantity greater than what is available in the inventory: <br/>
![Bamazon App Photo](https://github.com/Moldysmurf38/bamazon-app/blob/master/example_pics/bamazonpic9.png)

You will receive a message stating there are not enough items avaiable and be asked if you would like anything else. <br/>
![Bamazon App Photo](https://github.com/Moldysmurf38/bamazon-app/blob/master/example_pics/bamazonpic10.png)

If you select that you are done shopping, then you will end the script. <br/>
![Bamazon App Photo](https://github.com/Moldysmurf38/bamazon-app/blob/master/example_pics/bamazonpic11.png)

### **Prerequisites:**

Node.js

MySQL Workbench

NPM files (see installing section)

### **Installing:**

Make sure you do "npm install" in the command line of app's main directory to download the needed npm files.

### **Future Features:**



### **Built With:**

Node.js: https://nodejs.org/en/<br/>
MySQL Workbench: https://www.mysql.com/products/workbench/ <br/>
Inquirer: https://www.npmjs.com/package/inquirer <br/>
mysql(npm): https://www.npmjs.com/package/mysql <br/>

### **Author(s):**

David Wilson
