# Report_2019
> 2019 Flosvia report

## Github Repository에 commit하는 방법

1. 내가 git에 올릴(commit할) 파일이 있는 폴더에 들어갑니다.

2. 마우스 우클릭 후 'git bash here'을 누릅니다.

3. bash 창이 열리면 우선 git pull 명령어를 통해 로컬 저장소를 최신 상태로 만들어줍니다.
```
git pull origin master
```

4. 그 다음 git add 명령어를 통해 커밋할 파일을 추가합니다. 
- 만약 파일이 여러개라면 계속해서 add 해줍니다. 
```
git add README.md
```

5. 'git commit -m "자신이 보낼 메세지"' 명령어를 통해 커밋해 줍니다. 
```
git commit -m "commit message"
```

6. git push 명령어를 통해 커밋한 파일을 원격저장소에 올려줍니다.
```
git push origin master
```
