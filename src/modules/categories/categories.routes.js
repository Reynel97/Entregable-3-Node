import { Router } from "express";
import createCategory from "./categories.controlers.js";


const router = Router();

router.route('/categories')
    .post(createCategory)


    export default router;