type Option<T> = {
  tag: true,
  value: T,
} | {
  tag: false,
}

const isNumberExists = (obj: Option<number>): obj is {
  tag: true,
  value: number
} => {
  return obj.tag
}

const showNumberIfExists = (obj: Option<number>) => {
  if(isNumberExists(obj)) {
    console.log(obj.value)
  } else {
    console.log("No data.")
  }
}

const numberObj: Option<number> = {
  tag: true,
  value: 100,
}

const noNumberObj: Option<number> = {
  tag: false,
}

showNumberIfExists(numberObj)
showNumberIfExists(noNumberObj)

//以下のようにOption<T>自体を書き換えるとスッキリする
type Exists<T> = {
  tag: true,
  value: T,
}

type NoExists = {
  tag: false,
}

type SOption<T> = Exists<T> | NoExists

const isTExists = <T>(obj: Option<T>): obj is Extract<Option<T>, { tag: true }> => {
  return obj.tag
}

const mapOptinon = <T, U>(obj: Option<T>, callback: (arg: T) => U) : Option<U> => {
  if (isTExists(obj)) {
    return {
      tag: true,
      value: callback(obj.value)
    }
  } else {
    return { tag: false }
  }
  // switch (obj.tag) {
  //   case true: 
  //     return {
  //       tag: true,
  //       value: callback(obj.value)
  //     }
  //   case false:
  //     return {
  //       tag: false
  //     }
  // }
}
