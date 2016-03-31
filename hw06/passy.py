
def massive(p):
    lower="abcdefghijklmnopqrstuvwxyz" #val 0
    upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ" #val 1
    ints="0123456789" #val 2
    result = [0 if x in lower else 1 if x in upper else 2 for x in p]  
    

    
#massive("Bunnies1*")
'''print [x for x in range(8)]
print [x*x for x in range(8)]
p="myNoobPass1234"

print [x for x in p]
print [x for x in "1234"]

UC_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

print [ x for x in p if x in UC_LETTERS ]
print [ 1 for x in p if x in UC_LETTERS ] #returns 1 for each uppercase
print [ 1 if x in UC_LETTERS else 0 for x in p ] #returns 1 for each uppercase, 0 for other, in order'''
