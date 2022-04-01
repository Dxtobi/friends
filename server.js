require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const multer = require("multer");
const cors = require("cors");
const PORT = process.env.PORT || 4000;
const app = express();
const http = require("http").Server(app);

app.use(cors());

const io = require("socket.io")(http,{
    cors:{
        origin:"*"
    }
});


//const start = require("./sockets/wss");
//const sendMessageToUser = require("./sockets/wss");



// mongoose.connect("mongodb://localhost/Friends-App")
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
        console.log(room,userId);
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
