const fs = require("fs");
module.exports.config = {
	name: "diwani",
    version: "1.0.0",
	hasPermssion: 0,
	credits: "uzairrajput", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "Diwani",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("diwani")==0 || (event.body.indexOf("Dewani")==0)) {
		var msg = {
				body: "✦ 𝐊𝐡𝐮𝐰𝐚𝐁𝐨𝐧 𝐊𝐢 𝐃𝐮𝐧𝐢𝐲𝐚 𝐌𝐮𝐊𝐚𝐌𝐚𝐥 𝐊𝐚𝐇𝐚𝐧 𝐇𝐚𝐢...✦",
				attachment: fs.createReadStream(__dirname + `/uzairmtx/divi.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💝", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }
