// ❌
channel = 'CyberDude'

var channel = 'CyberDude Networks'

// ✅
let channel = 'CyberDude'
channel = 'CyberDude Networks'

console.log(channel)

// Function Hoisting
sayHello() // can call from anywhere

function sayHello() {
  console.log('Hello CyberDude')
}

const sayHelloExpression = () => {
  console.log('Hello CyberDude - Expression')
}

sayHelloExpression() // should call only after declaration.
