const express = require('express')
const app = express();
var cors = require('cors');
app.use(cors());
//const uri = process.env.URI;
//The webiste-->Node
var mongoose = require('mongoose');
var uri = "mongodb+srv://viveksharma20348:Vivek_10sharma@cluster0.enaemef.mongodb.net/book_system";
mongoose.connect(uri);
app.use(express.json()); // Parses JSON bodies
console.log("connection good");
app.get('/api', (req, res) => {
	res.send("From the server side of signup");
})

app.use('/', require('./routes/index'));
app.listen(8000);