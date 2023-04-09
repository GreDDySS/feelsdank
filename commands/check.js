const rp = require("request-promise")
const cheerio = require("cheerio")
const fs = require("fs")
exports.run = async (client, args, channel, tags, message) => {
    if (args[0]) {
        if (args[0].startsWith("@")) {
            args[0] = args[0].substring(1);
        }
        let username = args[0].toLowerCase();
        var urlnfm = `https://fem.ilotterytea.kz/user/${username}`
        
    } else {
        var urlnfm = `https://fem.ilotterytea.kz/user/${tags.username}`
    }
    const ID = []
    try {
        await rp(urlnfm).then(htm => {
            const $ = cheerio.load(htm)
            $(`#id`).each((i, elem) => {
                ID.push($(elem).text().replace(/[^0-9]/g,""))
            })
            client.say(channel, `@${tags.username}, NFM: ${ID}`)
        })
    } catch (err) {
        client.say(channel, `@${tags.username}, Такого пользователя нет`)
    }
}

module.exports.config = {
    name: "check",
    description: "",
    cooldown: 5000,
    aliases: [],
    adminOnly: true,
}