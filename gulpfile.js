/**
 * Created by Admin on 2017/10/18.
 */
var fs=require("fs");
var url=require("url");
var path=require("path");
var gulp=require("gulp");
var webserver=require("gulp-webserver");
gulp.task("server",function(){
    gulp.src("./")
        .pipe(webserver({
            port:8090,
            host:"localhost",
            livereload:{
                path:"./",
                enable:true
            },
            middleware:function(req,res,next){
                var urls=url.parse(req.url).pathname;
                var pathname=path.join(__dirname,"Data",urls+".json");
                fs.exists(pathname,function(exist){
                    if(!exist){
                        var data={
                            "isSuccess":false,
                            "errCode":1,
                            "errMsg":"找不到您需要的数据",
                            "data":null
                        };
                        res.writeHead(404,{
                            "Content-Type":"text/json;charset=utf8",
                            "Access-Control-Allow-Origin":"http://localhost:63342"
                        });
                        res.end(JSON.stringify(data));
                    }
                    fs.readFile(pathname,function(err,result){
                        if(err) return console.error(err);
                        var data={
                            "isSuccess":true,
                            "errCode":0,
                            "errMsg":"",
                            "data":result.toString()
                        };
                        res.writeHead(200,{
                            "Content-Type":"text/json;charset=utf8",
                            "Access-Control-Allow-Origin":"http://localhost:63342"
                        });
                        res.end(JSON.stringify(data));
                    })
                })
            }
        }))
})