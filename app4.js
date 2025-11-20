import express from "express"

const app = express()
app.use(express.json())
const port = 6001


app.post("/login",(req,res)=>{
    try {
        
        let email = req.body.email
        let password = req.body.pass

        if(password.length < 3){
            return res.status(405).json({msg: "password is too short"})
        }

        let outermsg = `your email is ${email} and your password is ${password}`
        console.log(outermsg);

        res.status(200).json({msg: outermsg})

    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})

app.listen(port,()=>{
    console.log(`server is running http://localhost:${port}`);
})