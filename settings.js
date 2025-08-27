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
  ['573133374132', '🜲 Propietario 🜲', true],
  ['573133374132', 'shadow', true],
  ['573133374132', 'feli', true],
  ['573133374132', ':v', true ],
  ['573133374132', ':v xd', true ],
  
// <-- Número @lid -->

  ['176742836768966', 'Propietario', true],
  ['176742836768966', 'shadow', true],
  ['176742836768966', 'feli', true ],
  ['176742836768966', ':v', true ]
];  

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.mods = ['', '']
global.suittag = [''] 
global.prems = ['', '']

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.libreria = 'Baileys'
global.baileys = 'V 6.7.17' 
global.vs = '2.2.5'
global.nameqr = 'yo soy yo'
global.namebot = 'yo soy yo'
global.sessions = 'Sessions'
global.jadi = 'JadiBots' 
global.shadowJadibts = true

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.packname = '𝕐𝕠 𝕊𝕠𝕪 𝕐𝕆'
global.botname = '𝕐𝕠 𝕊𝕠𝕪 𝕐𝕆'
global.wm = '𝕐𝕠 𝕊𝕠𝕪 𝕐𝕆'
global.author = '𝕐𝕠 𝕊𝕠𝕪 𝕐𝕆'
global.dev = '𝕐𝕠 𝕊𝕠𝕪 𝕐𝕆'
global.bot = '𝕐𝕠 𝕊𝕠𝕪 𝕐𝕆'
global.club = '𝕐𝕠 𝕊𝕠𝕪 𝕐𝕆'
global.textbot = '𝕐𝕠 𝕊𝕠𝕪 𝕐𝕆'
global.etiqueta = '𝕐𝕠 𝕊𝕠𝕪 𝕐𝕆'

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.moneda = 'puntos'
global.welcom1 = '💤⚡ 𝕭𝖎𝖊𝖓𝖛𝖊𝖓𝖎𝖉𝖔/𝖆 𝖆𝖑 𝖌𝖗𝖚𝖕𝖔\n❍ 𝔈𝔡𝔦𝔱𝔞 𝔠𝔬𝔫 𝔢𝔩 𝔠𝔬𝔪𝔞𝔫𝔡𝔬 *𝔰𝔢𝔱𝔴𝔢𝔩𝔠𝔬𝔪𝔢*'
global.welcom2 = '𝓔𝓵 𝓾𝓼𝓾𝓪𝓻𝓲𝓸 𝓪 𝓼𝓪𝓵𝓲𝓭𝓸 𝓭𝒆𝓵 𝓰𝓻𝓾𝓹𝓸\n❍ 𝔈𝔡𝔦𝔱𝔞 𝔠𝔬𝔫 𝔢𝔩 𝔠𝔬𝔪𝔞𝔫𝔡𝔬 *𝔰𝔢𝔱𝔟𝔶𝔢*'
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
