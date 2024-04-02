const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const connectDB = require("./Config/configDB")
// connectDB();

app.use('/api/', require('./Routes/userRoute'));
app.use('/api/', require('./Routes/hostelRoute'));


app.listen(PORT, () => {
    console.log('Server is running on port 3000');
})