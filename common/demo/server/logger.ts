import morgan, { StreamOptions } from 'morgan';
import winston, { Logform, transport } from 'winston';
import type { IncomingMessage, ServerResponse } from 'http';

// Create the Logger which is used to log messages.
export const Logger = winston.createLogger({
  level: 'debug',
  // Customizing the winston log format.
  format: winston.format.combine(
    // Add the timestamp with the preferred format.
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    // Define the format of the message showing the timestamp, level and message.
    winston.format.printf((info: Logform.TransformableInfo): string => {
      return `${info.timestamp} ${info.level}: ${info.message}`;
    })
  ),
  // Transports the logger must use to print messages.
  transports: [
    // Allow to use the console to print the messages.
    new winston.transports.Console(),
    // Allow to print the error messages to the error.log file.
    new winston.transports.File({
      level: 'error',
      filename: 'logs/error.log'
    }),
    // Allow to print all the error message inside the all.log file.
    new winston.transports.File({
      filename: 'logs/all.log'
    })
  ]
});

// Create the morgan middleware which is used to log requests.
export const middleware = morgan(':method :url :status :res[content-length] - :response-time ms', {
  stream: { write: (message: string): unknown => Logger.http(message) },
  skip: (request: IncomingMessage): boolean => request.method !== 'POST'
});
