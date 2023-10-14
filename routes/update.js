const express=require('express');
const router=express.Router();
const { connection } = require("../database/sql");

router.post('/',(request,response)=>{
    console.log("hello");
    const name=request.body.name;
    const rollNo=request.body.rollno;
    const assignment=request.body.assignment;
    const marks=request.body.marks;
    const id=parseInt(request.body.Id);

    connection.query(`UPDATE record SET name='${name}',rollno='${rollNo}',assignment='${assignment}',marks=${marks} where Id=${id}`,(err,res)=>{
        if (err) throw err;
        else{
            response.status(200).json({ message: 'Data Submitted Successfully' });
        }
    })
})
module.exports=router;