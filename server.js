const express = require('express');
const app = express();
const PORT = process.env.PORT || 3400;
const connectDB = require("./Config/configDB");
const cookieParser = require('cookie-parser');

connectDB();

app.use(express.json());
app.use(cookieParser());
app.use('/api/', require('./Routes/userRoute'));
app.use('/api/', require('./Routes/hostelRoute'));
app.use('/', (req, res) => {
    res.send("Hello world");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
