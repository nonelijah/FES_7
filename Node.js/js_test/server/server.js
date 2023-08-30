const { resolve } = require("dns/promises");
const http = require("http");

http.createServer((req, res) => {
    // res.writeHead(200, { "content-Type": "text/html" });
    // res.end("<p>hello world~!</p>");
    if (req.url === "/") {
        res.writeHead(200);
        res.end("main url");
    } else if (req.url === "/upload") {
        res.writeHead(200);
        res.end("upload url");
    } else if (req.url === "/delete") {
        res.writeHead(200);
        res.end("delete url");
    } else {
        res.writeHead(404);
        res.end("not found!!!");
    }
}).listen(3000, () => {
    console.log("3000번 포트 접속 완료!");
});
