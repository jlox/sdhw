
def good(p):
    lower="abcdefghijklmnopqrstuvwxyz"
    upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    ints="0123456789"
    l = [1 for x in p if x in lower]
    u = [1 for x in p if x in upper]
    i = [1 for x in p if x in ints]

    lo = False
    up = False
    ind = False
    
    if 1 in l:
        lo = True
    if 1 in u:
        up = True
    if 1 in i:
        ind = True
    if (lo==True and up==True and ind==True):
        print "you're good"
    else:
        print "you're missing something here"
        
good("Bunnies1*")
good("cats")

def massive(p):
    lower="abcdefghijklmnopqrstuvwxyz"
    upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    ints="0123456789"
    special=".?!&#,;:-_*"

    l = [1 for x in p if x in lower]
    u = [1 for x in p if x in upper]
    i = [1 for x in p if x in ints]
    s = [1 for x in p if x in special]
    print l
    print u
    print i
    print s

    lo = 0
    up = 0
    ind = 0
    spec = 0
    if 1 in l:
        lo += 1
    if 1 in u:
        up += 2
    if 1 in i:
        ind += 3
    if 1 in s:
        spec +=4
    print (spec+ind+up+lo)
    

massive("Bunnies3*")


    
'''print [x for x in range(8)]
print [x*x for x in range(8)]
p="myNoobPass1234"

print [x for x in p]
print [x for x in "1234"]

UC_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

print [ x for x in p if x in UC_LETTERS ]
print [ 1 for x in p if x in UC_LETTERS ] #returns 1 for each uppercase
print [ 1 if x in UC_LETTERS else 0 for x in p ] #returns 1 for each uppercase, 0 for other, in order'''
