

# dotenv
npm 패키지 매니저를 이용하여 dotenv 라이브러리를 Node.js 프로젝트에 설치

```
$ npm i dotenv
```
## .env 파일 작성
dotenv 라이브러리는 디폴트로 현재 디렉토리에 위치한 .env 파일로 부터 환경 변수를 읽어냅니다. 
따라서, .env 파일을 생성하고, 
그 안에 필요한 환경 변수를 키=값의 포멧으로 나열하도록 하겠습니다.

```
DB_HOST=localhost
DB_USER=root
DB_PASS=s1mpl3
```