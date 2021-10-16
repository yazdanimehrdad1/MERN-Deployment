const express = require('express');
const cors = require('cors')    
const app = express();
app.use(cors()) 

require('./config/mongoose.config')
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

require('./routes/project.routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})