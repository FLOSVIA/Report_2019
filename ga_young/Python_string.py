"""#multistring.py

print("="*50)
print("My Program")
print("="*50)"""

'''a="Python"
print(a*2)'''

'''a="Life is too short"
print(len(a)) #문자열_길이_구하는_함수'''

'''a="Life is too short, You need Python"
print(a[3])'''

'''a="Life is too short, You need Python"
b=a[0]+a[1]+a[2]+a[3]
print(b)'''

'''a="Life is too short, You need Python"
print(a[0:4])'''

'''a = "Pithon"
print(a[:1]+'y'+a[2:])'''

'''print("I eat %d apples" %3)
print("I eat %s apples." % "five")
//문자를 대입할 때는 큰따옴표나 작은따옴표'''

'''print("Error is %d%%" % 98)
print("%10s" % "hi")
print("I eat {0} apples".format(3))
print("I eat {0} apples".format("five"))
print("I ate {0} apples. so I was sick for {day} days". format(10, day=3))'''

'''print("{0:>10}".format("hi"))#오른쪽 정렬
print("{0:<10}".format("hi"))#왼쪽 정렬
print("{0:^10}".format("hi"))#가운데 정렬
:뒤에 문자를 넣으면 지정한 문자값으로 채워넣음'''

'''name='홍길동'
age=30
print(f'나의 이름은 {name}입니다. 나이는  {age}입니다')'''

'''print(f'{"hi":<10}') #왼쪽 정렬
print(f'{"hi":>10}') #오른쪽 정렬
print(f'{"hi":^10}') #가운데 정렬
print(f'{"hi":=^10}') #가운데 정렬하고 '='로 공백채우기
print(f'{"hi":!<10}') #왼쪽 정렬하고 '!'문자로 공백채우기'''

'''a="hobby"
print(a.count('b')) #문자 개수 세기=count
a="Python is the best choice"
print(a.find('b')) #위치알려주기=find
print(a.find('k'))
a = "Life is too short"
print(a.index('t')) #index로 위치알려주기'''

'''print(",".join('abcd')) #문자열삽입=join
print(",".join(['a', 'b', 'c', 'd']))'''

'''a="hi"
print(a.upper())#소문자->대문자=upper
a = "HI"
print(a.lower())#대문자->소문자=lower'''

'''a = " hi "
print(a.rstrip())#오른쪽 공백 지우기=rstrip
a = " hi "
print(a.strip())#양쪽공백 지우기=strip
a = " hi "
print(a.lstrip())#왼쪽 공백 지우기=lstrip'''

'''a = "Life is too short"
print(a.replace("Life", "Your leg"))#문자열 바꾸기=repalce
a = "Life is too short"
print(a.split())#문자열 나누기=split

a="hello"
print(a)'''

#연습문제

hong="881120-1068234"
yyyymmdd=hong[:6]
num=hong[7:]
print(yyyymmdd)
print(num)

pin="881120-1068234"
print(pin[7])

a = "a:b:c:d"
print(a.replace(":", "#"))

a = "a:b:c:d"
b = a.split(":")
print(b)
c="#".join(b)
print(c)