// // const express = require('express');
import express from 'express';
import home, { contact } from './pages/home.js';
import { about } from './pages/about.js';
import { login } from './pages/login.js';
import { submit } from './pages/submit.js';
const app = express();

app.get("",(req,resp)=>{
    resp.send("<h1>Basic node js example</h1>")
});
app.get("/home",(req,resp)=>{
    resp.send("Home Page")
});
app.get("/about",(req,resp)=>{
   resp.send("About Page")
});
app.get("/contact",(req,resp)=>{
     resp.send("Contact Page")
});

app.listen(8080)




