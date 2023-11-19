const Discord = require("discord.js")

require("dotenv").config()
// const TOKEN = "MTE3NTcyMDA1Mjk5NDA4NDg4Ng.G8ntQ7.u-c2UTRss_t_bulMIFmJZO8067Zh5J4U99EsxU"

const client = new Discord.Client({
    intents: [
        "Guilds",
        "GuildMessages",
        "MessageContent",
        "DirectMessages",
        "GuildMessageReactions",
        "GuildMembers",
    ]
})

const { spawn } = require('child_process');
const { stringify } = require("querystring")
const output = []; // Store readings

// const sensor = spawn('python', ['chatbot.py' , 'hello']);
// sensor.stdout.on('data', function(data) {

//     // convert Buffer object to Float
//     temperatures.push(String(data));
//     console.log(temperatures);
// });


client.on("ready" , () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate" , (message) => {
    if ((message.content).toLowerCase() == "wk stekkie"){
        // client.channels.cache.get('1175724091303542784').send('Hello here!')

        const sensor = spawn('python', ['chatbot.py' , message.content]);
        sensor.stdout.on('data', function(data) {

        // convert Buffer object to Float
        // output.push(String(data));
        // console.log(String(data));
        if (String(data) == message.content){
            client.channels.cache.get('1175724091303542784').send('Wehhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh \nidk, what to say now');
        }else{
            client.channels.cache.get('1175724091303542784').send(String(data));
        }
        
        sensor.kill();
        // console.log(output);
        });

        

    }
})


// TODO: add responses based on reactions
// client.on("messageReactionAdd" , () => {
//     console.log(`Reacted`)
//     client.channels.cache.get('1175724091303542784').send('Hello here!')
// })



client.login(process.env.TOKEN)