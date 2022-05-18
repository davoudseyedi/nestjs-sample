
## Description

This project is part sample of nest js framework. This project is quite simple, but comprehensive enough to let you guys learn how to create and deploy a production ready application.

For this project, we will build and deploy a NestJS application that will be used to serve the API needed to build user base.


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Docker

after install docker on your system type this code:
```bash
$ docker-compose up -d
```
## Prsima
Run prisma migrate. It will replay the migration history
```bash
$ npx prisma migrate dev

$ npx prisma init

$ npx prisma studio

$ npx prisma --help
```

If you plan to use this code for your own project, it is best practice to include the migrations history in your repository to mantain a single source of truth.

Read more: Prisma Migration

## Stay in touch

- Author - Davoud Seyedi(https://sey3di.com)
