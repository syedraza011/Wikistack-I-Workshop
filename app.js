const express=require("express")
const app=express();
const morgan=require('morgan')
app.use(morgan('div'))
const html=require ('html-template-tag')
app.use(express.static("./assests"));
app.use(express.urlencoded({ extended: false }));
const { addPage, editPage, main, userList, userPages, wikiPage } = require('./views');
const { db, user, page } = require('./models');
 
db.authenticate() 
  .then(() => { 
    console.log('connected to the database'); 
})
//creating tables user and pages
const init= async()=>{
  const initialization = await db.sync()
return initialization;
  
}
init();
app.get('/',(req,res)=>{
  res.send("hello world");  
});





const PORT=3000;
app.listen(PORT,()=>{
    console.log("Listning to port 4000");
})