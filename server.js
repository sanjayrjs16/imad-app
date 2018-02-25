var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={ 
'article-one':{
    title: "article-one",
    heading: "ArticleOne",
    content: ` <div class="container">
        
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            
            <h3>
                Article one
            </h3>
            <p>
                This is the content bro.
            </p>`
},
'article-two':{
    
    title: "article-two",
    heading: "ArticleTwo",
    content: ` <div class="container">
        
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            
            <h3>
                Article two
            </h3>
            <p>
                This isapp the content2 bro.
            </p>`

},
'article-three':{
    
    title: "article-three",
    heading: "ArticleThree",
    content: ` <div class="container">
        
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            
            <h3>
                Article three
            </h3>
            <p>
                This is the content3 bro.
            </p>`

},
    
};

function createtemplate(data){
 
 var title=data.title;
 var heading=data.heading;
 var content=data.content;
    var htmltemplate=`
    <html>
        <head>
            <title> ${title} </title>
        
           <link href="/ui/style.css" rel="stylesheet" />
        </head>
    
    <body>
        <div class="container">
            
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                
                <h3>
                    ${heading}
                </h3>
                <p>
                    ${content}
                </p>
           
        </div>
     </body>
    </html>
`
return htmltemplate;
    
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});

app.get('/:articleName', function (req, res) {
  var articleName=req.params.articleName;
  res.send(createtemplate(articles[articleName]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names=[];
app.get('/submit-name/:name', function(req,res){
var name=req.params.name;
names.push(names);
res.send(JSON.stringify(names));
});
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
