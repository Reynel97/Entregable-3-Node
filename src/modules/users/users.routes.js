import { Router } from "express";
import { createUser, getUser } from "./users.controllers.js";



const router = Router();

router.route('/users')
    .post(createUser)

router.route('/users/:id')
    .get(getUser)


export default router;