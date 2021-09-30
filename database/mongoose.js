
const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/translation-api',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });


// mongodb+srv://testdb:testdb123@cluster0.uxyzv.mongodb.net/shopperDb?retryWrites=true&w=majority

mongoose.connect('mongodb+srv://testdb:testdb123@cluster0.uxyzv.mongodb.net/translationAPI?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


