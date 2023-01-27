const command = require("../public/files/commands.json")

module.exports.getAll = (req, res) => {
    res.status(200).json(command)
} 