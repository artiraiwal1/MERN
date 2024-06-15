import http from "http";
import fs from "fs";
const server = http.createServer((request,response)=>{
    if(request.url=="/home"){
        fs.readFile("Home.html", (err, data) => {
        if (err) {
            response.writeHead(500, { 'Content-Type': 'text/html' });
            response.end('500 Internal Server Error');
        }else{
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(data);
        }
    });
    }else if(request.url == "/about"){
        fs.readFile("AboutAS.html", (err, data) => {
            if (err) {
                response.writeHead(500, { 'Content-Type': 'text/html' });
                response.end('500 Internal Server Error');
            }else{
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.end(data);
            }
        });
    }else if(request.url == "/contact"){
        fs.readFile("contactAS.html", (err, data) => {
            if (err) {
                response.writeHead(500, { 'Content-Type': 'text/html' });
                response.end('500 Internal Server Error');
            }else{
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.end(data);
            }
        });
    }else if(request.url == "/login"){
        fs.readFile("login.html", (err, data) => {
            if (err) {
                response.writeHead(500, { 'Content-Type': 'text/html' });
                response.end('500 Internal Server Error');
            }else{
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.end(data);
            }
        });
    }else{
        response.end("<h1>Page Does not Exit ...</h1>");
    }
});
server.listen(3009,()=>{
    console.log("server Starterd...");
});