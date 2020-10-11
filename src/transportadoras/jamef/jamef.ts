import Axios from "axios";
import { addDays, format, parse } from "date-fns";
import { Service } from "typedi";
import {
  RespostaCotação,
  SolicitaçãoCotação,
} from "../../core/models/cotação.model";
import { m3 } from "../../core/utils/medidas.util";
import { filialMaisPróxima } from "./utils/filiais.util";
import { JamefConfiguração } from "./models/jamef.model";
import { consultarCep } from "../../core/utils/cep.util";
import { paraPonto } from "../../core/utils/separadores.util";

@Service()
export class Jamef {
  async cotar(
    solicitação: SolicitaçãoCotação,
    configuração: JamefConfiguração
  ): Promise<RespostaCotação> {
    const url = await this.criarURL(solicitação, configuração);

    const resposta = await Axios.post(url);

    return new RespostaCotação(
      parseFloat(paraPonto(resposta.data.valor)),
      parse(resposta.data.previsao_entrega, "dd/MM/yyyy", new Date()),
      configuração.transportadora,
      configuração.modo
    );
  }

  private async criarURL(
    solicitação: SolicitaçãoCotação,
    configuração: JamefConfiguração
  ): Promise<string> {
    const urlBase = "http://www.jamef.com.br/frete/rest/v1/";
    const cepCompletoOrigem = await consultarCep(solicitação.cepOrigem);

    const params = {
      tipo: configuração.tipo,
      remetente: solicitação.remetente,
      cidadeOrigem: cepCompletoOrigem.cidade,
      estadoOrigem: cepCompletoOrigem.UF,
      segmento: configuração.segmento,
      peso: solicitação.peso,
      valor: solicitação.valor,
      m3: m3(
        1,
        solicitação.altura,
        solicitação.largura,
        solicitação.comprimento
      ),
      cepDestino: solicitação.cepDestino,
      códigoFilial: filialMaisPróxima(solicitação.cepOrigem),
      data: "30/10/2018",
      // data: format(new Date(), "dd/MM/yyyy"),
      usuário: configuração.usuario,
    };

    return (
      urlBase +
      Object.keys(params)
        .map((key) => params[key])
        .join("/")
    );
  }
}
