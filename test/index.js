const Q = require('Queue.js')
const q = new Q
q.put(5)
q.get()
console.log(q.length())
console.log(q.isEmpty())
console.log(q.showList())