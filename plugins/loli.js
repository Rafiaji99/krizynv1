let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/loli', {}, 'apikey'), 'Pedo Pedo', wm, 'NEXT', '.loli', m)
}
handler.help = ['loli']
handler.tags = ['anime']
handler.command = /^(loli)$/i

module.exports = handler

handler.help = ['loli']
handler.tags = ['anime']
handler.command = /^loli$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
