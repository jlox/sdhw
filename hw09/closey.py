import time

#a simple example of applying multiple decorators
def name(fn):
    def namer():
        named = str(fn.func_name) + ": " + fn()
        return named
    return namer

def timer(fn):
    start = time.time()
    def timey():
        fn()
        ttimey = "execution time: " + str(time.time() - start)
        return ttimey
    return timey

@name
@timer
def hello():
    return "hello world"

helloHTM = hello


@name
def jello():
    return "jello world"
    
helloHTML = jello()

print helloHTM
print helloHTML
