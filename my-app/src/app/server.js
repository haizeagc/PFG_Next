import jsonServer from "json-server";
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use((req, res, next) => { 
    console.log("Request received");
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Mehods",
        "GET, POST, PUT, PATCH, DELETE, OPTIONS"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

server.use(router);

server.listen(3001, () => {
    console.log("JSON Server is running");
});
