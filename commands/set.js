exports.run = async (client, args, channel, tags, message, user) => {

    const userna = args[1].toLowerCase();
   if(args[0] === "prefix") {
       await feelsdank.DB.Channel.findOneAndUpdate(
           { username: userna },
           { customPrefix: args[2] }
       )
   
       client.say(channel, `FeelsOkayMan 👍 Префикс канала ${userna} успешно заменён на "${args[2]}"`)
   }
   if(args[0] === "ignore") {
        await feelsdank.DB.Channel.findOneAndUpdate(
            { username: userna },
            { ignore: args[2] }
        )
            if(args[2] == "true") {
                client.say(channel, `FeelsOkayMan 👍 Данный канал ${userna} добавлен в список игнориремых.`)
            }
            if(args[2] == "false") {
                client.say(channel, `FeelsOkayMan 👍 Данный канал ${userna} убран из списка игнориремых.`)
            }
        
    }
    if(args[0] === "perm") {
        await feelsdank.DB.User.findOneAndUpdate(
            { username: userna },
            { permission: args[2]}
        )
        client.say(channel, `FeelsOkayMan 👍 Права пользователя ${userna} успешно обновлены на "${args[2]}"`)
    }
}
module.exports.config = {
    name: "set",
    description: "set settings user/channel in database",
    cooldown: 500,
    aliases: ["set"],
    adminOnly: true,
}