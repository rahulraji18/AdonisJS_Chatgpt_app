Adonis_Assignment

# start app

1) Add below data to ".env" and ".env.example"

```bash
   PORT=3333
   HOST=0.0.0.0
   NODE_ENV=development
   APP_KEY=bMf6KJJacZ6IPP8rSC-F5Y-ypE8RBKMp
   DRIVE_DISK=local
   DB_CONNECTION=pg
   PG_HOST=localhost
   PG_PORT=5432
   PG_USER=postgres
   PG_PASSWORD=postgres
   PG_DB_NAME=postgres
   OPENAI_API_KEY=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
```
2) Download Packages, Run App and Migration using below commands

```bash
   npm install

   npm run dev

   node ace migration:run
```
3) Postman Api Documentation
   
   ```bash 
      https://www.postman.com/martian-desert-545458/workspace/public-work/collection/21586979-2fa85434-be20-4cba-9a76-664f4bd1a3a8
   ```

# features

1. Authentication
2. Get Questions, options
3. Get Answers based on question number

# api end points

> Get Questions and options api
> Method: GET
> http://localhost:3333/questions?language=javascript&numberOfQuestions=5

> Get Answers Api
> Method: GET
> http://localhost:3333/answer?question_number=Q-15951&answer=php

> Register User Api
> Method: POST
> http://localhost:3333/register

> Login User Api
> Method: POST
> http://localhost:3333/login

