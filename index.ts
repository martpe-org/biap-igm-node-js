import { logger } from "./shared/logger";
import createServer from "./app";
import dbConnect from "./database/mongooseConnector";

const port = 6969;

const {app, io} = createServer();

try {
  //Setup connection to the database

  dbConnect()
    .then(() => {
      logger.info("Database connection successful");

      const server = app.listen(port, (): void => {
        logger.info(`Connected successfully on port ${port}`);
      });

      io.attach(server);
    })
    .catch((error: any) => {
      logger.info("Error connecting to the database", error);
      return;
    });
} catch (error) {
  logger.error(`Error occured: ${(error as any).message}`);
}
