const getFizzBuzzString = (i: number): string => {
  if (i % 15 === 0) {
    return "FizzBuzz"
  } else if (i % 3 === 0) {
    return "Fizz"
  } else if (i % 5 === 0) {
    return "Buzz"
  } else {
    return i.toString()
  }
}

const sequence = (start: number, end: number) => {
  const ret: number[] = []
  for (let i = start; i <= end; i++) {
    ret.push(i)
  }
  return ret
}

// for (const i of sequence(15, 45)) {
//   const message = getFizzBuzzString(i);
//   console.log(message);
// }

const map = <S, T>(array: T[], callback: (arg: T) => S): S[] => {
  const ret: S[] = []
  for (const element of array) {
    ret.push(callback(element))
  }
  return ret
}

const data = [1,1,2,3,5,8,13];
const result: string[] = map(data, (x) => "a" + x);
console.log(result)
