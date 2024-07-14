import express from "express";
const app  =  express();
const port = 5000;
app.get("/",(req,res)=> {
     res.json({mag: "Hello World"});
})
app.listen(port, ()=> {
    console.log(`The server is running at http://localhost:${port}`)
})