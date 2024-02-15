import { Config } from "./config/config.js" //a "startup", a serice collection class called Config
import { Server } from "./servers/server.js" //a 'base server class', which will contain all of the Express code (so we don't have to work with it)
import { UsersRouter } from "./routers/usersRouter.js" //Going to function like our controller, handling routes and passing those
import { UserService } from "./services/userService.js" //service to inject that into the router

var config = new Config()
    .setPort(3000)
    .addTransient("UserService", UserService);

new Server(config)
    .addRouter("/api/users", new UsersRouter(config))
    .start();



