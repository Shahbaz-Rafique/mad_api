const express=require('express');
const router=express.Router();
const { connection } = require("../database/sql");

router.post('/',(request,response)=>{
    const name=request.body.name;
    const rollNo=request.body.rollno;
    const assignment=request.body.assignment;
    const marks=request.body.marks;

    const data={
        name:name,
        rollno:rollNo,
        assignment:assignment,
        marks:marks,
    }

    connection.query('INSERT INTO record SET ?',data,(err,res)=>{
        if (err) throw err;
        else{
            response.status(200).json({ message: 'Data Submitted Successfully' });
        }
    })
})
module.exports=router;