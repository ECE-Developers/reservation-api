# Reservation API

## Description

서울시립대학교 전자전기컴퓨터공학부 학실 예약 서비스의 api을 담당하는 레포지토리입니다.

## Installation

- Nest는 node.js를 사용하기 때문에 node.js의 설치가 필요합니다.
- 패키지 매니저로 npm을 사용합니다.
- node: v18.7.0
- npm: 9.1.1

Checking Version
```bash
$ node -v
$ npm -v
```

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
$ docker build {USERNAME/IMAGENAME} .

# docker-compose
$ docker-compose up -d
```

- docker를 사용하여 app을 실행시킵니다.
