# ReservationEntity API

## Description

서울시립대학교 전자전기컴퓨터공학부 학실 예약 서비스의 api을 담당합니다.

## Installation

- node 패키지 매니저로 npm을 사용합니다.
- node: v18.7.0
- npm: 9.7.2

Version Checking

```bash
$ node -v
$ npm -v
```

## Env Setting

1. 루트 디렉토리에 .env 파일 생성
2. .env.example에 있는 내용을 복사
3. 환경 변수 설정

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

## Production Setting

```bash
# 환경 변수 설정
$ vim .env

# pm2를 통한 배포 시작
$ npm run start:prod

# 프로덕트 로그 관리
$ pm2 log

# 프로덕트 종료
$ pm2 kill
```

- Production 환경에서 pm2를 통해 node를 관리합니다.
- 명령어 수정을 통해 start:prod 커맨드 시에 pm2을 실행하도록 설정했습니다.
- AWS의 EC2 Ubuntu 22.04.1 LTS 기준입니다.

## Available Script

### 실행

```bash
$ npm run start

$ npm run start:dev
```

- 3000 port에서 app을 실행합니다.

### 테스트

```bash
$ npm test

$ npm run test:e2e

$ npm run test:cov
```

- app 테스트를 진행합니다.

### docker를 사용하는 경우

```bash
# 이미지 파일 빌드
$ docker build -t {USERNAME/IMAGENAME} .

# 실행
$ docker-compose up -d

# 종료
$ docker-compose down
```

- docker를 사용하여 app을 실행시킵니다.

### 마이그레이션

```bash
# Entity 변경사항 반영
$ npm run build

# DB migration
$ npm run typeorm migration:generate -- ./src/migrations/{migration_name} -d ./src/data-source.ts

# DB up
$ npm run typeorm migration:run -- -d ./src/data-source.ts

# DB down
$ npm run typeorm migration:revert -- -d ./src/data-source.ts
```

- nest의 typeorm을 사용하여 migration합니다.