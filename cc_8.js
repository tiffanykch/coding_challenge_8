// TASK 1: FUNCTION DECLARATION - EMPLOYEE SALARY CALCULATION

// Create function that computes an employee's net salary
function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);
    console.log(`Net Salary: $${netSalary.toFixed(2)}`);
};

// Test Data
calculateSalary(5000, 500, 0.1);

calculateSalary(7000, 1000, 0.15);

// TASK 2: FUNCTION EXPRESSION - PRODUCT PRICE AFTER DISCOUNT

// Create function expression to determine final price of product
const calculateDiscount = function(price, discountRate) {
   let finalPrice = price - (price * discountRate);
   console.log(`Final Price: $${finalPrice.toFixed(2)}`) 
};

// Test Data
calculateDiscount(100, 0.2);

calculateDiscount(250, 0.15);