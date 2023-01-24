# ReservationEntity API

## Description

서울시립대학교 전자전기컴퓨터공학부 학실 예약 서비스의 api을 담당하는 레포지토리입니다.

## Installation

- Nest는 node.js를 사용하기 때문에 node.js의 설치가 필요합니다.
- 패키지 매니저로 npm을 사용합니다.
- node: v18.7.0
- npm: 9.1.1

Version Checking

```bash
$ node -v
$ npm -v
```

## Env Setting

해당 레포지토리는 redis와 같은 마이크로 서비스를 사용합니다. 멀티컨테이너 체제를 docker-compose
를 통해 환경 변수를 연결하여 사용합니다.

1. 루트 디렉토리에 .env 파일 생성
2. .env.example에 있는 내용을 복사
3. 환경 변수 설정
4. docker-compose up -d 명령어를 통한 멀티 컨테이너 구동

## Local Setting
```bash
# 로컬로 프로젝트 파일 복사
$ git clone https://github.com/ECE-Developers/reservation-api

# 디렉토리 이동
$ cd reservation-api

# 의존성 설치
$ npm install 

# 앱 실행 (http://localhost:3000에서 실행됨)
$ npm run start
```

## Available Script

### 실행

```bash
$ npm run start
```

- 3000 port에서 app을 실행합니다.

### 테스트

```bash
$ npm test

$ npm run test:e2e

$ npm run test:cov
```

- watch 모드로 실행하기 때문에 개발 환경에서 사용합니다.

### 개발 모드

```bash
$ npm run start:dev
```

- watch 모드로 실행하기 때문에 개발 환경에서 사용합니다.

### docker를 사용하는 경우

```bash
# 이미지 파일 생성
$ docker build -t {USERNAME/IMAGENAME} .

# 실행
$ docker-compose up -d

# 종료
$ docker-compose down
```

- docker를 사용하여 app을 실행시킵니다.
