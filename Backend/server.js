const express = require("express");

const cors = require("cors");

const {exec} = require("child_process")

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("This is the backend server for dreamzlab ! ");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

app.get("/test", (req, res) => {
    exec("docker images" , (error, stdout, stderr) => {
        if (error){
            console.error(error);
            return res.status(500).send(error.message);
        }
        if (stderr){
            console.log(stderr);
        }

        res.send("<pre>" + stdout + "</pre>");
    });
});