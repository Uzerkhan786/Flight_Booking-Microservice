const express=require('express');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}))
const {PORT}=require('./config/config-env')
const db=require('./models/index');
const router=require('./routes/index')



app.use('/api',router);
app.listen(PORT,async(req,res)=>{
    //db.sequelize.sync({alter:true})
   
    console.log(`Server is started at  ${PORT}`);
})
