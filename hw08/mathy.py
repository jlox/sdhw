import math

def union(s1, s2):
    a = [a for a in s1 if a not in s2]
    b = [b for b in (s1 and s2)]
    return a+b
    
print "Union Test: " + str(union([1, 2, 3], [2, 3, 4, 5]))

def inter(s1, s2):
    return [x for x in (s1 and s2)]

print "Intersection Test: " + str(inter([1, 2, 3], [2, 3, 4]))

def setDiff(u, a):
    return [x for x in u if x not in a]

print "Set Difference Test: " + str(setDiff([1, 3, 5, 7], [2, 3, 4]))


def symDiff(a, b):
    return union(setDiff(a, b), setDiff(b, a))

print "Symmetric Difference Test: " + str(symDiff([1, 2, 3],[2, 3, 4]))

def cartProd(a, b):
    return [[x, y] for x in a for y in b]

print "Cartesian Product Test: "+ str(cartProd([1, 2], ['red', 'white']))

def qsort(L):
    if len(L) <=1:
        return L
    pivot = random.choice(L)
    lh = [x for x in L if x < pivot]
    uh = [x for x in L if x > pivot]
    return qsort(lh) + ([pivot] * L.count(pivot)) + qsort(uh)
