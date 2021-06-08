import express, { Request, Response } from 'express'
import cors from 'cors'
import { type } from 'os'

type User = {
  id: number,
  name: string,
  email: string,
  type: UserType,
  age: number
}

enum UserType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: UserType.ADMIN,
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: UserType.NORMAL,
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: UserType.NORMAL,
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: UserType.NORMAL,
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: UserType.ADMIN,
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: UserType.ADMIN,
      age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())

app.get("/users", (req:Request, res:Response) => {
  try {
    const typeQuery = req.query.type?.toString().toUpperCase();
    const nameQuery = req.query.name?.toString().toUpperCase();
    let result = users
    if(typeQuery){
       result = result.filter((user) => 
         user.type.includes(typeQuery as string) 
      )
    }
    if(nameQuery){
       result = result.filter((user) => 
         user.name.toUpperCase().includes(nameQuery as string) 
      )
    } 
    if(!result.length){
      throw new Error("No users found")
    }
    res.status(200).send(result)
  }
  catch(err){
    res.status(400).send({
      message: err.message
    })
  }
})

app.put("/users", (req: Request, res:Response) => {
  try {
    const {name, email,type,age,id} = req.body
    const newUser: User = {
      name, id, email,type,age
    }
    if(!name || !id || !email || !type || !age){
      throw new Error("Please check the fields. Name, ID, email, type and age are required")
    }
    users.push(newUser)
    res.status(200).send("User created successfuly")
  }
  catch(err){
    res.status(400).send({
      message: err.message
    })
  }
})

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})
