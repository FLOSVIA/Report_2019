# Youtube list

# 원하는 음악 이름을 입력받아, youtube에서 검색. -> 검색한 페이지로 이동 ->  페이지 내에서 위부터 동영상 5개에 대한 정보 출력 (제목, 조회수, 영상 주소)
# 위를 tkinter을 써서 GUI로 구현.
# 원래는 image url을 얻어와 화면에 출력 시킬 예정이었으나, 시간 부족 및 지식 부족 등으로 인해 생략
# 재생 시간과 올린 날짜도 출력하려 했으나 태그를 없애지 못해 생략
#  CHROME에서 본 페이지 소스의 태그와 파싱한 것의 태그가 달라서 초반에 많이 애를 먹음.
# 얻어낸 URL을 클릭시, 그에 대한 페이지를 띄울 예정이었으나, 시간 및 지식 부족으로 생략

# -- 오류 --
# 유튜브의 재생목록 같은 경우, 첫번째 영상의 제목과 URL 까지 출력할 수 있으나, 조회수는 출력 안됨
# 한글로 입력할 경우 ASCII 때문에 오류가 발생
# 즉 한글이 아닌 영어로 입력을 해야한다.
# 사실 GUI와 초반 태그 때문에 삽질을 한 결과 많은 오류를 고칠 시간이 부족했다.
# 노래를 입력할 때는 공백 없이 입력해야된다...
# 공백이랑 입력하면 오류난다....


# tkinter, bs4 등을 import
from tkinter import *    
from tkinter import ttk
from tkinter import font
from tkinter import messagebox
from bs4 import BeautifulSoup
import urllib.request

# tkinter 창 생성
window = Tk()

window.title('Youtube List')   
window.geometry('400x500+100+100')    
window.resizable(False,False)  

def clickbutton():   # 크롤링하고 새창에 출력
    keyword= word.get()  
    if keyword == '':   
        messagebox.showinfo('메세지 상자','아무것도 입력하지 않으셨습니다.')
        window.mainloop()

    toplvl = Toplevel(window) 
    toplvl.title('Music List')  
    toplvl.geometry('500x600+120+120')
    toplvl.resizable(True, True)  
    toplvl.configure(background="gray23")  
    fonts = font.Font(toplvl, size = 12, weight = 'bold')

    req = urllib.request    
    links = 'https://youtube.com/results?q='+keyword  
    page = req.urlopen(links) 
    soup = BeautifulSoup(page, 'lxml') 
    tag = soup.find_all('div', attrs={'class':'yt-lockup-dismissable'}, limit=5) 
    for t in tag:
        title = t.find('a', {'title' : True})['title']  
        url = t.a.get('href')  
        # img = t.find('img', {'src' : True})['src']     
        # time = t.find('span',{'class':'video-time'})  
        hit = t.find('ul',{'class':'yt-lockup-meta-info'}) 
        for h in hit:
            hits = h.get_text() 
        label1 = Label(toplvl, text = '\n'+title+'\n'+hits+'\nhttps://www.youtube.com/'+url+'\n',foreground = 'white', background = 'gray23')  
        label1.pack(side = 'top')
        label1['font'] = fonts   
    
    
fontobject=font.Font(window,size=18,weight='bold')  
label=Label(window, text = 'Youtube List', width = 20, height = 2, foreground = 'white', background = 'gray23')  
label.place(x=50, y=260)     
label['font'] = fontobject   

word = StringVar()   # 입력받을 변수 생성
search = ttk.Entry(window, width=40,textvariable=word)  # 입력 받기
search.place(x = 60, y = 350)   

img = PhotoImage(file='rrr.png')   # rrr.png 이미지 열기
main_label = Label(image = img)  
main_label['borderwidth'] = '0'  
main_label.place(x = 60, y = 50)  

button = ttk.Button(window, text='Search', command = clickbutton)   # 버튼을 누를 때, clickbutton 함수 실행
button.place(x = 160, y=380) 

window.configure(background="gray23")

window.mainloop()   # 다양한 이벤트로 부터 오는 메세지 전송

