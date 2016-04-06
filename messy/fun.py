import random
'''
def inc(x):
    return x+1

def dec(x):
    return x-1

f = inc
print f(5)

flist = [inc, dec]
#access index 0 of flist, input into that function so that its dec(5)
print flist[1](5)


def makeAdder(n):
    def inner(x):
        return x+n
    return inner

add3 = makeAdder(3)
add5 = makeAdder(5)

print add3(10)
print add5(10)

#a py function can be written so as to build and return another function

def make_counter():
    #private "instance" data
    # has to be a list due to weird python scoping rules
    count = [0]

    #public methods
    def inc():
        count[0] = count[0]+1
    def dec():
        count[0] = count[0]-1
    def reset():
        count[0]=0
    def get():
        return count[0]

    #return a dictionary so we have access to all the methods
    return {'inc': inc, 'dec': dec, 'reset': reset, 'get': get}

c1 = make_counter()
c2 = make_counter()

#must use clunky list notation:
c1['inc']()
c1['inc']()
c1['inc']()
print c1['get']()

c2['inc']()
print c2['get']()

c1['reset']()
print c1['get']()


def get_name():
    names=['tom','sue','harry','lisa','sarah','horatio']
    return random.choice(names)
    
def dble(f):
    name = f()
    return name+name

bob = get_name
print dble(bob)
'''


def doubler(f):
    def inner():
        name=f()
        return name+name
    return inner

#@doubler
def get_name():
    names = ['tom','sue','harry','lisa','sarah','horatio']
    return random.choice(names)

print get_name()

#with the decorator, doubler is called with get_name as the parameter
'''
equiv to get_name = double(get_name)
TAKEAWAY: can write functions that transform functions
a python decorator is merely shorthand for calling a wrapper-type function like
doubler
a python decorator encapsulates a closure
a decorator allows to transparently wrap functionality

where can you use this?
this makes things html-y!!!! super lit fam

def htmler(f):
    def inner():
        name=f()
        return "<html>"+name+"</html>"
    return inner

@htmler
def get_name():
    names = ['tom','sue','harry','lisa','sarah','horatio']
    return random.choice(names)
'''
