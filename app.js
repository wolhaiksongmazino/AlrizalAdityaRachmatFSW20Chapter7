const express = require('express')
const PORT = process.env.PORT || 3000;
const app = express();
const router = require('./router');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/v1", router);


app.listen(PORT, () => console.log('server running on port= ${PORT}'));