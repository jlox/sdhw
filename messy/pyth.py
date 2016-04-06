# return all pythagorean triples whose hypotenuse is less than n
def pt(n):
    ret = []
    for c in range (1, n):        
        for a in range(1, n):
            for b in range(1, n):
                if (a**2 + b**2 == c**2):
                    ret.append([a, b, c])
    return ret

print pt(6)

# same with list comprehension
def pt2(n):
    ret = [(a, b, c) for a in range(1,n) for b in range (1, n) for c in range(1, n) if (a*a + b*b == c*c)]
    return ret

print pt2(6)
print pt2(15)

def qsort(input):
    #pick a pivot
    #partition into 2 lists, s.t
    #all v's < p are lh
    #all v's > p are uh
    #pivot in frp


def an(str):
    input = str
    result = input[0] + input[1] + input[2]
    return result

print an("2+3")
