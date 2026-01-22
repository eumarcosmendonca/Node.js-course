const url = require('url')
const adress = 'htttp://www.example.com/catalog?product=chair'
const parsedUrl = new url.URL(adress)
console.log(parsedUrl.host)
console.log(parsedUrl.pathname)
console.log(parsedUrl.search)
console.log(parsedUrl.searchParams)
console.log(parsedUrl.searchParams.get('product'))