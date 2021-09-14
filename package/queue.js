 class Queue{
    #list
    #item
    constructor() {
        this.#list = [];
        this.#item = '';
      }
put(a){
    if (Array.isArray(a)){
     for (let x of a){
         this.#list.push(String(x))
     }
    }
    else if (typeof a === 'string'){
       return  a.split('').map((item)=>{
            this.#list.push(item)
       })
    }
    else if (typeof a === 'number'){
        return  String(a).split('').map((item)=>{
            this.#list.push(item)
       }) 
    }
    else if ( a === undefined){
        return 
    }
    else throw 'The input should be string or number or array'
}
get(a = '1'){
if (String(a) === '1'){
return this.#item = this.#list.shift()
}
else if(a > '1') return this.#item = this.#list.splice(0 , String(a))
}
showList()
{
   return this.#list
}

isEmpty(){
 if (this.#list.length ===0)return true
 else return false
}
length(){
    return this.#list.length
}
}
module.exports = Queue