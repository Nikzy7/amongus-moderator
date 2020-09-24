const { Client } = require("discord.js");

// Declares our bot,
// the disableEveryone prevents the client to ping @everyone
const client = new Client({
    disableEveryone: true
});

config({
    path: __dirname + "/.env"
})

// When the bot's online, what's in these brackets will be executed
client.on("ready", () => {
    // Set the user presence
    client.user.setPresence({
        status: "online",
        game: {
            name: "me getting developed",
            type: "WATCHING"
        }
    }); 
})


client.on("message", async message => {
    
    if(message.author.bot && !(message.author.username == "Manager")) return;
    if (!message.guild) return;

    let channel = client.channels.cache.get('ENTER_CHANNEL_ID_HERE');

    if(message.author.username == "Manager" && message.author.bot){
    if (message.content == '/muteAll') {  
        for (let member of channel.members) {
            await member[1].voice.setMute(true);
        }
        await message.channel.send('Sssshhhhhhhhhh ! Users muted by the Moderator !');
     }

    if (message.content == '/unmuteAll')
    {
        for (let member of channel.members) {
            await member[1].voice.setMute(false);
        }
        await message.channel.send('Discuss!!!!! Users unmuted by the Moderator !');
    }
}
});

// Login the bot
client.login('ENTER_TOKEN_HERE');