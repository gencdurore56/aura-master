/*
Filename: ComplexCode.js

Description: This code demonstrates a complex implementation of a blog management system. It has various modules for user management, article creation, comment management, and category handling.

*/

// User Module
class User {
  constructor(name, email, role) {
    this.name = name;
    this.email = email;
    this.role = role;
  }

  getProfile() {
    return `${this.name} (${this.email}) - ${this.role}`;
  }
}

// Article Module
class Article {
  constructor(title, content, author) {
    this.title = title;
    this.content = content;
    this.author = author;
    this.comments = [];
    this.categories = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }

  addCategory(category) {
    this.categories.push(category);
  }

  getDetails() {
    let details = `Title: ${this.title}\n`;
    details += `Author: ${this.author.name}\n`;
    details += `Content: ${this.content}\n\n`;
    details += `Comments:\n`;
    this.comments.forEach((comment) => {
      details += `- ${comment}\n`;
    });
    details += `\nCategories: ${this.categories.join(", ")}`;
    return details;
  }
}

// Comment Module
class Comment {
  constructor(content, author) {
    this.content = content;
    this.author = author;
  }

  displayComment() {
    return `${this.content} - ${this.author.name}`;
  }
}

// Category Module
class Category {
  constructor(name) {
    this.name = name;
  }
}

// Demo

// Users
const user1 = new User("John Doe", "john.doe@gmail.com", "Administrator");
const user2 = new User("Jane Smith", "jane.smith@gmail.com", "Editor");
const user3 = new User("Bob Johnson", "bob.johnson@gmail.com", "Reader");

// Articles
const article1 = new Article(
  "JavaScript Fundamentals",
  "In this article, we will cover JavaScript basics.",
  user1
);
const article2 = new Article(
  "Advanced CSS Techniques",
  "Learn advanced CSS techniques for modern web development.",
  user2
);

// Comments
const comment1 = new Comment("Great article!", user3);
const comment2 = new Comment("Well done!", user1);

article1.addComment(comment1.displayComment());
article2.addComment(comment2.displayComment());

// Categories
const category1 = new Category("Programming");
const category2 = new Category("Web Development");

article1.addCategory(category1.name);
article2.addCategory(category2.name);

console.log("Article 1 Details:");
console.log(article1.getDetails());
console.log("---------------");
console.log("Article 2 Details:");
console.log(article2.getDetails());

// Output:
// Article 1 Details:
// Title: JavaScript Fundamentals
// Author: John Doe
// Content: In this article, we will cover JavaScript basics.

// Comments:
// - Great article!

// Categories: Programming
//
// ---------------
// Article 2 Details:
// Title: Advanced CSS Techniques
// Author: Jane Smith
// Content: Learn advanced CSS techniques for modern web development.

// Comments:
// - Well done!

// Categories: Web Development