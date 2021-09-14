with this package you can put your item in list which will be removed after you got it\
first install the package\
const queue = require('list-queue')\
const q = new queue()\
put item in list\
q.put()#this should be array or string or number\
get item from list\
q.get()#default is one item and you can increment it by put number in it's argument\
return true if it is empty\
q.isEmpty()\
return length of list\
q.length()
show the list\
queue.showList()