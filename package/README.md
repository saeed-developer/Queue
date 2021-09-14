with this package you can put you're item in list which will be removed after you got it
#first install the package
const queue = require('Queue')
#put item in list
queue.put()#this should be array or string or number 
get item from list
queue.get()#default is one item and you can increment it by put number in it's argument
#return true if it is empty
queue.isEmpty()
#return length of list
queue.length()
#show the list
queue.showList()