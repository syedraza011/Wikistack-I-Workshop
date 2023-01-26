const express=require("express")
const app=express();
const morgan=require('morgan')
app.use(morgan('div'))
const html=require ('html-template-tag')
app.use(express.static("assests"));
app.use(express.urlencoded({ extended: false }));
const { addPage, editPage, main, userList, userPages, wikiPage } = require('./views');


app.get('/',(req,res)=>{
  res.send("hello world");  
});

const PORT=3000;
app.listen(PORT,()=>{
    console.log("Listning to port 4000");
})