import Axios from "axios";
import { addDays } from "date-fns";
import { Service } from "typedi";
import {
  RespostaCotação,
  SolicitaçãoCotação,
} from "../../core/models/cotação.model";
import { BraspressConfiguração } from "./models/braspress.model";

@Service()
export class Braspress {
  async cotar(
    solicitação: SolicitaçãoCotação,
    configuração: BraspressConfiguração
  ): Promise<RespostaCotação> {
    const dados = this.construirDados(solicitação, configuração);

    const resposta = await Axios.post(
      "https://api.braspress.com/v1/cotacao/calcular/json",
      dados,
      {
        headers: { Authorization: `Basic ${configuração.token}` },
      }
    );

    return new RespostaCotação(
      parseFloat(resposta.data.totalFrete),
      addDays(new Date(), resposta.data.prazo),
      configuração.transportadora,
      configuração.modo
    );
  }

  private construirDados(
    solicitação: SolicitaçãoCotação,
    configuração: BraspressConfiguração
  ): any {
    return {
      cnpjRemetente: solicitação.remetente,
      cnpjDestinatario: solicitação.destinatario,
      tipoFrete: configuração.tipo,
      vlrMercadoria: solicitação.valor,
      modal: configuração.modal,
      cepOrigem: solicitação.cepOrigem,
      cepDestino: solicitação.cepDestino,
      peso: solicitação.peso,
      volumes: 1,
      cubagem: [
        {
          comprimento: solicitação.comprimento,
          volumes: 1,
          largura: solicitação.largura,
          altura: solicitação.altura,
        },
      ],
    };
  }
}
