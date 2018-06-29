/* Wroted by https://vk.com/rayvy */ /* if u read this, you are PIDOR */
const Discord = require('discord.js');

var client = new Discord.Client(); /* variable */
var cfg = require('./cfg.json'); /*activate cfg.json*/
console.log("Пачик готов к битве!");
/*there is not so hard commands*/
var commands = {
    "хелп": {
        process: function (msg, suffix) {
            msg.author.send([
                ":page_facing_up:  |  **Доступные команды:**",
				"```perl",
                "!хелп #Показывает доступные команды",
                "!инвайт #Делится ссылкой для приглашения",
				"~~~Также забавные фукнции...~~~",
				"!чзб | ава.жпег | ",
				"```",
				"",
				"Привет, я Пачик) Я готов к вашим услугам. Но если вы обидете меня, я вас нахуй убью :3"
            ]);
            msg.channel.send(":mailbox_with_mail:  |  **Проверьте личное сообщение!!**");
        }
    },
	"инвайт": {
		process: function (msg, suffix) {
			msg.channel.send({embed: {
				color: 3447003,
				fields: [{
					name: "https://discordapp.com/api/oauth2/authorize?client_id=462180544105414657&permissions=8&scope=bot",
					value: "https://goo.gl/pNcAmj"
				}
				],
				timestamp: new Date(),
				footer: {
					icon_url: client.user.avatarURL,
					text: "© 'dude-bot' by rayvich"
				}
			}});
		}
	},
	"чзб": {
		process: function (msg, suffix) {
			msg.channel.send({embed: {
				color: 2687053,
				title: "**Кто создал меня???**",
				description: "*Меня создал Оркен (RAYVICH) Абдрахманов*",
				fields: [
				{
					name: "**VK**",
					value:"[**CLICK**](https://vk.com/rayvy)"
				},
				{
					name: "**YOUTUBE**",
					value:"[**CLICK**](https://www.youtube.com/channel/UCIHLgqkFLqo8E08yMBfD-rQ?view_as=subscriber)"
				},
				{
					name: "**TWITCH**",
					value:"[**CLICK**](https://www.twitch.tv/rayvich)"
				},
				],
				timestamp: new Date(),
				footer: {
					icon_url: client.user.avatarURL,
					text: "© 'dude-bot' by rayvich"
				}
			}});
		}
	}
};
/* Zabavniy FUNCTIONS or not working FUNCTIONS */
client.on('message', message => {
  if (message.content === 'ава.жпег') {
	  msg.channel.send("ты че аву свою не помнишь?")
		.then(message.reply(message.author.avatarURL))
		.catch(console.error);
  }
});
/*endl*/
client.on("ready", function () {
	console.log("Logged in " + client.guilds.array().length + " servers");
	client.user.setGame(cfg.prefix + "хелп | Привет я чувак");
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'member-log');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});

client.on('message', function (msg) {
    if(msg.content.indexOf(cfg.prefix) === 0) {
		var cmdTxt = msg.content.split(" ")[0].substring(cfg.prefix.length);
		var cmd = commands[cmdTxt];
        var suffix = msg.content.substring(cmdTxt.length + cfg.prefix.length+1);
        if(cmd !== undefined) {
            cmd.process(msg, suffix);
        } else {
			cmdTxt = cmdTxt.replace('`', '');
			if (cmdTxt === ''){
				var cmdTxt = "none";
			}
            msg.channel.send(":warning:  |  **Неизвестная команда!** `" + cmdTxt + "` **Вы можете использовать** `" + cfg.prefix + "хелп" + "` **чтобы узнать что я умею** `");
        }
    }
});

client.login(cfg.token);