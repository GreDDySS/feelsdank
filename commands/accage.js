exports.run = async (client, args, channel, tags, message) => {
    let uid = tags["user-id"];

    if (args[0]) {
        if (args[0].startsWith("@")) {
            args[0] = args[0].substring(1);
        }
        let username = args[0];

        uid = await feelsdank.Api.leppunen(`resolve/${username}`)
        uid = uid.id;
    }

    let twitchData = await feelsdank.Api.helix(`users?id=${uid}`)

    const ms = new Date().getTime() - Date.parse(twitchData.data[0].created_at);
    if (args[0]) {
        if (args[0].startsWith("@")) {
            args[0] = args[0].substring(1);
        }
        client.say(channel, `@${tags["display-name"]}, аккаунт ${args[0]} был создан  ${feelsdank.Misc.humanizeDuration(ms)} назад.`)
    } else {
        client.say(channel, `@${tags["display-name"]}, аккаунт был создан  ${feelsdank.Misc.humanizeDuration(ms)} назад.`)
    }
    
}
module.exports.config = {
    name: "accage",
    description: "This command will tell you the specified users account age",
    cooldown: 10000,
    aliases: ["accountage", "age"],
    adminOnly: false,
}