// const express = require('express');
// const routes = require('./routes')
import express from 'express';
import routes from './routes';
import mongoose from 'mongoose';

class App {

    constructor(){
        this.server = express();

        mongoose.connect('mongodb+srv://andersonribeirosi:5414jb@cluster0.dhkjr.mongodb.net/devhouse?retryWrites=true&w=majority',
        {
            useNewUrlParser:true, useUnifiedTopology: true
        })

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(express.json());
    }

    routes(){
        this.server.use(routes);
    }
}

// module.exports = new App().server;
export default new App().server;