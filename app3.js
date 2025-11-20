import express from "express"

const app = express()
app.use(express.json())
const port = 6001

app.post("/login",(req,res)=>{
    try {
        let data =req.body
        res.status(200).json({msg:"login successfull"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})

app.listen(port,()=>{
    console.log(`server started http://localhost:${port}`);
})