def repeat(thingy):
    def g(y):
        i = y
        s = ''
        while i > 0:
            s = s + thingy
            i -= 1
        return s
    return g


"""
def times(word):
    def times(x):
        return word*x
    return times
"""


print repeat('hi')(3)
print repeat('three?')(4)

r1 = repeat('hello')
print r1(2)
r2 = repeat('goodbye')
print r2(2)
#print r1(2) ->hellohello
#print r2(2) -->goodbyegoodbye
#print repeat('cool')(3) -> coolcoolcool
