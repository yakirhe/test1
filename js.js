/**
 * Created by Yakir Hershkoviz on 01/06/2017.
 */
var http = require("http");
var connect = require("connect");
var app = connect();

http.createServer(app).listen(8888,function(){
    console.log("start listening");
});

app.use('/getTopFive',getTopFive);
app.use('/',root);
app.use('/',root2);

function root(req,res){

}

function root2(req,res){

}

function getTopFive(req,res){
    res.write(req.url);
    res.end();
}