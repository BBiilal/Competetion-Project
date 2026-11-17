import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

function start () {
    connectDB();
}


app.use(express.json());
app.use(cors({
    origin: [
        "http://localhost:5173"
    ]
}));

app.get('/api/health', (req, res) => {
    res.status(202).json({
        "status":"success",
        "message":"hello hanif..."
    })
});

app.listen(PORT, () => {
    console.log(`Server is started at PORT ${PORT}`);
});

start();
