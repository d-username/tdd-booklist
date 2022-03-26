const Book = require("./book.js");

class List {
  constructor() {
    this.booklist = [];
  }

  addBook(title, author, cathegory) {
    let newBook = new Book(title, author, cathegory);
    this.booklist.push(newBook);
    return this.booklist;
  }

  getCathegory(cathegory) {
    let listByCathegory = [];
    for (let i = 0; i < this.booklist.length; i++) {
      if (this.booklist[i].cathegory === cathegory) {
        listByCathegory.push(this.booklist[i]);
      }
    }
    return listByCathegory;
  }

  getAuthor(author) {
    let listByAuthor = [];
    for (let i = 0; i < this.booklist.length; i++) {
      if (this.booklist[i].author === author) {
        listByAuthor.push(this.booklist[i]);
      }
    }
    return listByAuthor;
  }

  updateCathegory(title, update) {
    let updatedBook = [];
    for (let i = 0; i < this.booklist.length; i++) {
      if (this.booklist[i].title === title) {
        this.booklist[i].cathegory = update;
        updatedBook.push(this.booklist[i]);
      }
    }
    return updatedBook;
  }

  removeBook(title) {
    console.log("THIS IS THE FULL BOOKLIST: ", this.booklist);
    for (let i = 0; i < this.booklist.length; i++) {
      if (this.booklist[i].title === title) {
        console.log("THIS IS THE BOOK TO DELETE: ", this.booklist[i]);
        this.booklist.splice(i, 1);
        console.log("THE NEW BOOKLIST: ", this.booklist);
      }
    }
    return this.booklist;
  }
}

module.exports = List;
