module.exports.config = {
	name: "offbot",
	version: "1.0.0",
	hasPermission: 0,
	credits: "uzairrajput, /* Please do not change the credit :) */
	description: "Turn off the Bot",
	commandCategory: "System",
	cooldowns: 0
};

module.exports.run = async ({ event, api }) => {
	const permission = ["61552682190483"];
	if (!permission.includes(event.senderID)) return api.sendMessage("[ 𝗗𝗘𝗩 𝗠𝗢𝗗𝗘 ] This command is only for the 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 💻", event.threadID, event.messageID);

	api.sendMessage("[ 𝑴𝑻𝑿 ] Bot Turn Off Bye! See you again 🐸", event.threadID, () => process.exit(0));
}
