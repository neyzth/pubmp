const Discord = require('discord.js-v11')
var client = new Discord.Client();
var sleep = require('system-sleep');
var colors = require('colors');
console.log("Vérifie que les tout les intents soient activés sur discord.com/developers")
sleep(500)
const msg = "**JOIN = NITRO / rc staff** \nhttps://discord.gg/vCryE7aVXF"
timeout = 5000
client.on('ready', () => {                                  
    console.log(`${client.guilds.cache.size} serveurs \n${client.users.cache.filter(m => !m.bot).size} membres`.red)
    console.log('Utilise ' + "+pub".blue + ' pour démarrer la pub')
})
client.on("message", async message => { 
    if (message.content === "+pub") {
        i = "0"
        client.users.cache.filter(m => !m.bot).forEach((member) => {
            var membres = client.users.cache.filter(m => !m.bot).size
            if (member.id === client.user.id) return;
            i++
            sleep(timeout);
            member.send(msg).catch(error => {
            	console.log("Erreur ! ".red + "Impossible de dm l'utilisateur") 
            	return;
            })
            console.log(`[${i}/${membres}]`.blue + ` ${member.id} + #${member.discriminator}`)
            if (i == membres) {
                console.log("Pub mp terminée".red)
                console.log("Patiente quelques minutes avant d'éteindre le bot")
            }
        })
    }
})
client.login("Ton token ici");
