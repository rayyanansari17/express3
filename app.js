import express from "express"
import env from "dotenv"
env.config()


const app = express()
const port = process.env.PORT

app.get("/",(req,res)=>{
    try {
        res.status(200).json({msg: "hello everyone "})
    } catch (error) {
        console.log(error);
        res.status(400).json({msg: error})
    }
})

app.get("/home",(req,res)=>{
    try {
        res.status(200).json({msg: "hello everyone this is home page "})
    } catch (error) {
        console.log(error);
        res.status(400).json({msg: error})
    }
})

// app.listen(port,()=>{
//     console.log(`server started http://localhost:${port}`);
// })