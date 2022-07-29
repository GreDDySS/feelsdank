const tmi = require("tmi.js");
const pc = require('picocolors');


const options = {
    options: { debug: false },
    connection: { reconnect: true, secure: true },
    identity: { username: feelsdank.Config.username, password: feelsdank.Config.password },
    channels: [feelsdank.Config.owner]
};

const client = new tmi.Client(options);

const joinChannels = async () => {
    const result = await feelsdank.DB.Channel.find({ignore: false})
    result
        .map((c) => c.username)
        .forEach((channel) => {
            client
                .join(channel)
                .catch(() => feelsdank.Logger.error(`${pc.red("[ERROR]")} || Error join this channel ${channel}.`))
        })
    feelsdank.Logger.info(`${pc.green("[CHANNEL]")} || Bot successfully connect ${result.length} channels.`)
}

client.connect().catch((err) => {feelsdank.Logger.warn(`${pc.yellow('[CONNECTED]')} || Connected to channels failed 🔴`);}).then(() => {joinChannels()})

client.on("connected", async () => {
    feelsdank.Logger.info(`${pc.green('[CONNECTED]')} || Connected to twitch 🟢`);
    client.say("greddyss", "WatchingStream ");
});

module.exports = client;