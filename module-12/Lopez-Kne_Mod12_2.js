const books = [
    'To Kill a Mockingbird',
    'Moby Dick',
    'Adventures of Tom Sawyer',
    'Of Mice and Men',
    'The Catcher and the Rye',
    '1984',
    'The Grapes of Wrath',
    'The Great Gatsby',
    'Adventures of Huckleberry Finn',
    'Animal Farm'
  ];
  
  function displayAsc() {
    const sortedBooks = books.sort();
    displayBooks(sortedBooks);
  }
  
  function displayDesc() {
    const sortedBooks = books.sort((a, b) => (a < b ? 1 : -1));
    displayBooks(sortedBooks);
  }
  
  function displayBooks(bookArray) {
    let html = '<ol>';
    bookArray.forEach(book => {
      html += `<li>${book}</li>`;
    });
    html += '</ol>';
    document.getElementById('bookList').innerHTML = html;
  }
  