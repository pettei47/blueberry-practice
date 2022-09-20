// FizzBuzz

import { resolve } from "path"
import { createInterface } from "readline"

const FizzBuzz = (last : number) => {
  for (let i = 1; i <= last; i++) {
    let printItem : string = ""
    if (i % 3 === 0) {
      printItem += "Fizz"
    }
    if (i % 5 === 0) {
      printItem += "Buzz"
    }
    if (printItem === "") {
      printItem = String(i)
    }
    console.log(printItem)
  }
}

const FizzBuzz2 = (last : number) => {
  let printItem : string = ""
  for (let i = 1; i <= last; i++) {
    if (i % 3 === 0) {
      printItem += "Fizz"
    }
    if (i % 5 === 0) {
      printItem += "Buzz"
    }
    if (i % 3 !== 0 && i % 5 !== 0) {
      printItem += String(i)
    }
    if (i !== last) {
      printItem += " "
    }
  }
  console.log(printItem)
}

const readInputFizzBuzz = (question : string, func : any) => {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  rl.question(question, (answer) => {
    const lastNumber = Number(answer)
    if (!isNaN(lastNumber)) {
      func(lastNumber)
    } else {
      console.log("You can input only any Number.")
    }
    rl.close()
  })
}

console.log("FizzBuzz1 (20)")
FizzBuzz(20)

console.log("FizzBuzz2 (20)")
FizzBuzz2(20)

readInputFizzBuzz("You can play the FizzBuzz 2 any nunber! Input the last number of FizzBuzz -> ", FizzBuzz2)
