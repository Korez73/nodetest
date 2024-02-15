export class Config { //this is our 'container'

    addTransient(serviceName, service) {
        console.log("DEBUG: addTransient:" + serviceName);
        this[serviceName] = service;
        return this; //return ourselves so we can do fluent chaining
    }

    getUserService() {
        return this.getService("UserService");
    }

    getService(key) { //basic service factory
        if(!(key in this))
            return undefined;
        return new this[key]();
    }

    setPort(port) {
        console.log("DEBUG: setPort:", port);
        this.port = port;
        return this; //return for chaining
    }

    getPort() {
        return this.port;
    }
}