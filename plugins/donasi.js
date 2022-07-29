let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Tree [08977491343]
│ • Telkomsel [081292991543]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Dana [08893752540]
│ • Gopay [081297457408]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
