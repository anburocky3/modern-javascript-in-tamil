Object.prototype.capitalize = function (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const myPlace = {
  city: 'chennai',

  greet() {
    console.log(`Vannakam ${this.city}!`)
  },

  capitalize(string) {
    return 'Migrated to Prototype'
  },
}

const nativePlace = {
  city: 'avadi',

  greet() {
    console.log('Vannakam ' + city)
  },
}

console.log(myPlace.capitalize('avadi'))

// console.log(myPlace.capitalize('trichy'))

// console.log(myPlace.toString())

// console.log(nativePlace)

// List all prototypes of Array

const ArrObjs = Object.getOwnPropertyNames(Array.prototype)

for (const func in ArrObjs) {
  console.log(ArrObjs[func])
}
