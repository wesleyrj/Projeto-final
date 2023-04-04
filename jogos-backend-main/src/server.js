import app from './app.js'
import db from './infra/db.js'

// escolhendo a porta em que o servidor será aberto
const port = 3000
import './infra/jogos.js'

// abrindo o servidor na porta escolhida
app.listen(port,  ()=>{
    db.run(`delete from jogos`)

    console.log(`Server rodando em http://localhost:${port}/`)
})