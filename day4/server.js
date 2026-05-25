const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("dotenv").config();

const port = process.env.PORT;

const { createAccount, login } = require("./controllers/user");
const { createnotebook, getNotes ,updateNotebook,deleteNotebook} = require("./controllers/note");

app.use(express.json());

app.post("/signin", createAccount);
app.post("/login", login);
app.post("/createnotebook", createnotebook);
app.get("/allNotes",getNotes);
app.put("/update/:id",updateNotebook)
app.delete("/delete/:id",deleteNotebook)

mongoose.connect(process.env.MONGO_URL)
.then(() => {

    console.log("database is connected");

    app.listen(port, () => {
        console.log(`server is running port number ${port}`);
    });

})
.catch((e) => {
    console.log("not connected", e);
});
