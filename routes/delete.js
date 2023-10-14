const express=require('express');
const router=express.Router();
const { connection } = require("../database/sql");

router.post('/',(request,response)=>{
    const id=parseInt(request.body.Id);

    connection.query(`DELETE FROM record where Id=${id}`,(err,res)=>{
        if (err) throw err;
        else{
            response.status(200).json({ message: 'Data Submitted Successfully' });
        }
    })
})
module.exports=router;