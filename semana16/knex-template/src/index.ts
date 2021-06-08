import { Request, Response } from "express";
import { isBuffer } from "util";
import app from "./app";
import connection from "./connection";

/* const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)
  
      return result[0][0]
  }
  
  console.log( getActorById("001") ) */

app.get("/", (req, res) => res.send("Hello, world!"));

/* app.post("/actors", async (req: Request, res: Response) => {
  try {
    await connection.raw(`
    INSERT INTO Actor (name,birth_date,gender,salary)
    VALUES (
        "${req.body.name}",
        "${req.body.birthDate}",
        "${req.body.gender}",
        ${req.body.salary}
    );
    `);
    res.status(201).send("Actor created!");
  } catch (err) {
    console.log(err.message);
    if (err.sqlMessage.includes("gender")) {
      res.send("Invalid gender. Valid values are female and male");
    }
    res.status(500).send("Error");
  }
}); */

/* app.get("/actors", async (req: Request, res: Response) => {
  try {
    const result = await connection.raw(`        
    SELECT * FROM Actor     
    `);
    res.send(result[0]);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("An unexpected error occurred");
  }
}); */

/* app.get("/actors", async (req: Request, res: Response) => {
  try {
    const result = await connection("Actor")
    .count()
    .where({gender : req.query.gender})
    res.status(200).send(result[0]);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
 */
/* app.get("/actors/:name", async (req:Request, res:Response) => {
    try {
        const result = await connection.raw(`
        SELECT * from Actor WHERE name LIKE "%${req.params.name}%";
        `
        );
        res.status(200).send(result[0])
    }catch (error) {
        res.status(400).send(error.message);
      }
}) */
/* 
app.get("/actors/:gender", async (req:Request, res:Response) => {
    try {
        const result = await connection.raw(`
        SELECT Count(*) from Actor 
        WHERE gender = "${req.params.gender}";
        `
        );
        res.status(200).send(result[0] + ${req.params.gender})
    }catch (error) {
        res.status(400).send(error.message);
      }
}) */
/* 
app.get("/actors/:gender", async (req: Request, res: Response) => {
  try {
    const result = await connection("Actor")
      .avg("salary")
      .where({ gender: req.params.gender });

    res.status(200).send(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("error");
  }
});
 */
app.delete("/actors/:id", async (req: Request, res: Response) => {
  try {
    await connection("Actor").del().where({ id: req.params.id });

    res.status(200).send("Actor deleted.");
  } catch (error) {
    console.log(error.message);
    res.status(500).send("error");
  }
});
