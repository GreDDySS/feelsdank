exports.run = (client, args, channel, tags, message) => {
    function timeformat(seconds){
        function pad(s){
            return (s < 10 ? '' : '') + s;
        }
        var days = Math.floor(seconds / (60*60*24))
        var hours = Math.floor(seconds / (60 * 60) % 24);
        var minutes = Math.floor(seconds % (60*60) / 60);
        var sec = Math.floor(seconds % 60); 
    
        
        return pad(days) + ' days ' + pad(hours) + ' hours ' + pad(minutes) + " min " + pad(sec) + " sec ";
      }
    const used = process.memoryUsage().heapUsed / 1024 / 1024
    const memory = Math.round(used * 100) / 100

    client.ping().then(function (data) {
        let ping = Math.floor(Math.round(data * 1000))

        client.say(
            channel,
            `@${tags.username} PONG! Ping: ${ping}ms | Uptime: ${timeformat(process.uptime())} | Memory: ${memory}MB/512MBs`)
    })
}

module.exports.config = {
    name: "ping",
    description: "",
    cooldown: 5000,
    aliases: ["pong"],
    adminOnly: false,
}