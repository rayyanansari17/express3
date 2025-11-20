import express from "express"

const app = express()
app.use(express.json())
const port = 6000


// app.get("/",(req,res)=>{
//     try {
//         let data = ["suhail", "ali", "roushan"]
//         console.log(data);
//         res.status(200).json
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({msg: error})
//     }
// })


app.post("/register",(req,res)=>{
    try {
        let data =req.body
        res.status(200).json({msg:data})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})

app.listen(port,()=>{
    console.log(`server started http://localhost:${port}`);
})