var http=require("http");
var fs=require("fs");
http.createServer(function(req,res){
    switch (req.url){
        case"/index.html":
            fs.readFile("index.html","utf-8",function(err,data){
                if(err){
                    console.log(err);
                }else {
                    res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
                    res.end(data);
                }
            })
            break;
        case"/a.jpg":
            fs.readFile("a.jpg",function(err,data){
                if(err){
                    console.log(err);
                }else {
                    res.writeHead(200,{"content-type":"image/jpeg;charset=utf-8"});
                    res.end(data);
                }
            })
            break;
        case"/index.css":
            fs.readFile("index.css","utf-8",function(err,data){
                if(err){
                    console.log(err);
                }else {
                    res.writeHead(200,{"content-type":"text/css;charset=utf-8"});
                    res.end(data);
                }
            })
            break;
        case"/index.js":
            fs.readFile("index.js","utf-8",function(err,data){
                if(err){
                    console.log(err);
                }else {
                    res.writeHead(200,{"content-type":"text/javascript;charset=utf-8"});
                    res.end(data);
                }
            })
            break;
        case"/index2.html":
            fs.readFile("index2.html","utf-8",function(err,data){
                if(err){
                    console.log(err);
                }else {
                    res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
                    res.end(data);
                }
            })
            break;
        case"/index3.html":
            fs.readFile("index3.html","utf-8",function(err,data){
                if(err){
                    console.log(err);
                }else {
                    res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
                    res.end(data);
                }
            })
            break
        default:
            res.end("404 没有找到此内容")
    }
}).listen(3000)