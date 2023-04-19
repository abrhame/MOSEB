const dotenv = require("dotenv");
dotenv.config();


const {app, express}  = require("./server");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const MONGO_URI = process.env.MONGO_URI

mongoose.connect(MONGO_URI, {
    useUnifiedTopology:true, 
    useNewUrlParser:true
}).then(()=>{
    console.log("Connected to Mongo Database Successfully");
}).catch((e)=>{
    console.log("============ERROR WHILE CONNECTING TO DATABASE==============="); 
    console.log(e);
})


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());


//all routes
const authRouter = require("./router/Authentication");

app.use("/auth", authRouter);


app.all("*", function (req, res, next) {
    next(ExpressError("Page not found", 404));
});


app.use(function (err, req, res, next) {
const { status = 500 } = err;
if (!err.message) {
    err.message = "Something went wrong";
}
res.json({
    msg: err.type,
}).status(status);
});