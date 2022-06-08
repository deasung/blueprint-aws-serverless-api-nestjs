

# 서버리스 애플리케이션 빌드 및 배포
AWS에 배포하기 전에 항상 애플리케이션을 빌드해야 합니다.
dist디렉토리에서 AWS S3로 파일을 업로드할 때 빌드 프로세스가 성공한 후에 모든 변경 사항이 반영되기 때문입니다.
```
npm run build && sls deploy
```


# 로컬로 서버리스 띄우기
```
sls offline
```



# Serverless Dotenv Plugin
- Preload environment variables from `.env` into serverless.
```


```



# vpc 설정

해당 설정은 람다 function 자체 구성에 vpc 정도 먹이는 정도


```

```

회사 기준 vpc, subnet, security-group
```

```