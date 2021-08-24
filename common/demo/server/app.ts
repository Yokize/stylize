import { resolve } from 'path';
import bodyParser from 'body-parser';
import { Logger, middleware } from './logger';
import type { Application, Response, Request } from 'express';
import type { CodeFragment } from '@base/code';

/**
 * Configure the express application.
 * @param application Application.
 * @returns Application with middleware.
 */
export default function (application: Application): Application {
  // Middleware to log the requests.
  application.use(<any>middleware);

  // Middleware to parse the json body.
  application.use(bodyParser.json());

  // Define the route to get Sass code fragments.
  application.post('/sass/*', ({ params, body }: Request, res: Response): void => {
    import(resolve(__dirname, 'sass', params[0]?.replace(/\.\./g, '')))
      .then((module: DynamicModule): CodeFragment[] => module.default(body))
      .then((data: CodeFragment[]): void => res.send(data).end())
      .catch((error: Error): unknown => Logger.error(error.message));
  });

  // Returns application with middleware.
  return application;
}
