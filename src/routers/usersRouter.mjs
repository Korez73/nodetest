//var express = require('express');
//import pkg from 'express';
//const {express} = pkg;
import express from 'express';

//import { UserService } from "../services/userService.mjs" //service to inject that into the router

// /api/users/*
export class UsersRouter {
    constructor(config) {
        if(!config) throw new Error("Config not defined");
        this.config = config;
        this.userService = config.getUserService();
        if(!this.userService) throw Error("UserService not found");
    }

    build() { //a 'magic' method?
        this.router = express.Router();
        this.router.route("/")
            .get(async(req, res, next) => {
                var users = await this.userService.getUsersAsync();
                res.json(users);
            });
            //add posts, delete routes in here if we want.
        return this.router;
    }

}