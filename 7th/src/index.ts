import * as fs from 'fs'
import * as path from 'path'
import * as url from 'url'

const textFile = fs.readFileSync("./hello.txt", 'utf-8')
console.log(textFile)

const numHello = (textFile.match(/hello/g)||[]).length
console.log(`'hello'は ${numHello} 回登場します`)

console.log(import.meta.url)

const targetPath = path.join(path.dirname(url.fileURLToPath(import.meta.url)), "../hello.txt")

console.log(targetPath)
