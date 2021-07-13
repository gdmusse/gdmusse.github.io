import express from 'express'
import cors from 'cors'
import { AddressInfo } from "net";

const app = express()

app.use(express.json())
app.use(cors())

const server = app.listen( 3003, () =>{
    if (server){
        const adress = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${adress.port}`);
    }else{
        console.error(`Failure upon starting server.`)
    }
})

export default app