const fs = require('fs')
const chalk = require('chalk')

global.owner = [
['573027866596', true], 


global.wm = '© NexusBot-MD'
global.prefa = '.'
global.session = 'session'
global.vs = '1.0.0'
global.author = 'zam'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Actualización '${__filename}'`))
delete require.cache[file]
require(file)
})
