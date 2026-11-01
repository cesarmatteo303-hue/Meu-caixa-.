const http = require("http");
const fs = require("fs");
const path = require("path");

const files = {
  "/": { name: "index.html", type: "text/html; charset=utf-8" },
  "/index.html": { name: "index.html", type: "text/html; charset=utf-8" },
  "/hino-nacional.ogg": { name: "hino-nacional.ogg", type: "audio/ogg" },
};

http.createServer((req, res) => {
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.writeHead(405, { Allow: "GET, HEAD" });
    return res.end();
  }

  const pathname = (req.url || "").split("?")[0];
  const file = files[pathname];
  if (!file) {
    res.writeHead(404);
    return res.end();
  }

  fs.readFile(path.join(__dirname, file.name), (err, data) => {
    if (err) {
      console.error(`Erro ao ler ${file.name}:`, err);
      res.writeHead(500);
      return res.end();
    }
    res.writeHead(200, {
      "Content-Type": file.type,
      "Content-Length": data.length,
      "X-Content-Type-Options": "nosniff",
    });
    res.end(req.method === "HEAD" ? undefined : data);
  });
}).listen(8123, () => console.log("Abra http://localhost:8123"));
