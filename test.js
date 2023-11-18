// console.log('console.log 1')
// process.nextTick(() => console.log('this is process.next 1'))
// console.log('cnosole.log 2')

// Promise.resolve().then(() => console.log('this is Promise.resolve 1'))
// process.nextTick(()=>console.log('this is process.nextTick 1'))

// setTimeout(() => {
//     console.log('this is setTimeout 1')
// }, 1000);
// setTimeout(() => {
//     console.log('this is setTimeout 2')
//     process.nextTick(() => console.log('this is the inner tick inside setTimeout'))
//     Promise.resolve().then(() => console.log('this is Promise.resolve inside setTimeout'))
// }, 500);
// setTimeout(() => {
//     console.log('this is setTimeout 3')
// }, 0);

// process.nextTick(() => console.log('this is process.nextTick 1'))
// process.nextTick(() => {
//     console.log('this is process.nextTick 2')
//     process.nextTick(()=> console.log('this is the inner next tick inside next tick'))
// })
// process.nextTick(() => console.log('this is process.nextTick 3'))

// Promise.resolve().then(() => console.log('this is Promise.resolve 1'))
// Promise.resolve().then(() => {
//     console.log('this is Promise.resolve 2')
//     process.nextTick(()=> console.log('this is the inner next tick inside Promise then block'))
// })
// Promise.resolve().then(()=>console.log('this is Promise.resolve 3'))

// const fs = require('fs')
// setTimeout(() => {
//     console.log('this is setTimeout 1')
// }, 0);

// setImmediate(()=>console.log('this is setImmediate 1'))

// fs.readFile(__filename, () => {
//   console.log('this is readFile 1')  
//   setImmediate(() => console.log('this is inner setImmdiate inside readFile'))
//   process.nextTick(() => console.log('this is inner process.nextTick inside readFile'))
//   Promise.resolve().then(()=>console.log('this is inner Promise.resolve inside readFile.'))
// })

// process.nextTick(() => console.log('this is process.nextTick 1'))
// Promise.resolve().then(()=>console.log('this is Promise.resolve 1'))

// setImmediate(() => console.log('this is setImmidiate 1'))
// setImmediate(() => {
//   console.log('this is setImmediate 2')
//   process.nextTick(() => console.log('this is process.nextTick 1'))
//   Promise.resolve().then(()=>console.log('this is Promise.resolve 1'))
// })
// setImmediate(()=> console.log('this is setImmediate 3'))

// setTimeout(() => console.log('this is setTimeout 1'), 1)
// setImmediate(() => console.log('this is setImmediate 1'))
// for (let i = 0; i < 2000000000;i++){}

const fs = require('fs')
const readableStream = fs.createReadStream(__filename)
readableStream.close()
readableStream.on('close', () => console.log('this is from readableStream close event callback'))
setImmediate(() => console.log('this is setImmediate 1'))
setTimeout(() => console.log('this is setTimeout 1'))
Promise.resolve().then(() => console.log('this is Promise.resolve 1'))
process.nextTick(()=>console.log('this is process.nextTick 1'))