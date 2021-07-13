import { app } from "./controller/app"
import { signup } from './controller/user/signup'
import { login } from './controller/user/login'
import { getAll } from "./controller/user/getAll"
import { deleteUser } from "./controller/user/delete"


app.post('/user/signup', signup)
app.post('/user/login', login)
app.get("/user/all", getAll)
app.delete("/user/:id", deleteUser)