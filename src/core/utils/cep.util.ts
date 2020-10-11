import Axios from "axios";

export const consultarCep = async (cep: string) => {
  const resposta = await Axios.get(`https://viacep.com.br/ws/${cep}/json/`);

  return {
    UF: resposta.data.uf.toUpperCase(),
    cidade: resposta.data.localidade.toUpperCase(),
  };
};
