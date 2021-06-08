import express, { Request, Response } from "express";
import cors from "cors";
import dayjs from "dayjs";

const app = express();
app.use(express.json());
app.use(cors());

type Expense = {
  value: number;
  date: string;
  description: string;
  accounted: boolean;
};

type User = {
  id: number;
  name: string;
  cpf: string;
  dateOfBirth: string;
  balance: number;
  statement: Expense[];
};

let users: User[] = [
  {
    id: 1,
    name: "Gabriel",
    cpf: "12345678911",
    dateOfBirth: "1990-01-01",
    balance: 500,
    statement: [
      {
        value: 500,
        date: "2020-01-01",
        description: "Money deposit.",
        accounted: true,
      },
    ],
  },
  {
    id: 2,
    name: "Felipe",
    cpf: "12345678912",
    dateOfBirth: "1990-05-02",
    balance: 1500,
    statement: [
      {
        value: 1500,
        date: "2020-02-01",
        description: "Money deposit.",
        accounted: true,
      },
    ],
  },
  {
    id: 3,
    name: "Daniela",
    cpf: "12345678913",
    dateOfBirth: "1996-12-09",
    balance: 100,
    statement: [
      {
        value: 100,
        date: "2020-05-01",
        description: "Money deposit.",
        accounted: true,
      },
    ],
  },
];

//Get all users
app.get("/users", (req: Request, res: Response) => {
  try {
    res.status(200).send(users);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

//Add user
app.post("/users", (req: Request, res: Response) => {
  try {
    const { name, cpf, dateOfBirth } = req.body;
    let now = dayjs();
    let birthDate = dayjs(dateOfBirth);
    let age = now.diff(birthDate, "years");
    if (age >= 18) {
      const newUser: User = {
        id: Number(now),
        name,
        cpf,
        dateOfBirth,
        balance: 0,
        statement: [],
      };
      if (!name || !cpf || cpf.length < 11) {
        throw new Error(
          "Please check body, it requires name, CPF (11 numbers) and date of birth (YYYY-MM-DD)."
        );
      }
      users.map((user) => {
        if (user.cpf.includes(cpf)) {
          throw new Error("This CPF is already registered.");
        }
      });
      users.push(newUser);
      res.status(200).send("User created sucessfully");
    } else {
      throw new Error("User is not 18 years old yet.");
    }
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

//Get user's balance passing CPF as parameter
app.get("/users/:cpf", (req: Request, res: Response) => {
  try {
    const cpfParams = req.params.cpf as string;
    let balance;
    let selectedUser;
    if (cpfParams.length < 11) {
      throw new Error("Check CPF, 11 numbers are required");
    } else {
      users.map((user) => {
        if (user.cpf === cpfParams) {
          selectedUser = user.name;
          balance = Number(user.balance);
          if (balance === 0) {
            res.status(200).send(`${selectedUser}'s balance: $${balance}`);
          }
        }
      });
      if (!balance) {
        throw new Error("No user with that CPF found.");
      }
      res.status(200).send(`${selectedUser}'s balance: $${balance}`);
    }
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

//Add a deposit
app.put("/users/add", (req: Request, res: Response) => {
  try {
    const cpfQuery = req.body.cpf as string;
    const nameQuery = req.body.name as string;
    const valueQuery = req.body.value;
    let result = false;
    if (cpfQuery.length < 11 || !nameQuery || !valueQuery) {
      throw new Error("Check parameters.");
    } else {
      users.map((user) => {
        if (
          user.cpf === cpfQuery &&
          user.name.toLowerCase() === nameQuery.toLowerCase()
        ) {
          user.balance += Number(valueQuery);
          let now = dayjs();
          let newItem: Expense = {
            value: Number(valueQuery),
            date: now.format("YYYY-MM-DD"),
            description: "Money deposit.",
            accounted: true,
          };
          user.statement.push(newItem);
          result = true;
        }
      });
      if (!result) {
        throw new Error("No user with that CPF and name found.");
      }
      res.status(200).send("Deposit added successfully.");
    }
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

//Add or schedule payment
app.post("/users/pay", (req: Request, res: Response) => {
  try {
    const { cpf, value, description } = req.body;
    let date = req.body.date as string;
    if (!date) {
      let now = dayjs();
      date = now.format("YYYY-MM-DD");
    }
    let result = false;
    if (cpf.length < 11 || !value || !description) {
      throw new Error("Check parameters.");
    }
    if (dayjs(date).isBefore(dayjs())) {
      throw new Error("You can't schedule a payment for previous days.");
    } else {
      users.map((user) => {
        if (user.cpf === cpf) {
          if (user.balance >= value) {
            let newItem: Expense = {
              value: -Number(value),
              date,
              description,
              accounted: false,
            };
            user.statement.push(newItem);
            result = true;
          } else {
            throw new Error(
              "You can't schedule a payment for a higher expense than your statement."
            );
          }
        }
      });
      if (!result) {
        throw new Error("No user with that CPF found.");
      }
      res.status(200).send("Expense added successfully.");
    }
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

//Update user's balance passing cpf as parameter
app.put("/users/:cpf/update", (req: Request, res: Response) => {
  try {
    const cpfParams = req.params.cpf as string;
    let balance;
    let selectedUser;
    let balanceChanged = false;
    if (cpfParams.length < 11) {
      throw new Error("Check CPF, 11 numbers are required");
    } else {
      users.map((user) => {
        if (user.cpf === cpfParams) {
          selectedUser = user.name;
          balance = Number(user.balance);
          if (balance === 0) {
            throw new Error(
              `${selectedUser}'s balance doesn't need to be updated.`
            );
          }
          user.statement.map((obj) => {
            if (dayjs(obj.date).isBefore(dayjs()) && obj.accounted === false) {
              user.balance += Number(obj.value);
              balance = Number(user.balance);
              balanceChanged = true;
              obj.accounted = true;
            }
          });
        }
      });
      if (balanceChanged) {
        res
          .status(200)
          .send(
            `${selectedUser}'s balance was updated. New balance: $${balance}`
          );
      }
      if (!balance) {
        throw new Error("No user with that CPF found.");
      }
      if (!balanceChanged) {
        throw new Error(
          `${selectedUser}'s balance doesn't need to be updated.`
        );
      }
    }
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

//Make a transfer between accounts, passing both cpfs and names
app.post("/users/transfer", (req: Request, res: Response) => {
  try {
    const { yourName, yourCpf, recipientName, recipientCpf, value } = req.body;
    let balance;
    let result = users;
    if (yourCpf.length < 11 || recipientCpf.length < 11) {
      throw new Error("Check CPFs, 11 numbers are required");
    } else {
      if (recipientName && recipientCpf) {
        result = result
          .filter((user) => user.name === recipientName)
          .filter((user) => user.cpf === recipientCpf);
      }
      if (!result.length) {
        throw new Error("Check recipient parameters. Recipient not found.");
      }
      users.map((user) => {
        if (
          user.cpf === yourCpf &&
          user.name.toLowerCase() === yourName.toLowerCase()
        ) {
          if (user.balance >= Number(value)) {
            let now = dayjs();
            let newItem: Expense = {
              value: -Number(value),
              date: now.format("YYYY-MM-DD"),
              description: "Money transfer.",
              accounted: false,
            };
            balance = true;
            user.statement.push(newItem);
          } else {
            throw new Error(
              "You can't schedule a transfer with a higher value than your statement."
            );
          }
        }
      });
      users.map((user) => {
        if (
          user.cpf === recipientCpf &&
          user.name.toLowerCase() === recipientName.toLowerCase()
        ) {
          let now = dayjs();
          let newItem: Expense = {
            value: Number(value),
            date: now.format("YYYY-MM-DD"),
            description: "Money transfer.",
            accounted: false,
          };
          user.statement.push(newItem);
        }
      });
      if (!balance) {
        throw new Error("Check your parameters. User not found.");
      } else {
        res.status(200).send("Transfered successfully.");
      }
    }
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!");
});

app.listen(3003, () => {
  console.log("Server is running at port 3003");
});
