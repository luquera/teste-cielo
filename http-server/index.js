const http = require('http')
const fs = require('fs')
const path = require('path')

const dirJson = path.resolve(__dirname, 'lancamento-conta-legado.json')

http.createServer((req, res) => {
    fs.readFile(dirJson, 'utf8', function(err, data) {
        if (err) throw err

        res.writeHead(200, {'Content-Type': 'application/json'})
        res.write(data)
        res.end();
    })
}).listen(8000, () => {
    console.log('Server Online na porta 8000')
})
