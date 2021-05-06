const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/books"
);

const bookSeed = [
  {
    authors: ["Suzanne Collins", "Paul Vatterott"],
    description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
    image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
    title: "The Hunger Games"
  },
  {
    authors: ["J. K. Rowling"],
    description: "Harry Potter is preparing to leave the Dursleys and Privet Drive for the last time. But the future that awaits him is full of danger, not only for him, but for anyone close to him - and Harry has already lost so much. Only by destroying Voldemort's remaining Horcruxes can Harry free himself and overcome the Dark Lord's forces of evil. In this dramatic conclusion to the Harry Potter series, Harry must leave his most loyal friends behind, and in a final perilous journey find the strength and the will to face his terrifying destiny: a deadly confrontation that is his alone to fight. These adult editions with glorious jacket art by Andrew Davidson are now available in hardback for the first time.",
    image: "http://books.google.com/books/content?id=N6DeDQAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link: "https://www.googleapis.com/books/v1/volumes/N6DeDQAAQBAJ",
    title: "Harry Potter and the Deathly Hallows"
  }
  
];

db.Book.remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
