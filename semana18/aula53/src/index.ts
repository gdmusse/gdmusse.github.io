import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import login from './endpoints/login'
import { hash, compare } from "./services/hashManager";
import { getAdressInfo } from "./services/getAdressInfo";
import resetPassword from "./endpoints/resetPassword";


app.post('/user/signup', createUser)
app.post('/user/login', login)
app.put('/user/edit', editUser)
app.post("/user/password/reset", resetPassword)


/* getAdressInfo("05424150").then(console.log) */

/* "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFjNDE4MmJjLWEzMjMtNDdhZS05YThiLTIzOTdhMDQ0MTIzMSIsInJvbGUiOiJub3JtYWwiLCJpYXQiOjE2MjMyNDUwMDcsImV4cCI6MTYyNTMxODYwN30.R06CJfoz1EAITQ4JqR1HFobGhnwx7YDg0gXUNyKKpT8" */
