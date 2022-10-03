import * as fs from 'fs/promises'
import * as path from 'path'
import { setTimeout } from 'timers'
import * as url from 'url'

// うまくいくpath
const targetPath = path.join(path.dirname(url.fileURLToPath(import.meta.url)), "../../7th/hello.txt")
// 失敗するpath
// const targetPath = path.join(path.dirname(url.fileURLToPath(import.meta.url)), "../../7th/../hello.txt")

const timeOutReadFile = async (targetPath: string) => {
  const fileData = Promise.race([
    fs.readFile(targetPath, 'utf-8'),
    () => {
      return new Promise<never>((resolve, reject) => {
        setTimeout(reject, 0)
      })
    }])
    .then((data) => data)
    return fileData
}

// Promise.then バージョン
// const textPromise = timeOutReadFile(targetPath)
//   .then((data) => {
//     console.log(data)
//     const numHello = ((data as string).match(/hello/g)||[]).length
//     console.log(`'hello'は ${numHello} 回登場します`)
//   })
//   .catch((error) => {
//     console.log(`${targetPath} が見つかりません`)
//     // console.log(error)
//   })

// await バージョン
try {
  const data = await timeOutReadFile(targetPath)
  const numHello = ((data as string).match(/hello/g)||[]).length
  console.log(`こんにちは！'hello'は ${numHello} 回登場します`)
} catch (err) {
  console.log(`失敗: ${err}`)
}
