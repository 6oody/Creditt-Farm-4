const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "B";
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
      }
});

client.on('ready', async() => {
var server = "505028803043655700"; // ايدي السررفر
var channel = "505028803043655702";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**كودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودز **')
    },305);
})

client.on('ready', async() => {
var server = "505028803043655700"; // ايدي السررفر
var channel = "505028803043655702";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('#daily')
    },86400);
})
client.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = "^";
  let messageArray = message.content.split (" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);






  if(cmd === `${prefix}say`){
     if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Oh hell noooo oof , You don't have permission biacht");
    let botmessage = args.join(" ");
    message.delete().catch();
  message.channel.send(`${botmessage}`);
  }
});

client.login(process.env.BOT_TOKEN);
