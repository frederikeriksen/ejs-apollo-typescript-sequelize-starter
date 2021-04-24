import express, { Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import config from 'config';
import path from 'path';
import Logger from './util/Logger';
import ApolloServerImpl from './graphql';
import { ApolloServer } from 'apollo-server-express';
import './config/Database';

class Application {

    private app: express.Application;
    private apolloServer: ApolloServer;
    private port: number;

    constructor() {
        this.app = express();
        this.port = config.get('port');
        this.configure();
        this.configureViews();
        this.configureApollo();
    }

    private configure = (): void => {
        this.app.use(helmet());
    }

    private configureViews = (): void => {
        this.app.set('view engine', 'ejs');
        this.app.set('views', path.join(__dirname, 'frontend/views'));
        this.app.use(express.static(path.join(__dirname, 'frontend/public')));

        this.app.get('/', (req: Request, res: Response, next: NextFunction) => {
            res.render('index');
        });
    }

    private configureApollo = (): void => {
        this.apolloServer = ApolloServerImpl;
        this.apolloServer.applyMiddleware({ app: this.app });
    }

    public start = (): void => {
        this.app.listen(this.port, (err?: any) => {
            if(err) {
                Logger.error('Application failed to start ' + err);
                process.exit(1);
            }
            Logger.info('Application started on port ' + this.port);
        });
    }
}

const app = new Application();
app.start();