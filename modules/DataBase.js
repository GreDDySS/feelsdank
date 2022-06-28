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
    },
    points: {
        type: Number,
        default: 500
    }
})

const Log = mongoose.Schema({
    username: String,
    message: String,
    date: String,
})

const ChannelSchema = new mongoose.Schema({
    username: String,
    customPrefix: {
        type: String,
        required: false
    },
    ignore: {
        type: Boolean,
        default: false
    }
})

const SuggestSchema = new mongoose.Schema({
    author: String,
    message: String,
    date: String,
})

const JackpotSchema = new mongoose.Schema({
    name: {type: String},
    jackpot: Number
})

module.exports.Suggest = mongoose.model("Suggest", SuggestSchema, "Suggests")
module.exports.Channel = mongoose.model("Channel", ChannelSchema, "Channels");
module.exports.User = mongoose.model('User', User, "Users");
module.exports.Log = mongoose.model('Log', Log, "Logs");
module.exports.Jackpot = mongoose.model("Jackpot", JackpotSchema, "Jackpot")