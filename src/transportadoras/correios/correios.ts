import Axios from "axios";
import { addDays } from "date-fns";
import { Service } from "typedi";
import {
  RespostaCotação,
  SolicitaçãoCotação,
} from "../../core/models/cotação.model";
import { CorreiosConfiguração } from "./models/correios.model";
import { toJson } from "xml2json";
import { paraPonto, paraVírgula } from "../../core/utils/separadores.util";
import { cm } from "../../core/utils/medidas.util";

@Service()
export class Correios {
  async cotar(
    solicitação: SolicitaçãoCotação,
    configuração: CorreiosConfiguração
  ): Promise<RespostaCotação> {
    const params = this.construirParâmetros(solicitação, configuração);

    const resposta = await Axios.get(
      "http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx",
      { params }
    );

    const dados = JSON.parse(toJson(resposta.data));

    return new RespostaCotação(
      parseFloat(paraPonto(dados.Servicos.cServico.Valor)),
      addDays(new Date(), Number(dados.Servicos.cServico.PrazoEntrega)),
      configuração.transportadora,
      configuração.modo
    );
  }

  private construirParâmetros(
    solicitação: SolicitaçãoCotação,
    configuração: CorreiosConfiguração
  ): any {
    const parameters = {};

    parameters["nVlDiametro"] = 0;
    parameters["StrRetorno"] = "xml";
    parameters["nVlValorDeclarado"] = paraVírgula(solicitação.valor);
    parameters["sCepOrigem"] = solicitação.cepOrigem;
    parameters["sCepDestino"] = solicitação.cepDestino;
    parameters["nVlPeso"] = paraVírgula(solicitação.peso);
    parameters["nVlComprimento"] = paraVírgula(cm(solicitação.comprimento));
    parameters["nVlAltura"] = paraVírgula(cm(solicitação.altura));
    parameters["nVlLargura"] = paraVírgula(cm(solicitação.largura));
    parameters["sCdMaoPropria"] = this.paraBoleanoCorreios(
      configuração.mãoPrópria
    );
    parameters["sCdAvisoRecebimento"] = this.paraBoleanoCorreios(
      configuração.avisoRecebimento
    );
    parameters["nCdServico"] = configuração.códigoServiço;

    if (configuração.códigoEmpresa)
      parameters["nCdEmpresa"] = configuração.códigoEmpresa;

    if (configuração.senha) parameters["sDsSenha"] = configuração.senha;

    return parameters;
  }

  paraBoleanoCorreios = (boleano: boolean) => {
    return boleano ? "S" : "N";
  };
}
