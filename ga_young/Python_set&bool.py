'''집합'''

s1=set([1,2,3])
print(s1)

s2=set("hello")
print(s2)

s1=set([1,2,3,4,5,6])
s2=set([4,5,6,7,8,9])
print(s1 & s2)

s1=set([1,2,3,4,5,6])
s2=set([4,5,6,7,8,9])
print(s1 | s2)

s1=set([1,2,3,4,5,6])
s2=set([4,5,6,7,8,9])
print(s1 - s2)

s1=set([1,2,3])
s1.add(4)
print(s1)

s1=set([1,2,3])
s1.update([4,5,6])
print(s1)

a=set([1,1,1,2,2,3,3,3,4,4,5])
print(a)

'''불'''

a=True
b=False

print(1==1)
