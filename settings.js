import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.botNumber = ''

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.owner = [
// <-- Número @s.whatsapp.net -->
  ['573133374143', '🜲 Propietario 🜲', true],
  ['573133374143', 'shadow', true],
  ['573133374143', 'feli', true],
  ['573133374143', ':v', true ],
  ['573133374143', ':v xd', true ],
  
// <-- Número @lid -->

  ['176742836768966', 'Propietario', true],
  ['193196806148194', 'shadow', true],
  ['119069730668723', 'feli', true ],
  ['102680420733070', ':v', true ]
];  

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.mods = ['573133374143', '573133374143']
global.suittag = ['573133374143'] 
global.prems = ['573133374143', '573133374143']

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.libreria = 'Baileys'
global.baileys = 'V 6.7.17' 
global.vs = '2.2.5'
global.nameqr = '✦⃟⚡ Rin•Itoshi•Bot•MD ⚡⃟✦'
global.namebot = '⚽⸸ Rin•Itoshi•MD ⸸⚽'
global.sessions = 'Sessions'
global.jadi = 'JadiBots' 
global.shadowJadibts = true

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.packname = '🏆 ⌬ 𝑹𝒊𝒏 𝑰𝒕𝒐𝒔𝒉𝒊 𝑩𝒐𝒕 𝑴𝑫 ⌬ ⚽'
global.botname = '𝓖𝓪𝔀𝓻 𝓖𝓾𝓻𝓪 𝓤ℒ𝓣ℛ𝓐'
global.wm = '◈𝐑𝐢𝐧 𝐈𝐭𝐨𝐬𝐡𝐢 𝐁𝐨𝐭◈'
global.author = 'ℬ𝓨 𝓨𝓸 𝓢𝓸𝔂 𝓨𝓸'
global.dev = '☘️ ミ💨 》Tʜᴇ Sʜᴀᴅᴏᴡ`ᴄᴏʀᴇ《 💥ミ 🌀'
global.bot = '𝓖𝓪𝔀𝓻 𝓖𝓾𝓻𝓪 𝓤ℒ𝓣ℛ𝓐'
global.club = '˜”*°•.˜”*°• Sya Team •°*”˜.•°*”˜'
global.textbot = '(っ◔◡◔)っ ♥ Hecho por Yo Soy YO ♥'
global.etiqueta = '@YO SOY YO'

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.moneda = 'Motoko Points'
global.welcom1 = '💤⚡ Bienvenido/a al campo de juego ⚡🍂\n❍ Edita con el comando *setwelcome*'
global.welcom2 = '🔥⚽ El jugador ha salido del partido ⚽🔥\n❍ Edita con el comando *setbye*'
global.banner = 'https://files.catbox.moe/fft2hr.jpg'
global.avatar = 'https://files.catbox.moe/js2plu.jpg'
global.logo = 'https://files.catbox.moe/fft2hr.jpg'

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.gp1 = 'https://whatsapp.com/channel/0029VbAmMiM96H4KgBHZUn1z'
global.comunidad1 = 'https://whatsapp.com/channel/0029VbAmMiM96H4KgBHZUn1z'
global.channel = 'https://whatsapp.com/channel/0029VbAmMiM96H4KgBHZUn1z'
global.channel2 = 'https://whatsapp.com/channel/0029VbAmMiM96H4KgBHZUn1z'
global.md = ''
global.correo = ''

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.catalogo = fs.readFileSync('./src/catalogo.jpg');
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: packname, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}
global.ch = {
ch1: '120363399729727124@newsletter',
ch2: "120363399729727124@newsletter",
ch3: "120363399729727124@newsletter"
}
global.multiplier = 60

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment   

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})
