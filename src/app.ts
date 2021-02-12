import express from 'express'
import bodyParser from 'body-parser'
import Sender from './Sender';
import connect from '../db/connection'
import fs from 'fs'
import path from 'path'


export default class App {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.app.use(bodyParser.json());
    }

    


}

