require("dotenv").config();
const server = require("./app")
const { conn } = require('./DB_connection');
const PORT = process.env.PORT || 3001;

conn.sync({force: false}).then(()=>{
    server.listen(PORT, ()=> {
        console.log(`Listening on port ${PORT}`)
    });
});

