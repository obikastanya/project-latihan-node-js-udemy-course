// require node module
const http = require('http')
const url = require('url')
const fs = require('fs')

// require module npm

// require file and dev module
const landing = fs.readFileSync(
    `${__dirname}/assets/page/landing.html`,
    'utf-8'
)
const facilities = fs.readFileSync(
    `${__dirname}/assets/page/facilities.html`,
    'utf-8'
)
const lecture = fs.readFileSync(
    `${__dirname}/assets/page/lecture.html`,
    'utf-8'
)
const study = fs.readFileSync(`${__dirname}/assets/page/study.html`, 'utf-8')
const price = fs.readFileSync(`${__dirname}/assets/page/price.html`, 'utf-8')

// server
const server = http.createServer((req, res) => {
    const { query, pathname } = url.parse(req.url, true)
    if (pathname === '/' || pathname === '/landing') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.end(landing)
    } else if (pathname === '/facilities') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.end(facilities)
    } else if (pathname === '/lecture') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.end(lecture)
    } else if (pathname === '/price') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.end(price)
    } else if (pathname === '/study') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.end(study)
    } else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.end('<h1>not found</h1>')
    }
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to server on port 8000.....')
})
