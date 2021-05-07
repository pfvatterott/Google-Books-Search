const express = require("express");
const mongoose = require("mongoose")
const routes = require("./routes");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
var http = require("http").Server(app);
const io = require("socket.io")(http);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

io.on('connection', function(socket){
  console.log("User connected");
  socket.on('message', function(msg){
    io.emit('message', msg);
  });
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/books");

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
