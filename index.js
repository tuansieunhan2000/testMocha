var express = require('Express');
var app = express();

var things = require('./things.js');
const post =3000;
//both index.js and things.js should be in same directory
app.use('/things', things);

app.listen(post,()=>{
    console.log(`Server is running on port ${post}`);
});