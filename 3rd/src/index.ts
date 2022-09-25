type User = {
  name: string
  age: number
  premiumUser: boolean
}

const data: string = `
Teppei,29,1
John,17,0
Mary,14,1
`

const users: User[] = data.split("\n")
  .filter((datum) => datum.length > 0)
  .map((d) => {
    const [ name, dAge, dPremium ] = d.split(",")
    const age = Number(dAge)
    const premiumUser = Boolean(Number(dPremium))
    return {
      name,
      age,
      premiumUser
    }
})

for (const user of users) {
  if (user.premiumUser) {
    console.log(`${user.name}(${user.age}) is Premium`)
  } else {
    console.log(`${user.name}(${user.age}) is not Premium`)
  }
}
