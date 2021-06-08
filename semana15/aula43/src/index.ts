import express, {Request, Response} from "express"

import cors from "cors"

import {countries, country} from "./countries"

import {AddressInfo} from "net"

const app = express()

app.use(express.json())
app.use(cors())


app.get("/countries/all", (req: Request, res: Response) => {
    const result = countries.map(country => ({
        id: country.id,
        name: country.name
    }))
    res.status(200).send(result)
})



app.get("/countries/search", (req: Request, res: Response) => {
    let result = countries

    if (req.query.name) {
        result = result.filter(
            country => country.name.includes(req.query.name as string)
        )
    }
    if (req.query.capital) {
        result = result.filter(
            country => country.capital.includes(req.query.capital as string)
        )
    }
    if (req.query.continent) {
        result = result.filter(
            country => country.continent.includes(req.query.continent as string)
        )
    }
    if(result.length) {
        res.status(200).send(result)

    } else {

        res.status(404).send("Not found")
    }
   
})

app.put("/countries/edit/:id", (req: Request, res: Response) => {
    const result = countries.findIndex(
      (country) => country.id === Number(req.params.id)
    );
    if(req.body.name){
        countries[result].name = req.body.name;
    }
    if(req.body.capital){
        countries[result].capital = req.body.capital;
    }

    if (req.body.name || req.body.capital) {
      res.status(200).send("Alterado!");
    } 
    else {
      res.status(404).send("Não alterado! Somente passar nome ou capital");
    }
  });

app.get("/countries/:id", (req: Request, res: Response) => {
    const result: country | undefined = countries.find(
        country => country.id === Number(req.params.id)
    )
    res.status(200).send(result)
})

const server = app.listen(process.env.PORT || 3003, () =>  {
    if(server) {
        const address = server.address() as AddressInfo;
        console.log("Server is running in http://localhost:3003");
    } else {
        console.log("Failure upon starting server.")
    }
    
});