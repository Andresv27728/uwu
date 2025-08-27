// by dv.shadow - https://github.com/Yuji-XDev

import { proto } from '@whiskeysockets/baileys';
import PhoneNumber from 'awesome-phonenumber';

const handler = async (m, { conn }) => {
  const name = '▂▃▄▅▆▇█▓▒░Yo Soy YO░▒▓█▇▆▅▄▃▂';
  const numCreador = '573133374132';
  const empresa = 'Say Team.';
  const about = 'ƊЄƧƛƦƦƠԼԼƛƊƠƦ ƊЄ ƓƛƜƦ ƓƲƦƛ ƲԼƬƦƛ';
  const correo = '';
  const web = '';
  const direccion = Colombia, bogota';
  const fotoPerfil = 'https://files.catbox.moe/fft2hr.jpg';

  const vcard = `
BEGIN:VCARD
VERSION:3.0
N:;${name};;;
FN:${name}
ORG:${empresa}
TITLE:CEO & Fundador
TEL;waid=${numCreador}:${new PhoneNumber('+' + numCreador).getNumber('international')}
EMAIL:${correo}
URL:${web}
NOTE:${about}
ADR:;;${direccion};;;;
X-ABADR:ES
X-WA-BIZ-NAME:${name}
X-WA-BIZ-DESCRIPTION:${about}
END:VCARD`.trim();

  const contactMessage = {
    displayName: name,
    vcard
  };

  await conn.sendMessage(m.chat, {
    contacts: {
      displayName: name,
      contacts: [contactMessage]
    },
    contextInfo: {
    mentionedJid: [m.sender],
      externalAdReply: {
        title: '︻╦̵̵͇̿̿̿̿ Contacto del Creador oniichan╤───',
        body: 'ˋˏTˎˊˋˏoˎˊˋˏcˎˊˋˏaˎˊ ˋˏaˎˊˋˏqˎˊˋˏuˎˊˋˏíˎˊ ˋˏpˎˊˋˏaˎˊˋˏrˎˊˋˏaˎˊ ˋˏgˎˊˋˏuˎˊˋˏaˎˊˋˏrˎˊˋˏdˎˊˋˏaˎˊˋˏrˎˊ ˋˏeˎˊˋˏlˎˊ ˋˏcˎˊˋˏoˎˊˋˏnˎˊˋˏtˎˊˋˏaˎˊˋˏcˎˊˋˏtˎˊˋˏoˎˊ ˋˏoˎˊ ˋˏhˎˊˋˏaˎˊˋˏbˎˊˋˏlˎˊˋˏaˎˊˋˏrˎˊ ˋˏcˎˊˋˏoˎˊˋˏnˎˊ ˋˏéˎˊˋˏlˎˊ',
        mediaType: 1,
        thumbnailUrl: fotoPerfil,
        renderLargerThumbnail: true,
        sourceUrl: web
      }
    }
  }, { quoted: m });
};

handler.help = ['creador'];
handler.tags = ['info'];
handler.command = ['creador', 'creator', 'owner'];
export default handler;
