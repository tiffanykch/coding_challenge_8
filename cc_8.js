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

// TASK 3: ARROW FUNCTION - SERVICE FEE CALCULATION

// Create arrow function that applies a fee
const calculateServiceFee = (amount, serviceType) => {
    let fee = 0;

    // Determine fee percentage based on service type
    if (serviceType === "Premium") {fee = amount * 0.15}
    else if (serviceType === "Standard") {fee = amount * 0.1}
    else if (serviceType === "Basic") {fee = amount * 0.05};

    console.log(`Service Fee: $${fee.toFixed(2)}`)
}

// Test Data
calculateServiceFee(200, "Premium");

calculateServiceFee(500, "Standard");

// TASK 4: PARAMETERS AND ARGUMENTS - CAR RENTAL COST CALCULATION

// Create function that calculates rental costs
function calculateRentalCost(days, carType, insurance = false) {
    
    // Determine daily car rental fee based on car type
    let carTypeRates = {"Economy": 40, "Standard": 60, "Luxury": 100};
    
    // Determine if insurance fee is applicable
    let insuranceType = {true: 20, false: 0};

    // Calculate total cost for all days
    let rentalTotal = (carTypeRates[carType] + insuranceType[insurance]) * days

    console.log(`Total Rental Cost: $${rentalTotal}`)
}

// Test Data
calculateRentalCost(3, "Economy", true);

calculateRentalCost(5, "Luxury", false);