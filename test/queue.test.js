const Q = require('list-queue')
const q = new Q
test('test isEmpty' ,()=>{
    expect(q.isEmpty()).toBe(true);
})
test('is isEmpty , get',()=>{
    q.put(1)
    expect(q.isEmpty()).toBe(false)
    q.get()
})

test('test length , get',()=>{
q.put(12)
expect(q.length()).toBe(2)
q.get(2)
})
test('test put , showList , get',()=>{
    q.put(12)
    expect(q.showList()).toEqual(['1', '2'])
    q.get(2)
    q.put('12')
    expect(q.showList()).toEqual(['1', '2'])
    q.put([3 , 4])
    expect(q.showList()).toEqual(['1', '2', '3' , '4'])
})

