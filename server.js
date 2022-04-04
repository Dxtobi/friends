require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const multer = require("multer");
const morgan = require("morgan");
const cors = require("cors");
const PORT = process.env.PORT || 4000;
const app = express();
const http = require("http").Server(app);

app.use(cors());
app.use(morgan("dev"));

const io = require("socket.io")(http,{
    cors:{
        origin:"*"
    }
});


// mongoose.connect("mongodb://192.168.137.96/Friends-App")
mongoose.connect(process.env.MONGO_URI)
   .then(() => console.log("Database connected!"))
   .catch(error => console.log(error))

// middlewares
app.use(express.json());
app.use(helmet());
app.use(express.static("public"));


// routes middleware
app.use("/",require("./routes/getRoute"))
app.use("/",require("./routes/postRoute"))
app.use("/",require("./routes/deleteRoute"))
app.use("/",require("./routes/updateRoute"))

const onConnection =  socket  => {
    
    let users = [];
    
    socket.on("newConnect",data => {
        console.log("data:",data);
        // for (let [id, socket] of io.of("/").sockets) {
            users.push({
              userID: socket.id,
              username: data,
            });
           socket.emit("users", users);
           return users;
        // }
    })


    socket.on("subscribe", (room,userId) => {
        console.log("room:",room,"user",userId);
        // console.log(socket.id);
        socket.join(room);
    });

    socket.on("sendMessage",(msg,room) => {
        socket.to(room).emit("msg",msg);
    })

    // console.log(users);


}

io.on("connection", onConnection);


http.listen(PORT,() => console.log("Server running on port ", PORT));
