const express=require('express')
const app=express()
app.use(express.json())

app.listen(3000,()=>{
    console.log(`Server is running on http://localhost:3000`)
})

app.get('/',(req,res)=>{
    res.send("Working")
})

app.post('/signup',(req,res)=>{
    const {username,email,password,dob}=req.body

    if(!username){
        return res.status(400).json({error:"Username cannot be empty"})
    }

    if(!email){
        return res.status(400).json({error:"Email cannot be empty"})
    }

    if(!password || password.length <8 || password.length>16){
        return res.status(400).json({error: "Please enter password or Password length should be greater than 8 or less than or equal to 16"})
    }

    return res.status(201).json({message: "Created user successfully"})
})