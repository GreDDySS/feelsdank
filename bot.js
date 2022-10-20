const pc = require("picocolors");
const fs = require("fs");
const utils = require("util")


global.feelsdank = {};

feelsdank.Config = require("./other/config");
feelsdank.Logger = require("./modules/winston");
feelsdank.DB = require("./modules/DataBase");
feelsdank.Twitch = require('./client/BrainBot');
feelsdank.Misc = require("./modules/misc");
feelsdank.Api = require("./modules/apiClients");
feelsdank.Seven = require("./client/7tv").initialize();
feelsdank.Channel = require("./modules/channel")
feelsdank.PubSub = require("./client/pubsub")
feelsdank.Temp = {cmdCount: 0}

// Initializing
async function start() {
    try {
        feelsdank.Seven
        feelsdank.Twitch;
        feelsdank.DB;
    } catch (e) {
        feelsdank.Logger.error(`Error encountered during initialization: ${e}`);
    }
};
start();


process
.on('unhandledRejection', async (reason, promise) => {
    feelsdank.Misc.logError("UnhandledRejection", utils.inspect(promise), utils.inspect(reason))
    return feelsdank.Logger.error(`${pc.red('[UnhandledRejection]')} || ${reason}`);
})
.on('uncaughtException', async (err) => {
    feelsdank.Misc.logError("UnhandledRejection", err.message, err.stack || "")
    feelsdank.Logger.error(`${pc.red('[UncaughtException]')} || ${err.message}`);
    return process.exit(0);
});