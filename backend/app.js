const express = require('express')
const bodyParser = require('body-parser')
//const Post = require('./models/post');

//create an express app
const app = express()

//use package to pass json data
app.use(bodyParser.json());

app.use((req,res,next) => {
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

//All the request targeting localhost/posts will come to this route
app.post('/api/posts',(req,res,next) => {/*
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
*/
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully'
  });

});

app.use('/api/posts',(req,res,next) => {
  //Add dummy posts content. Later should get from database
    const posts = [
      {id: 'fsdfsgsg43',
      title: 'First server side post',
      content: 'This is coming from the server'
    },

    {id: 'fsadsf2e3',
    title: 'Second server side post',
    content: 'This is coming from the server'
    }
    ];

  //chaining the status method to json method
  res.status(200).json({
    //message property
    message: 'Post fetched successfully',
    //post property that get the dummy data above
    posts: posts
  });
});


//connect to server.js by exporting app that stores express
//export for other module to import
module.exports = app;
