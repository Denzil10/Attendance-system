const express = require('express')
const app = express()
const cors = require('cors');
var bodyParser = require('body-parser');
const { json } = require('body-parser');

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors());

app.get("/student/fetch", (req, res) => {
    // fetch data 
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "student"
    });
    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT * FROM student", function (err, result, fields) {
            if (err) throw err;
            res.json(result)
        });
    })

})

app.get("/calendar/fetch", (req, res) => {
    // fetch data 
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "student"
    });
    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT * FROM calendar", function (err, result, fields) {
            if (err) throw err;
            res.json(result)
        });
    })

})

app.post("/calendar/mark", (req, res) => {
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "student"
    });

    let data = req.body.date
    data = JSON.stringify(data)
    con.connect(function (err) {
        var make_new = 0;
        if (err) throw err;
        con.query(`select count(1) from calendar where date = ${data}`, function (err, result, fields) {
            if (err) throw err;
            var count = 1
            Object.keys(result).forEach(function (i) {
                count = result[i]['count(1)'];
            });
            if (count == 0) {
                make_new = 1;
            }

            if (make_new) {
                con.query(`insert into calendar values(${data},0)`, function (err, result, fields) {
                    // if (err) throw err;
                    res.send("Added and marked")
                });

            }
            else {
                con.query(`update calendar set status= 1 where date = ${data}`, function (err, result, fields) {
                    if (err) throw err;
                    res.send("Marked on calendar")
                });
            }
        });

    })

})

app.post("/student/update", (req, res) => {
    // update data 
    let data = req.body
    console.log("typeof " + typeof data[0][1])
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "student"
    });
    con.connect(function (err) {
        if (err) throw err;
        for (let i = 0; i < data.length; i++) {

            con.query(`update student set status=${data[i][0]}, checkin ="${data[i][1]}", out_status=${data[i][2]}, checkout ="${data[i][3]}" where roll=${data[i][4]}`, function (err, result, fields) {
                if (err) throw err;
                console.log(result)
            });

        }

    })
    res.send("successfully posted data")
})

app.post("/student/add", (req, res) => {
    // update data 
    let data = req.body
    console.log("add " + data.name)
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "student"
    });
    con.connect(function (err) {
        if (err) throw err;
        con.query(`insert into student(roll, name) values(${data.roll}, "${data.name}") `, function (err, result, fields) {
            if (err) throw err;
            console.log(result)
        });

    })
    res.send("successfully added student")
})





app.listen(5000, () => {
    console.log("server started on port 5000")
})
