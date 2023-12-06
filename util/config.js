const configJson = require("../app-config.json");

exports.appConfig = {
    mongodbUri: configJson.mongodb_uri
}