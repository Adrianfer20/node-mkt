const { MikroClient} = require("./mikrotik-client.js");


const CONFIG = {
    host: '192.168.5.1',
    port: 8728,
    username: '#Ajm.2610',
    password: '2610.Ajm#',
    timeout: 5000,
}
 
const MIKROTIK = new MikroClient(CONFIG)

module.exports = MIKROTIK;
