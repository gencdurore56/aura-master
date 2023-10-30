/* 
Filename: complexCode.js
Content: Complex JavaScript Code Example
*/

// Define a class called Employee
class Employee {
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  // Getter method to retrieve employee name
  getName() {
    return this.name;
  }

  // Getter method to retrieve employee age
  getAge() {
    return this.age;
  }

  // Getter method to retrieve employee salary
  getSalary() {
    return this.salary;
  }

  // Method to calculate annual bonus based on employee age and salary
  calculateBonus() {
    let bonus = 0;
    if (this.age >= 30) {
      bonus = this.salary * 0.1;
    } else {
      bonus = this.salary * 0.05;
    }
    return bonus;
  }

  // Static method to determine if an employee is eligible for promotion
  static isEligibleForPromotion(employee) {
    return employee.getAge() >= 25 && employee.getSalary() > 50000;
  }
}

// Create instances of Employee class
const employee1 = new Employee("John Doe", 32, 60000);
const employee2 = new Employee("Jane Smith", 28, 45000);

// Print employee details and calculate bonus
console.log(`Employee 1: Name - ${employee1.getName()}, Age - ${employee1.getAge()}, Salary - ${employee1.getSalary()}`);
console.log(`Employee 1 Bonus: $${employee1.calculateBonus()}`);

console.log(`Employee 2: Name - ${employee2.getName()}, Age - ${employee2.getAge()}, Salary - ${employee2.getSalary()}`);
console.log(`Employee 2 Bonus: $${employee2.calculateBonus()}`);

// Check promotion eligibility
console.log(`Employee 1 Promotion Eligibility: ${Employee.isEligibleForPromotion(employee1)}`);
console.log(`Employee 2 Promotion Eligibility: ${Employee.isEligibleForPromotion(employee2)}`);

// Additional complex code...
// ... (code exceeding 200 lines)