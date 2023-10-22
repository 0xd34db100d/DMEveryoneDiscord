const Discord = require("discord.js")
const config = require("./config.json")
const { abort } = require("process")
const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.GuildMembers,
    ],
})

const interval = config.TIME
const message = config.MESSAGE
const id = config.ID
const token = config.BOT_TOKEN

client.on(Discord.Events.ClientReady, async (client) => {
    console.log("Bot just loaded! @D34D 2023\nGoing to: " + id + "\n")
    const guild = await client.guilds.fetch(id)
    const members = await guild.members.fetch()
    var all = members.size
    console.log("Members: " + all + "\n")
    let index = 0
    let time = 0
    members.forEach((member) => {
        index++
        setTimeout(function () {
            time++
            console.log("Sending to (" + time + " of " + members.size + "): " + member.user.username + " (" + member.user.id + ")")
            member.send('<@' + member.user.id + ">," + message).catch(error => {
                console.log("ERROR")
            });
        }, index * interval
        )
    })
})
client.login(token)
