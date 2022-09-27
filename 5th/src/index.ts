// type User = {
//   name: string;
//   age: number;
// }
// function createUser(name: string, age: number): User {
//   if (name === "") {
//     throw new Error("名前は空にできません")
//   }
//   return {
//     name,
//     age,
//   }
// }


// function getMessage(user: User, message: string): string {
//   return `${user.name} (${user.age}) 「${message}」`
// }

// const teppei = createUser("teppei", 29)
// console.log(getMessage(teppei, "hello"))

// class User {
//   constructor(private name: string, private age: number) {
//     if (name === "") {
//       throw new Error("名前は空にできません")
//     }
//   }
//   getMessage(message: string): string {
//     return `${this.name} (${this.age}) 「${message}」`
//   }
// }

// const teppei = new User("teppei", 29)
// console.log(teppei.getMessage("hello"))

const createUser = (name: string, age: number): (message: string) => string => {
  return (message: string) => `${name} (${age}) 「${message}」`
}

const getMessage = createUser("teppei", 29)
console.log(getMessage("hello"))

const createUserSample = (name: string, age: number) => {
  return  (message: string) => {
    return `${name} (${age}) 「${message}」`
  }
}

// return (message: string) => `${name} (${age}) 「${message}」` は、
//
// return  (message: string) => {
//   return `${name} (${age}) 「${message}」`
// }
// の省略形
