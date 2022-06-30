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
feelsdank.Temp = {cmdCount: 0}

// Initializing
async function start() {
    try {
        feelsdank.Twitch;
        feelsdank.DB;
    } catch (e) {
        feelsdank.Logger.error(`Error encountered during initialization: ${e}`);
    }
};
start();


process
.on('unhandledRejection', async (reason, promise) => {
    return feelsdank.Logger.error(`${pc.red('[UnhandledRejection]')} || ${utils.inspect(promise)} -> ${reason}`);
})
.on('uncaughtException', async (err) => {
    feelsdank.Logger.error(`${pc.red('[UncaughtException]')} || ${err.message}`);
    return process.exit(0);
});