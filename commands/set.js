const SevenTV = require("../client/7tv")
exports.run = async (client, args, channel, tags, message, user) => {

    const userna = args[1].toLowerCase();
    const uid = await feelsdank.Api.leppunen(`resolve/${userna}`)
   if(args[0] === "prefix") {
        await feelsdank.SB.db.channel.update({where: {userId: uid.id}, data: {prefix: Boolean(args[2])}})
   
       client.say(channel, `/me FeelsOkayMan 👍 Префикс канала ${userna} успешно заменён на "${args[2]}"`)
   }
   if(args[0] === "ignore") {
        await feelsdank.SB.db.channel.update({where: {userId: uid.id}, data: {ignore: Boolean(args[2])}})
            if(args[2] == "true") {
                client.say(channel, `/me FeelsOkayMan 👍 Данный канал ${userna} добавлен в список игнориремых.`)
            }
            if(args[2] == "false") {
                client.say(channel, `/me FeelsOkayMan 👍 Данный канал ${userna} убран из списка игнориремых.`)
            }
        
    }
    //if(args[0] === "perm") {
    //    await feelsdank.DB.User.findOneAndUpdate(
    //        { username: userna },
    //        { permission: args[2]}
    //    )
    //    client.say(channel, `/me FeelsOkayMan 👍 Права пользователя ${userna} успешно обновлены на "${args[2]}"`)
    //}
    if(args[0] === "7tv") {
        await feelsdank.SB.db.channel.update({where: {userId: uid.id}, data: {sevenTV: Boolean(args[2])}})

            if(args[2] == "true") {
                client.say(channel, `/me FeelsOkayMan 👍 На каналe ${userna} включены эвенты 7TV.`)
                SevenTV.initialize()
            }
            if(args[2] == "false") {
                client.say(channel, `/me FeelsOkayMan 👍 На каналe ${userna} выключены эвенты 7TV.`)
                SevenTV.initialize()
            }
    }
    if(args[0] == "7id") {
        await feelsdank.SB.db.channel.update({where: {userId: uid.id}, data: {sevenID:  args[2]}})
        client.say(channel, `/me FeelsOkayMan 👍 Обновлён 7TV-id для ${userna}`)
        SevenTV.initialize()
    }
}
module.exports.config = {
    name: "set",
    description: "set settings user/channel in database",
    cooldown: 500,
    aliases: ["set"],
    adminOnly: true,
}