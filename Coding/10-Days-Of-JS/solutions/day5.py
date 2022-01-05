# PROBLEM
# https://www.hackerrank.com/challenges/one-week-preparation-kit-lonely-integer/

def lonelyinteger(a):
    a = sorted(a)
    if len(a) < 3:
        return a[0]
    elif a[0] != a[1]:
        return a[0]
    else:
        return lonelyinteger(a[2:])