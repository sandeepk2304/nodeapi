var express = require('express')
// Import Mongoose
let mongoose = require('mongoose');
var app = express()
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));
var port = process.env.PORT || 3000;
// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost:27017/api_mongodb',{ useNewUrlParser: true },(err)=>{
    if(err) {
        console.log('Connection error');
    }
});
//import route
const apiRoutes = require('./routes')

app.use('/api',apiRoutes);
// Send message for default URL

app.get('/', (req, res) => res.send('Welcome!'));

console.log(`NODE_ENV : ${process.env.NODE_ENV}`)

app.listen(port,function name(params) {
    console.log(`Listing on port ${port}...`);
})
