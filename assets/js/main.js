// import toast from './utils/toast.mjs' // esm modules (.mjs)
// import logger from './utils/logger.mjs'
// // import * as math from './utils/math.js'

// toast('Hello Anbu, from CyberDude')
// logger('Page loaded!')

const { writeInfo, libName } = require('./utils/sayHello.cjs') // commonjs (.cjs)

writeInfo('Anbu From CyberDude 2 - ' + libName)
