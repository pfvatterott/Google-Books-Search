const express = require("express");
const mongoose = require("mongoose")
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/books",
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

const http = require('http').createServer(app)
const io = require('socket.io')(http)

io.on('connection', function(socket) {
  socket.on('bookSavedNotification', function(data) {
    io.emit('bookSavedNotification', data)
  })
})

http.listen(PORT, function() {
  console.log('listening on 4000')
})

// app.listen(PORT, () => {
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });
