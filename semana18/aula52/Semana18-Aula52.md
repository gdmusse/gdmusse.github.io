# Aula 52
## _Gabriel Dienstmann Musse_

### Exercício 1
**a.** Salt: é uma string aleatória, é o hash gerado.
Round: quantas vezes o algoritmo é aplicado ao salt. O valor mais popular é 12. 

**b.** 
```
export const createHash = (plainText: string): string => {
  const salt: string = genSaltSync(12);
  const hash: string = hashSync(plainText, salt);
  return hash;
};

export const compareHash = (plainText: string, cypherText: string):boolean => {
    return compareSync(plainText, cypherText);
}
```
### Exercício 2

**b.** 
```
export default async function signUp(
    req: Request,
    res: Response
 ): Promise<void> {
    try {
        const { email, password } = req.body;
        if (!email || email.indexOf("@") === -1) {
          throw new Error("Invalid email");
        }
        if (!password || password.length < 6) {
          throw new Error("Invalid password");
        }
        const id = generateId();
        
        const hashPassword = await createHash(password);
        
        await createUser(id, email, hashPassword);
        
        const token = generateToken({id});
        
        res.status(200).send({token});
      } catch (err) {
        res.status(400).send({message: err.message});
      }
 }
```

**c.** 
```
export default async function signUp(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { email, password } = req.body;
    if (!email || email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    const userData = await getUserByEmail(email);
    if (password !== userData.password) {
      throw new Error("Invalid password");
    }

    if (userData) {
      const check = await compareHash(password, userData.password);
      if (check) {
        const token = generateToken({ id: userData.id });
        res.status(200).send({ token });
      } else {
        throw new Error(`'email' and/or 'password' incorrect`);
      }
    } else {
      throw new Error(`'email' and/or 'password' incorrect`);
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
}

```

### Exercício 3

**b.** 
```
type AuthenticationData = {
    id: string,
    role: string;
  }

const expiresIn = "1min";

export const generateToken = (input: AuthenticationData): string => {
      const token = jwt.sign({id: input.id, role: input.role},process.env.JWT_KEY as string,{expiresIn});
      return token;
};

export const getData = (token: string): AuthenticationData => {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
      id: payload.id,
      role: payload.role
    };
    return result;
  };
```

**c.**
```
export default async function signUp(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { email, password, role } = req.body;
    if (!email || email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }
    if (!password || password.length < 6) {
      throw new Error("Invalid password");
    }
    if (!role || role !== "admin" || role !== "normal") {
      throw new Error(`Role must be "admin" or "normal"`);
    }
    const id = generateId();

    const hashPassword = await createHash(password);

    await createUser(id, email, hashPassword, role);

    const token = generateToken({ id, role });

    res.status(200).send({ token });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
}

```

**d.**
```
export default async function signUp(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { email, password } = req.body;
    if (!email || email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    const userData = await getUserByEmail(email);
    if (password !== userData.password) {
      throw new Error("Invalid password");
    }

    if (userData) {
      const check = await compareHash(password, userData.password);
      if (check) {
        const token = generateToken({ id: userData.id, role:userData.role});
        res.status(200).send({ token });
      } else {
        throw new Error(`'email' and/or 'password' incorrect`);
      }
    } else {
      throw new Error(`'email' and/or 'password' incorrect`);
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
}
```


### Exercício 4

```
export default async function profile(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const token = req.headers.authorization as string;

    const authenticationData = getData(token);

    if (authenticationData.role !== "normal") {
      throw new Error("Only a normal user can access this funcionality");
    }

    const user = await getUserById(authenticationData.id);

    res.status(200).send({
      id: user.id,
      email: user.email,
      role: authenticationData.role,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
}
```


