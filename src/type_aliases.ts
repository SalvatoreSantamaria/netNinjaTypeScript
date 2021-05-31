type StringOrNum = string | number
type ObjectWithName = {name: string, uid: StringOrNum}

const logDetails = (uid: string | number, item: string) => {
  console.log()
}
// use StringOrNum like this

const logDetails2 = (uid: StringOrNum, item: string) => {
  console.log()
}

const greet = (user: {name: string, uid: StringOrNum}) => {
  console.log()
}

// use ObjectWithName like this

const greet2 = (user: ObjectWithName) => {
  console.log()
}
