const express = require('express');
const app=express();
const port=3000;
app.listen(port,()=>console.log('running on 3000 ...'))

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

var bodyParser = require('body-parser');
let url = "https://api.publicapis.org/entries";
let settings = { method: "Get" };
fetch(url, settings)
    .then(res => res.json()
        )
    .then((json) => {
        var arrayAll = [];
        
        for (let i = 0; i <= 5; i++) {
        arrayAll.push(json["entries"][i]);
     
      
        app.set('view engine', 'html');

        app.engine('html', require('ejs').renderFile);
        app.get('/', function(req, res){
        res.render('index.html',{All:arrayAll });
        app.use(express.static(__dirname + '/views'));

});
}

        
  });

