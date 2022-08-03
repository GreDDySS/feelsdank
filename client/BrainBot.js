const fs = require('fs');
const pc = require("picocolors");
const client = require("./twitch");
const ChannelModel = feelsdank.DB.Channel
const defaultPrefix = feelsdank.Config.prefix;

client.commands = new Map();
client.aliases = new Map();
client.cooldown = new Map();

fs.readdir(__dirname + "/../commands", (err, files) => {
    if (err) return feelsdank.Logger.error(`${pc.red("[ERROR]")} || Error load commands ${err}`);

    const jsfile = files.filter((f) => f.split(".").pop() == "js")
    if(!jsfile) {
        feelsdank.Logger.warn(`${pc.magenta("[WARN]")} || No command found! `);
        return 
    }

    jsfile.forEach((f, i) => {
        let pull = require(`../commands/${f}`)
        pull["cooldown_users"] = []
        client.commands.set(pull.config.name, pull)
        client.cooldown.set(0, pull.config.cooldown)
        pull.config.aliases.forEach((alias) => {
            client.aliases.set(alias, pull.config.name)
        })
    })
})

async function getCustomPrefix(channel) {
    const result = await ChannelModel.findOne({ username: channel}).catch(
        (err) => {feelsdank.Logger.error(`${pc.red("[ERROR]")} || Error when searching for a prefix:` + `${err}`)}
    )
    if (result.customPrefix == null) {
        return defaultPrefix
    } else {
        return result.customPrefix
    }

};

function setUserCooldown(cmdF, tags) {
    // add user in cooldown
    cmdF.cooldown_users.push(tags["user-id"])

    let cooldown = client.cooldown.get(0)

    setTimeout(() => {
        cmdF.cooldown_users = cmdF.cooldown_users.filter((i) => {
            i !== tags["user-id"]
        })
    }, cooldown)
}

client.on("message", async (channel, tags, message, self) => {
    if (self) return;
    channel = channel.replace("#", "");
    // Checking the user in DB, if not -> add to DB
    const User = await feelsdank.DB.User.findOne({id: tags['user-id']});
    if (User == null) {
        const newUser = new feelsdank.DB.User({
        id: tags["user-id"],
        username: tags.username,
        displayname: tags['display-name'],
    });
    newUser.save();
    };
})

client.on("message", async (channel, tags, message, self) => {
    if (self) return;
    if (tags['user-id'] === "555579413" && message === "monkaGIGAftSaj 🚨 ALERT!") {
        client.say(channel, "/me monkaS 🚨 АЛЕРТ!")
    }
    channel = channel.replace("#", "");
    const prefix = (await getCustomPrefix(channel)) || defaultPrefix
    const perm = await feelsdank.DB.User.findOne({id: tags['user-id']});
    
    
    let args = message.slice(prefix.length).trim().split(/ +/g)
    let cmd = args.shift().toLowerCase()
    let cmdF = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd))

    if (!cmdF || !message.startsWith(prefix) || cmdF.cooldown_users.includes(tags["user-id"]))
        return
    
        if (cmdF.config.adminOnly && !(tags.username == feelsdank.Config.owner) && !(perm.permission == "spec")) return;
        
        try {
            cmdF.run(client, args, channel, tags, message)
            feelsdank.Temp.cmdCount++
        setUserCooldown(cmdF, tags)
    } catch (err) {
        feelsdank.Logger.error(`${pc.red("[ERROR]")} || Error occurred when running the command ` + `${err}`)
    }
});

