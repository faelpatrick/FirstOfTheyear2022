import { Router } from "express";
import HelloController from "./controllers/HelloController";

const routes = new Router();

routes.get('/', (req, res) => { res.send('Helo World'); });
routes.get('/hello', HelloController.index);


export default routes;