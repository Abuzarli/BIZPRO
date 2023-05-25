const express=require ('express');
const cors =require ('cors');
const mongoose = require ('mongoose')
const dotenv = require ('dotenv')
const bodyParser = require ('body-parser')
const PORT=9095;
const app=express()
app.use(cors)
app.use (bodyParser.json())

const bizPro=[
    {
        icon:"fa fa-pencil-square-o",
        title:"WEB DEVELOPMENT",
        text:'Lorem ipsum dolor sit amet, consect et adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
    },
    {
        icon:"fa fa-camera",
        title:"PHOTOGRAPHY",
        text:'Lorem ipsum dolor sit amet, consect et adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
    },
    {
        icon:"fa fa-life-ring",
        title:"DIGITAL MEDIA",
        text:'Lorem ipsum dolor sit amet, consect et adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
    },
    {
        icon:"fa fa-line-chart",
        title:"ONLINE MARKETING",
        text:'Lorem ipsum dolor sit amet, consect et adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
    },
]

// BASE API URL
app.get('/api',(req,res)=>{
    res.send('Welcome to our API');
})

// GET PRODUCTS
app.get('/api/products',(req,res)=>{
    res.send(bizPro)
})

// GET PRODUCTS BY ID
app.get('/api/products/:id',(req,res)=>{
    const {id}= req.params
    const product = bizPro.find((x)=>x.id==id)
    res.send(product)
})

// Post PRODUCT
app.post('/api/products',(req,res)=>{
    const{icon,title,text}=req.body
    const newProduct=
    {
        icon:"fa fa-camera",
        title:"PHOTO",
        text:'Lorem ipsum dolor sit amet.'
    }
    bizPro.push(newProduct)
    res.send(newProduct)
})



app.listen(PORT,()=>{
    console.log(`Api running on Port:${PORT}`);
})