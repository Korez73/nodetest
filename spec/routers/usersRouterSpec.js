//const UsersRouter = require('../../.compiled/routers/usersRouter').UsersRouter; //this isn't going to work
//const UsersRouter = import('../../.compiled/routers/usersRouter.js').UsersRouter;

import {Config} from "../../.compiled/config/config.js";
import {UsersRouter} from "../../.compiled/routers/usersRouter.js";
import {UserService} from "../../.compiled/services/userService.js";

describe("UsersRouter", () => {
    it("throws error if config not defined", () => {
        expect(() => new UsersRouter(null)).toThrow(new Error("Config not defined"));
    });

    it("calls Config.getUserService", () => {
        var config = new Config();
        spyOn(config, "getUserService").and.returnValue(new UserService());
        var router = new UsersRouter(config);
        expect(config.getUserService).toHaveBeenCalledTimes(1);
    });
});

