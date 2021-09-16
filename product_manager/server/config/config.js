const mongoose = require('mongoose');
const db_name = "wall_of_ninjas_db";

//mongoose connection/config
mongoose.connect("mongodb+srv://root:rootroot@mernprojects.9thih.mongodb.net/productsdb?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));
