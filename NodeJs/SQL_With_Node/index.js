const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');
const path = require('path');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'Harshit@9670'
});
let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
}
// Home Page: Connect to the database and execute a query
app.get('/', (req, res) => {
  let q = `SELECT COUNT(*) FROM user`;
  try {
    connection.query(q, (err, results) => {
      if (err) {
        console.log('Error executing query:', err)
        throw err;
      }
      console.log('User count query results:', results);//User count query results: [ { 'COUNT(*)': 303 } ]
      console.log('User count:', results[0]['COUNT(*)']);
      // res.send(`Total users: ${results[0]['COUNT(*)']}`);
      //Node.js me results array of objects return hota hai:  [ { 'COUNT(*)': 303 } ] AGAR YE STRing ke sath ho to [object Object]
      res.render('home', { userCount: results[0]['COUNT(*)'] });
    })
  } catch (error) {
    console.log('Error connecting to database:', error);
    res.status(500).send('Error retrieving user count');
  }
});
app.get('/users', (req, res) => {
  let q = `SELECT * FROM user`;
  try {
    connection.query(q, (err, results) => {
      if (err) {
        console.log('Error executing query:', err);
        throw err;
      }
      console.log('User query results:', results);
      res.render('users', { users: results });
    })
  } catch (error) {
    console.log('Error executing query:', error);
    res.status(500).send('Error retrieving users');
  }
});
app.get('/users/:id/edit', (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id = ?`;
  try {
    connection.query(q, [id], (err, results) => {
      if (err) {
        console.log('Error executing query:', err)
        throw err;
      }
      console.log('User query results:', results[0]);
      // res.render('edit', { user: results[0] });
      res.render('edit', { user: results[0] });
    })
  } catch (error) {
    console.log('Error executing query:', error);
    res.status(500).send('Error retrieving user');
  }
});
// Update user data IN DATABASE
app.patch('/users/:id',(req,res)=>{
  const{id}=req.params;
  const{username,email,password}=req.body;
  let q1=`SELECT * From user WHERE id=?`;
  connection.query(q1,[id],(err,results)=>{
    if (results[0].password!==password) {
      console.log('Incorrect password. User data not updated.',results[0]);
      res.status(401).send(`<script>
        alert("Incorrect password. User data not updated. Please try again.");
        </script>`+`<a href="/users">Back to Users</a>`);
        return; 
    } else {
      let q2=`UPDATE user SET username=?,email=? WHERE id=?`;
      connection.query(q2,[username,email,id],(err,results)=>{
        try {
          if(err){
            console.log('Error executing query:', err);
            throw err;
          }
          console.log('User update results:', results[0]);
          res.redirect('/users');
        } catch (error) {
          console.log('Error updating user:', error);
          res.status(500).send('Error updating user');
        }        
      });
    }
  })
})
// create new user
app.get('/adds',(req,res)=>{
  let id=uuidv4();
  res.render('add.ejs', { id: id });
});
app.post('/users',(req,res)=>{
  let { id,username,email,password } = req.body;
  let q=`INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)`;
  try {
    connection.query(q, [id, username, email, password], (err, results) => {
      if (err) {
        console.log('Error executing query:', err);
        throw err;
      }
      console.log('User created:', results);
      res.redirect('/users');
    })
  } catch (error) {
    console.log('Error creating user:', error);
    res.status(500).send('Error creating user');
  }
});
// Delete user
app.get('/users/:id',(req,res)=>{ 
  let { id } = req.params;
  let q=`SELECT * FROM user WHERE id=?`;
  connection.query(q,[id],(err,results)=>{
    if(err){
      console.log('Error executing query:', err);
      throw err;
    }
    console.log('User query results for deletion:', results[0]);
  });
  res.render('delete.ejs', { id: req.params.id });
});


app.delete('/users/:id',(req,res)=>{
let { id } = req.params;
let { password , email} = req.body;
let q1=`SELECT password,email FROM user WHERE id=?`;
connection.query(q1,[id],(err,results)=>{
  if(err){
    console.log('Error executing query:', err);
    throw err;
  }
  console.log('User query results for deletion:', results[0]);  
  if(results[0].password===password && results[0].email===email){
    let q2=`DELETE FROM user WHERE id=?`;
    connection.query(q2,[id],(err,results)=>{
      if(err){
        console.log('Error executing query:', err);
        throw err;
      }
      console.log('User deleted:', results);
      res.redirect('/users');
    })
  } else {
    res.status(401).send(`<script>
        alert("Incorrect password or email. User not deleted.");
        </script>`+`<a href="/users">Back to Users</a>`);
  }
})
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
}
);

//edit user data alternative approach
// app.patch('/users/:id', (req, res) => {
//   let { id } = req.params;
//   let { username, email, password } = req.body;
//   let q1 = `SELECT password FROM user WHERE id = ?`;
//   connection.query(q1, [id], (err, results) => {
//     if (password === results[0].password) {
//       let q = `UPDATE user SET username = ?, email = ? WHERE id = ?`;
//       try { 
//         connection.query(q, [username, email, id], (err, results) => {
//           if (err) {
//             console.log('Error executing query:', err)
//             throw err;
//           }
//           console.log('User update results:', results);
//           res.redirect('/users');
//         })
//       } catch (error) {
//         console.log('Error executing query:');
//         res.status(500).send('Error updating user');
//       }
//     } else {
//       console.log('Error executing query:');
//       res.status(401).send(`
//         <script>
//             alert("Incorrect password. User data not updated. Please try again.");
//         </script>
//     ` + `<a href="/users">Back to Users</a>`);
//       return;
//     }
//   })
// });





// let q='INSERT INTO user (id, username, email, password) VALUES ?';
// let data=[];
// for(let i=0; i<100; i++){
//   data.push(getRandomUser());//100 fake users generated using faker library and stored in data array
// }
// let values=[
//   ['102', 'john', 'john@gmail.com', 'password456'],
//   ['103', 'jane', 'jane@gmail.com', 'password789']
// ];
// try {
//   connection.query(q, [data], (err, results) => {
//     if (err) {
//       console.log('Error executing query:', err);
//       throw err;
//     }
//     // console.log('Tables in the database:', results);
//     // console.log('Connected to database! with', results.length, 'tables first table is', results[0].Tables_in_delta_app, 'second table is', results[1]?.Tables_in_delta_app || 'None');
//   });
// } catch (error) {
//   console.log('Error connecting to database:', error);
// }
// connection.end();
// console.log(getRandomUser());