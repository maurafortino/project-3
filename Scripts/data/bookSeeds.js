const booksSeed = [{
    // owner -- will need to connect to the user table.
    title: "Introduction to Computer Science: A Textbook for Beginners in Informatics",
    author: ["Gilbert Brands"],
    image: "http://i.ebayimg.com/images/i/361409531875-0-1/s-l1000.jpg",
    condition: "good",
    subject: "Computer Science",
    ownerEmail: "maurafortino@gmail.com",
},
{
    title: "Understanding Human Communication",
    author: ["Ronald B. Adler", "George Rodman", "Athena du Pre"],
    image: "https://www.directtextbook.com/large/0190297085.jpg",
    isbn: "0190297085",
    published: 2016,
    edition: 13,
    condition: "great",
    subject: "Communications",
    ownerEmail: "kae14oh@gmail.com"
},
{
    title: "Principles of Accounting I",
    author: ["Joel J. Lerner", "James A. Cashin"],
    image: "https://www.directtextbook.com/large/0071635386.jpg",
    isbn: "0071635386",
    published: 2009,
    edition: 5,
    condition: "okay",
    subject: "Accounting",
    ownerEmail: "kelsea14oh@gmail.com"
}

];

module.exports = booksSeed;
