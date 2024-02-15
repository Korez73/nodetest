//import pkg from 'express';
//const {express} = pkg;
import express from 'express';

//import pkg2 from 'body-parser';
//const {bodyParser} = pkg2;
import bodyParser from 'body-parser';

export class Server {
    constructor(config) {
        this.config = config;
        this.app = express();
        this.app.use(bodyParser.json());
    }

    addRouter(path, router) {
        this.app.use(path, router.build());
        return this;
    }

    start() {
        this.app.listen(this.config.getPort(), () => 
            console.log(`Listenting on port ${this.config.getPort()}`)
        )
    }
}
