exports.run = async (client, args, channel, tags, message) => {
    if (tags.badges.broadcaster == 1) {
        client.say(channel, `@${tags['display-name']}, - Ник: ${tags.username}, ID: ${tags['user-id']}, Color: ${tags.color}, Streamer:  ✅, Sub: ${tags.subscriber}`)
    } else {
        if (tags.badges.moderator == 1) {
            client.say(channel, `@${tags['display-name']}, - Ник: ${tags.username}, ID: ${tags['user-id']}, Color: ${tags.color}, Mod:  ✅, Sub: ${tags.subscriber}, Vip: ❌`)
        } else {
            if (tags.badges.vip == 1) {
                client.say(channel, `@${tags['display-name']}, - Ник: ${tags.username}, ID: ${tags['user-id']}, Color: ${tags.color}, Mod: ❌, Sub: ${tags.subscriber}, Vip:  ✅`)
            } else {
                client.say(channel, `@${tags['display-name']}, - Ник: ${tags.username}, ID: ${tags['user-id']}, Color: ${tags.color}, Mod: ❌, Sub: ${tags.subscriber}, Vip: ❌`)
            }
        }
    }
}

module.exports.config = {
    name: "info",
    description: "Check user info",
    cooldown: 15000,
    aliases: ["ui"],
    adminOnly: false,
}