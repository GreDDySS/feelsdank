exports.run = async (client, args, channel, tags, message) => {
    const image = await feelsdank.Api.request("api.thecatapi.com/v1/images/search")

    client.say(channel, `@${tags["display-name"]}, CoolCat  ${image[0].url}`)
}

module.exports.config = {
    name: "cat",
    description: "Give you a link to a picture of a random cat",
    cooldown: 5000,
    aliases: [],
    adminOnly: false,
}