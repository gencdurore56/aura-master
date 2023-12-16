/* sophisticatedCode.js */

// This code demonstrates a complex implementation of a web-based task management system.

// Define a Task class
class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }

  completeTask() {
    this.completed = true;
    console.log(`Task "${this.title}" has been completed.`);
  }

  updateTask(newTitle, newDescription, newDueDate, newPriority) {
    this.title = newTitle;
    this.description = newDescription;
    this.dueDate = newDueDate;
    this.priority = newPriority;
    console.log(`Task "${this.title}" has been updated.`);
  }
}

// Define a TaskManager class
class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(title, description, dueDate, priority) {
    const task = new Task(title, description, dueDate, priority);
    this.tasks.push(task);
    console.log(`Task "${task.title}" has been added.`);
  }

  deleteTask(index) {
    if (index >= 0 && index < this.tasks.length) {
      const task = this.tasks[index];
      this.tasks.splice(index, 1);
      console.log(`Task "${task.title}" has been deleted.`);
    } else {
      console.log(`Invalid task index.`);
    }
  }

  getTask(index) {
    if (index >= 0 && index < this.tasks.length) {
      const task = this.tasks[index];
      console.log(`Title: ${task.title}`);
      console.log(`Description: ${task.description}`);
      console.log(`Due Date: ${task.dueDate}`);
      console.log(`Priority: ${task.priority}`);
      console.log(`Completed: ${task.completed}`);
    } else {
      console.log(`Invalid task index.`);
    }
  }

  getAllTasks() {
    console.log(`All Tasks:\n`);
    this.tasks.forEach((task, index) => {
      console.log(`Task #${index + 1}`);
      console.log(`Title: ${task.title}`);
      console.log(`Description: ${task.description}`);
      console.log(`Due Date: ${task.dueDate}`);
      console.log(`Priority: ${task.priority}`);
      console.log(`Completed: ${task.completed}`);
      console.log(`\n`);
    });
  }
}

// Create an instance of TaskManager
const taskManager = new TaskManager();

// Add tasks
taskManager.addTask("Implement Login Page", "Create HTML, CSS, and JavaScript files for the login page", "2022-01-01", "High");
taskManager.addTask("Implement Dashboard", "Develop the main dashboard layout using React framework", "2022-01-15", "Medium");
taskManager.addTask("Create API Endpoints", "Build RESTful API endpoints for backend integration", "2022-02-01", "High");
taskManager.addTask("Write Unit Tests", "Write comprehensive unit tests to ensure code quality", "2022-02-15", "Low");

// Complete a task
taskManager.tasks[1].completeTask();

// Update a task
taskManager.tasks[2].updateTask("Create API Endpoints", "Build GraphQL API endpoints for backend integration", "2022-02-01", "High");

// Delete a task
taskManager.deleteTask(0);

// Get task details
taskManager.getTask(1);

// Get all tasks
taskManager.getAllTasks();