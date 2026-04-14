console.log("MAIN CONNECTION IS THIS == app.js");

require ("dotenv").config();  // connecting db 
console.log(process.env.DB_NAME);

const  express = require("express");
const app= express();

const noteRoutes= require("./routes/noteRoutes");

app.use(express.json());

app.use("/notes",noteRoutes);

app.use((err,req,res,next)=>
  {
      console.log("GLOBAL ERROR :",err.message);
     res.status(400).json({message :"INVALID JSON FORMAT"});
  }
);
app.get("/", (req,res)=>
 {
   res.send("NOTE API RUNNING");
 });

app.listen(3100,()=>
  {
    console.log("NODE RUNNING IN PORT NUMBER 3100");
  }
);

