'''a=[]
b=[1,2,3]
c=['Life', 'is', 'too', 'short']
d=[1,2,'Life', 'is']
e=[1,2,['Life', 'is']]

print(a, b, c, d, e)

a = [1, 2, 3]
print(a[0]+a[2])

a=[1,2,3]
b=[4,5,6]
print(a+b)

a=[1,2,3]
print(a*3)

a=[1,2,3]
print(str(a[2]) + "hi")#str()은 정수나 실수를 문자열의 형태로 바꾸어 주는 파이썬의 내장 함수

del a[1]#del=객체 리스트요소 삭제
print(a)
a=[1,2,3,4,5]
del a[2:]
print(a)

print(len (a))#길이

a=[1,2,3]
a.append(4)#추가하는 함수
print(a)

a=['a', 'c', 'b']
a.sort()#정렬하는 함수
print(a)

a.reverse()#역순으로 정렬
print(a)

a=[1,2,3]
print(a.index(3))#위치 반환

a.insert(0,4)
print(a)#0번째 위치에 4를 삽입하는 함수

a=[1,2,3,1,2,3]
a.remove(3)
print(a)#첫 번째로 나오는 3을 삭제하는 함수

a.pop()
print(a)#맨 마지막 요소를 돌려주고 삭제하는 함수

a=[1,2,3,1]
print(a.count(1))#1이 몇개 있는지 조사하여 개수를 알려주는 함수

a=[1,2,3]
a.extend([4,5])
'''

a=['Life', 'is', 'too', 'short']
result=" ".join(a)
print(result)

a=[1,3,5,4,2]
a.sort()
a.reverse()
print(a)

