import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.listen(process.env.PORT || 3001, () => {
  console.log("start");
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/chat", require('./chat/chat.post'))
app.use("/chat", require('./chat/chat.get'))
app.use("/chat", require('./chat/chat.put'))
app.use("/chat", require('./chat/chat.delete'))

app.use("/chats", require('./chats/chats.post'))
app.use("/chats", require('./chats/chats.get'))
app.use("/chats", require('./chats/chats.put'))
app.use("/chats", require('./chats/chats.delete'))

app.use("/message", require('./messages/message.post'))
app.use("/message", require('./messages/message.get'))
app.use("/message", require('./messages/message.put'))
app.use("/message", require('./messages/message.delete'))

app.use("/user", require('./users/user.post'))
app.use("/user", require('./users/user.get'))
app.use("/user", require('./users/user.put'))
app.use("/user", require('./users/user.delete'))
