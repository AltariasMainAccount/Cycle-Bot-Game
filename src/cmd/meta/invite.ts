import * as Discord from "discord.js";
import { Command, Colors } from "../../global.js";

class C extends Command {
  names = ["invite", "github"];
  help = "Invite the bot to your server!";
  isGame = "n" as const;

  exec(msg: Discord.Message, _: string[], _1: Discord.Client) {
    msg.channel.send({
      embeds: [{
        color: Colors.PRIMARY,
        title: "Invite link!",
        description: `**Invite Link**: [Link](https://discord.com/api/oauth2/authorize?client_id=781939317450342470&permissions=272448&scope=bot)
**Discord Server**: [Invite](https://discord.gg/4vTPWdpjFz)
**Github**: [Link](https://github.com/cursorweb/Cycle-Bot-Game)
**Replit**: [Link](https://replit.com/@Coder100/Cycle-Bot-Game-autogenerated) [@Coder100](https://repl.it/@Coder100)
\nIn case the bot goes down, [**click here**](https://Cycle-Bot-Game-autogenerated.coder100.repl.co).`
      }]
    });
  }
}

export const c = new C();