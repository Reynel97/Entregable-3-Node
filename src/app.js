import express from 'express';
import db from './utils/database.js';
import cors from 'cors'
import initmodels from './models/initmodels.js';
import usersRoutes from './modules/users/users.routes.js'
import categoriesRoutes from './modules/categories/categories.routes.js'
import tasksRouter from './modules/tasks/tasks.routes.js'

initmodels();

const PORT = process.env.PORT ?? 8000;
const app = express()
app.use(express.json())
app.use(cors())

db.authenticate()
.then(() => { console.log('Base de datos conectada correctamente')})
.catch((err) =>{ console.log(err)})

db.sync()
.then (()=>console.log("Sincronización completa"))
.catch ((error)=>console.log (error))

app.use(usersRoutes)
app.use(categoriesRoutes)
app.use(tasksRouter)

app.get('/', (req, res) => {
    res.send('OK')
   
})

app.listen( PORT, () => {
    console.log(`Server running on port ${PORT}`)

})

