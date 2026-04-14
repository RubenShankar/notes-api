console.log("THIS IS DATABASE");

const pool = require("./config/db.js");

pool.query("SELECT NOW()",(err,res)=>
   {
      if(err)
        {
            console.log("ERROR DB :", err.message);
        }
      else
       {
          console.log(" DB CONNECTED :", res.rows);
       }
     pool.end();
   });
