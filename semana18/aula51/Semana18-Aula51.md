# Aula 51
## _Gabriel Dienstmann Musse_

### Exercício 1
**a.** Strings conseguem armazenar caracteres alfanuméricos, o que gera Ids mais seguros.

**b.** 
```
import { v4 } from "uuid";

export function generateId(): string {
  return v4();
}
```
### Exercício 2

**a.** 
Knex foi utilizado para se comunicar com o banco de dados, a função createUser adiciona um novo usuario com id, email e password a tabela User.

**b.** 
```
CREATE TABLE User (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```

**c.** 
```
const createUser = async (id: string, email: string, password: string) => {
    await connection
    .insert({id, email, password,})
	.into("User");
	};
```

### Exercício 3

**a.** 
Evita o retorno undefined, retornando sempre como uma string.

**b.** 
```
type AuthenticationData = {
  id: string;
}

const expiresIn = "1min";
const generateToken(input: AuthenticationData): string {
    const token = jwt.sign({id: input.id},process.env.JWT_KEY as string,{expiresIn});
    return token;
  }
```

### Exercício 4

```
app.post("/user/signup", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }
    if (!password || password.length < 6) {
      throw new Error("Invalid password");
    }

    const id = generateId();
    
    await createUser(id, email, password);

    const token = generateToken({id});
    
    res.status(200).send({token});
  } catch (err) {
    res.status(400).send({message: err.message});
  }
});
```
### Exercício 5

**a.** 
```
const getUserByEmail = async(email: string): Promise<any> => {
    try {
        const result = await connection
        .select()
        .from("User")
        .where({email});
         return result[0];
    }
    catch (error) {
        throw new Error(error.message);
    }
}
```

### Exercício 6

```
app.post("/user/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }
    
    const userData = await getUserByEmail(email);

    if (password !== userData.password) {
      throw new Error("Invalid password");
    }

    const token = generateToken({id: userData.id });

    res.status(200).send({token});
  } catch (err) {
    res.status(400).send({ message: err.message});
  }
});
```

### Exercício 7

**a.** 
A verificação jwt.verify() pode retornar qualquer coisa.

**b.**
```
const getData = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
};
```

### Exercício 8

**a.** 
```
const getUserById = async(id: string): Promise<any> => {
   const result = await connection
     .select()
     .from("User")
     .where({ id });

   return result[0];
  }
}
```

**b.**
```
app.get("/user/profile", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

    const {id} = getData(token);

    const {email} = await getUserById(id);

    res.status(200).send({id, email});
  } catch (err) {
    res.status(400).send({message: err.message});
  }
});
```
