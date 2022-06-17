const { createLogger, format, transports, addColors } = require('winston');
const { combine, colorize, timestamp, printf } = format;
const pc = require("picocolors");
const util = require("util");

const LoggerLevels = {
    colors: {
        info: "green",
        error: "underline bold red",
        debug: "bold magenta",
        warn: "yellow",
    },
};

const logFormat = printf(({ level, message, timestamp}) => {
    return `${pc.magenta(timestamp)} [${level}]: ${message}`
});

const logger = createLogger({
    format: combine(
        format((info) => {
            info.level = info.level.toUpperCase();
            return info;
        })(),
        timestamp({
            format: 'DD.MM.YY HH:mm:ss',
        }),
        colorize(),
        logFormat
    ),
    transports: [
        new transports.Console({
            stderrLevels: ["error"],
        }),
    ],
});

addColors(LoggerLevels.colors);

logger.transports[0].level = "info";
logger.info(`${pc.green("[LOGGER]")} Setting log level to ${logger.transports[0].level}`);

module.exports.info = (...args) => {
    logger.info(...args);
};

module.exports.error = (...args) => {
    logger.error(...args);
};

module.exports.debug = (...args) => {
    logger.debug(...args);
};

module.exports.warn = (...args) => {
    logger.warn(...args);
};