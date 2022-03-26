const List = require("../src/list.js");
const Book = require("../src/book.js");

describe("Booklist", function () {
  it("add a book to the list", () => {
    // set up
    const booklist = new List();
    const book1 = new Book("Life of Pi", "Yann Martel", "psychological novel");
    const book2 = new Book("A Tale of Two Cities","Charles Dickens", "Historical fiction")
    const book3 = new Book("Prince Caspian: The Return to Narnia", "C. S. Lewis", "Fantasy")
    const book4 = new Book("The Lion, the Witch and the Wardrobe","C. S. Lewis", "Fantasy")
    const book5 = new Book("The Hobbit","J. R. R. Tolkien", "Fantasy")
    const expected = [book1, book2, book3];
    // execute
    booklist.addBook("Life of Pi", "Yann Martel", "psychological novel")
    booklist.addBook("A Tale of Two Cities","Charles Dickens", "Historical fiction")
    const result = booklist.addBook("Prince Caspian: The Return to Narnia", "C. S. Lewis", "Fantasy");
    // verify
    expect(result).toEqual(expected);
  });
  
  it("get books by cathegory", () => {
    // set up
    const booklist = new List();
    const book1 = new Book("Life of Pi", "Yann Martel", "psychological novel");
    const book2 = new Book("A Tale of Two Cities","Charles Dickens", "Historical fiction")
    const book3 = new Book("Prince Caspian: The Return to Narnia", "C. S. Lewis", "Fantasy")
    const book4 = new Book("The Lion, the Witch and the Wardrobe","C. S. Lewis", "Fantasy")
    const book5 = new Book("The Hobbit","J. R. R. Tolkien", "Fantasy")
    const expected = [book3, book4, book5];
    // execute
    booklist.addBook("Life of Pi", "Yann Martel", "psychological novel")
    booklist.addBook("A Tale of Two Cities","Charles Dickens", "Historical fiction")
    booklist.addBook("Prince Caspian: The Return to Narnia", "C. S. Lewis", "Fantasy")
    booklist.addBook("The Lion, the Witch and the Wardrobe","C. S. Lewis", "Fantasy")
    booklist.addBook("The Hobbit","J. R. R. Tolkien", "Fantasy")
    const result = booklist.getCathegory("Fantasy");
    // verify
    expect(result).toEqual(expected);
  });

  it("get books by author", () => {
    // set up
    const booklist = new List();
    const book1 = new Book("Life of Pi", "Yann Martel", "psychological novel");
    const book2 = new Book("A Tale of Two Cities","Charles Dickens", "Historical fiction")
    const book3 = new Book("Prince Caspian: The Return to Narnia", "C. S. Lewis", "Fantasy")
    const book4 = new Book("The Lion, the Witch and the Wardrobe","C. S. Lewis", "Fantasy")
    const book5 = new Book("The Hobbit","J. R. R. Tolkien", "Fantasy")
    const expected = [book3, book4];
    // execute
    booklist.addBook("Life of Pi", "Yann Martel", "psychological novel")
    booklist.addBook("A Tale of Two Cities","Charles Dickens", "Historical fiction")
    booklist.addBook("Prince Caspian: The Return to Narnia", "C. S. Lewis", "Fantasy")
    booklist.addBook("The Lion, the Witch and the Wardrobe","C. S. Lewis", "Fantasy")
    booklist.addBook("The Hobbit","J. R. R. Tolkien", "Fantasy")
    const result = booklist.getAuthor("C. S. Lewis");
    // verify
    expect(result).toEqual(expected);
  });

  it("update book's cathegory", () => {
    // set up
    const booklist = new List();
    const book1 = new Book("Life of Pi", "Yann Martel", "psychological novel");
    const book2 = new Book("A Tale of Two Cities","Charles Dickens", "Historical fiction")
    const book3 = new Book("Prince Caspian: The Return to Narnia", "C. S. Lewis", "Fantasy")
    const book4 = new Book("The Lion, the Witch and the Wardrobe","C. S. Lewis", "Fantasy")
    const book5 = new Book("The Hobbit","J. R. R. Tolkien", "Fantasy")
    const book4Updated = new Book("The Lion, the Witch and the Wardrobe","C. S. Lewis", "Kids Book")
    const expected = [book4Updated];
    // execute
    booklist.addBook("Life of Pi", "Yann Martel", "psychological novel")
    booklist.addBook("A Tale of Two Cities","Charles Dickens", "Historical fiction")
    booklist.addBook("Prince Caspian: The Return to Narnia", "C. S. Lewis", "Fantasy")
    booklist.addBook("The Lion, the Witch and the Wardrobe","C. S. Lewis", "Fantasy")
    booklist.addBook("The Hobbit","J. R. R. Tolkien", "Fantasy")
    const result = booklist.updateCathegory("The Lion, the Witch and the Wardrobe", "Kids Book");
    // verify
    expect(result).toEqual(expected);
  });

  it("remove a book", () => {
    // set up
    const booklist = new List();
    const book1 = new Book("Life of Pi", "Yann Martel", "psychological novel");
    const book2 = new Book("A Tale of Two Cities","Charles Dickens", "Historical fiction")
    const book3 = new Book("Prince Caspian: The Return to Narnia", "C. S. Lewis", "Fantasy")
    const book4 = new Book("The Lion, the Witch and the Wardrobe","C. S. Lewis", "Fantasy")
    const book5 = new Book("The Hobbit","J. R. R. Tolkien", "Fantasy")
    const expected = [book2, book3, book4, book5];
    // execute
    booklist.addBook("Life of Pi", "Yann Martel", "psychological novel")
    booklist.addBook("A Tale of Two Cities","Charles Dickens", "Historical fiction")
    booklist.addBook("Prince Caspian: The Return to Narnia", "C. S. Lewis", "Fantasy")
    booklist.addBook("The Lion, the Witch and the Wardrobe","C. S. Lewis", "Fantasy")
    booklist.addBook("The Hobbit","J. R. R. Tolkien", "Fantasy")
    const result = booklist.removeBook("Life of Pi");
    // verify
    expect(result).toEqual(expected);
  });

});

