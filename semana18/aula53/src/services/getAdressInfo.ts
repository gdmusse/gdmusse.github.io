import axios from "axios";
import { adressInfo } from "../types";

export const getAdressInfo = async (
  cep: string
): Promise<adressInfo > => {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    const address: adressInfo = {
      street: response.data.logradouro,
      neighborhood: response.data.bairro,
      city: response.data.localidade,
      state: response.data.uf
    };

    return address;
  } catch (err){
    throw new Error(err.message)
  }
};
