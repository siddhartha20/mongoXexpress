const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(() => {console.log("Connection Successful!")})
.catch((err) => {console.log(err)});

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
};

let allChats = [
    {
        from: "dixit",
        to: "somya",
        msg: "send me your nudes",
        created_at: new Date(),    // Generates a random date
    },
    {
        from: "srivatsa",
        to: "somya",
        msg: "I love you!",
        created_at: new Date(),    // Generates a random date
    },
    {
        from: "yash",
        to: "somya",
        msg: "Let's fuck today",
        created_at: new Date(),    // Generates a random date
    },{
        from: "shikhar",
        to: "somya",
        msg: "Mujhe tumhari leni hai",
        created_at: new Date(),    // Generates a random date
    },{
        from: "chutiya",
        to: "somya",
        msg: "I am getting feelings for you",
        created_at: new Date(),    // Generates a random date
    },
]
Chat.insertMany(allChats).then((res) => {console.log(res)}).catch((err) => console.log(err));

//chat1.save().then((res) => {console.log(res)});