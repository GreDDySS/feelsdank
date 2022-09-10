const mongoose  = require('mongoose');
const pc = require('picocolors');

mongoose.connect(`mongodb+srv://${feelsdank.Config.db_user}:${feelsdank.Config.db_pass}@${feelsdank.Config.db_ip}/${feelsdank.Config.db_db}`).then(() => {
    feelsdank.Logger.info(`${pc.green("[DATABASE]")} || DataBase connect successfully`)
    connect()
}).catch(e => feelsdank.Logger.error(`${pc.red("[DATABASE]")} || Error: ${e}`))

const User =  mongoose.Schema({
    id: String,
    username: String,
    displayname: String,
    permission: {
        type: String,
        default: 'user'
    }
})
const ChannelSchema = new mongoose.Schema({
    username: String,
    id: Number,
    customPrefix: {
        type: String,
        required: false
    },
    ignore: {
        type: Boolean,
        default: false
    },
    SevenTV: {
        type: Boolean,
        default: true
    },
    listenStreamStatus: {
        type: Boolean,
        default: true
    }
})

const SuggestSchema = new mongoose.Schema({
    author: String,
    message: String,
    date: String,
})

const ErrorSchema = new mongoose.Schema({
    name: String,
    message: String,
    stack: String,
})

const StreamPingSchema = new mongoose.Schema({
    username: String,
    ping: {
        type: Boolean,
        default: false
    }
})

module.exports.Suggest = mongoose.model("Suggest", SuggestSchema, "Suggests")
module.exports.Channel = mongoose.model("Channel", ChannelSchema, "Channels");
module.exports.User = mongoose.model('User', User, "Users");
module.exports.Error = mongoose.model("Error", ErrorSchema, "Errors")
module.exports.PingStream = mongoose.model("Ping", StreamPingSchema, "Pings")