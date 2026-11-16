import express from "express";
const app = express();
const PORT = 5000;


app.use(express.json());

app.get('/api/health', (req, res) => {
    res.status(202).json({
        "status":"success",
        "message":"Server is running..."
    })
});

app.listen(PORT, () => {
    console.log(`Server is started at PORT ${PORT}`);
});
