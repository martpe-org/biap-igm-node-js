# IGM Node service

Issue Greviance Management API provides endpoints to create issues, list all issues and fetch the issue status, etc.

## Requirements

- Node v18.16.1 (any other should also work fine)

## Install dependencies

Run the below command to install the project dependencies.

```bash
npm install
```

## Starting the server

1. Create the `.env` file by copying from the `.env.development` file, you the run the below command for it

```
cp .env.development .env
```

2. Ensure to properly udpate the `.env` file with the values that you want in the file.

3. Run the below command to start the server in `dev` mode.

```bash
npm run start:dev
```

4. Run the below command to start the server in `prod` mode.

```bash
npm run build
npm run start:prod
```

5. If you have docker installed you can just run the below command to bring up the server using the `.env.development` file.
```
docker compose -f docker-compose-local.yml up --env-file .env.development
```