exports.run = async (client, args, channel, tags, message, user) => {
    var now = new Date().toLocaleString();
    const Suggest = new feelsdank.DB.Suggest({
        author: tags.username,
        message: args.join(" "),
        date: now
    })
    client.say(channel, `@${tags.username}, Ваш отклик записан, в ближайшее время автор его увидит! FeelsOkayMan `)
    Suggest.save();
};

module.exports.config = { 
    name: "suggest",
    description: "Users can leave wishes, or suggest making something new!",
    cooldown: 10000,
    aliases: ["sg"],
    adminOnly: false,
}