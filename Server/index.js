import express from "express"
import cors from "cors"
import { config } from "dotenv"
import cookieParser from "cookie-parser"
import ConnectDB from './Database/Mongoose.js';


 const app = express()
 const port = process.env.PORT || 4000;
 config();
 ConnectDB();
 
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json())
app.use(cookieParser())


app.get('/', (req, res)=>{
  res.send("Server in running")
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});