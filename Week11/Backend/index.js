const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

//port that backend runs on
const PORT = 4000;

function get_Connection(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'MB_Schema'
    })
}

let connection = get_Connection();

app.use(cors());

app.listen(PORT, () =>{
    console.log('listening')
})

//get all users
app.get('/users', (req,res)=>{
    GET_ALL_DATA = "SELECT * FROM users"
    connection.query(GET_ALL_DATA, (err,results)=>{
        return res.json({data: results})
    })
})

//add user
app.get('/users/add', (req,res)=>{
    //sets parameters for query
    const {user, pass} = req.query;
    //query to search for user to see if it already exists
    const FIND_USER = `SELECT * FROM users WHERE name='${user}'`;
    //creates variable for query to insert user
    const INSERT_USER = `INSERT INTO users(name, password,email,friends,chats) VALUES('${user}', '${pass}', '', '','"example":{"message":[""]}')`;

    //find user
    connection.query(FIND_USER, (err, results)=>{
        if(!err){
            if(results[0]){
                //user exists
                return res.send("false")
            }else{
                //user doesnt exist so add to database
                connection.query(INSERT_USER, (err, results)=>{
                    if(!err){
                        return res.send("true")
                    }else{
                        return console.log(err);
                    }
                })
            }
        }else{
            return console.log(err);
        }
    })
})

//verify login
app.get('/users/verifylogin', (req,res) => {
    const {user, pass} = req.query
    //query to see if user exists
    const FIND_USER = `SELECT * FROM userpass WHERE username="${user}"`;
    connection.query(FIND_USER,(err,results) => {
        if(err){return console.log(err)}else{
            if(results[0]){
                //if user exists check if password matches
                if(results[0].password == pass){
                    return res.send("true"); 
                }
                //returns rightuser if user matches but password doesnt
                return res.send("rightuser"); 
                
            }
            //returns false if no user is found
            return res.send('false'); 
        }

    })
})


//get value from specific field of a user
app.get('/users/getfield', (req,res)=>{
    //sets parameters for query
    const {user, field} = req.query;
    //query to get data
    const GET_DATA = `SELECT ${field} FROM users WHERE name = "${user}"`;

    connection.query(GET_DATA, (err, results)=>{
        if(!err){
            return res.send(results[0][field])
        }else{
            return res.send("false");
        }
    })
})


//get all forum posts
app.get('/forums', (req,res)=>{
    const GET_ALL_DATA = "SELECT * FROM forums"
    connection.query(GET_ALL_DATA, (err,results)=>{
        return res.json({data: results})
    })
})

//add forum post
app.get('/forums/createpost', (req,res) => {
    const {user, contents, topic,date,title} = req.query;
    //query to add to db

    const ADD_POST = `INSERT INTO forums(name,contents,comments,topic,date,title) VALUES('${user}','${contents}', '0', '${topic}', '${date}','${title}')`
    connection.query(ADD_POST, (err,results)=>{
        if(err){console.log(err)}
    })
})

//get all posts for specific topic
app.get('/forums/getposts', (req,res)=>{
    const {topic} = req.query;
    const GET_POSTS = `SELECT * FROM forums WHERE topic='${topic}'`
    connection.query(GET_POSTS, (err,results)=>{
        if(err){console.log(err)}else{
            console.log(results)
            return res.send(results)
        }
    })
})


/*
//get value from specific field of a user
app.get('/users/test', (req,res)=>{
    //sets parameters for query
    const {user, pass} = req.query;
    //query to get data
    const GET_DATA = `SELECT * FROM users WHERE name LIKE "%${user}%"`;

    connection.query(GET_DATA, (err, results)=>{
        if(!err){
            return res.send(results)
        }else{
            return res.send("false");
        }
    })
})
*/




