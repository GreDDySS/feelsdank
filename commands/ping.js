exports.run = async (client, args, channel, tags, message) => {
    const used = process.memoryUsage().heapUsed / 1024 / 1024
    const memory = Math.round(used * 100) / 100
    const channelCount = await feelsdank.Channel.getJoinable();
    
    client.ping().then(function (data) {
        let ping = Math.floor(Math.round(data * 1000))

        client.say(channel, `@${tags.username} PONG! 🟢 Ping: ${ping}ms | Channels: ${channelCount.length} | Uptime: ${feelsdank.Misc.uptime()} | Memory: ${memory}MB/512MBs | Cmd executed: ${feelsdank.Temp.cmdCount}`)})
}

module.exports.config = {
    name: "ping",
    description: "",
    cooldown: 5000,
    aliases: ["pong"],
    adminOnly: false,
}