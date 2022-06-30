exports.run = async (client, args, channel, tags, message) => {
    const image = await feelsdank.Api.request("dog.ceo/api/breeds/image/random")

    client.say(channel, `@${tags["display-name"]}, PogBones ${image.message}`)
}

module.exports.config = {
    name: "dog",
    description: "Random picture dog",
    cooldown: 5000,
    aliases: [],
    adminOnly: false,
}