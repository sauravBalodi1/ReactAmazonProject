const functions = require("firebase-functions");

const express=require("express");
const cors =require("cors");
const stripe=require("stripe")
("sk_test_51IViWHAt2Q8V7HNTa20mV27urcRIiHYvw6WqHg7rHVvpAd1fBBrrEIzbrXP295G2t9sjrhExIOrkWniYo292XAJ000jwfr6ybb")
//api

//app config
const app=express();

// middlewares
app.use(cors({origin:true}));
app.use(express.json());

//api routes
app.get('/',(req,res)=>res.status(200).send("hello world"));

//listen command
exports.api=functions.https.onRequest(app);//api setup for clould functions

