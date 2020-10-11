import { Service } from "typedi";
import {
  TokenTransportadora,
  Transportadora,
} from "../../core/interfaces/transportadora.interface";
import {
  RespostaCotação,
  SolicitaçãoCotação,
} from "../../core/models/cotação.model";
import { Correios } from "./correios";

import config from "../../../freete.config";
import { CorreiosConfiguração } from "./models/correios.model";

@Service({ id: TokenTransportadora, multiple: true })
export class CorreiosPac implements Transportadora {
  constructor(private correios: Correios) {}

  async cotar(solicitação: SolicitaçãoCotação): Promise<RespostaCotação> {
    return await this.correios.cotar(
      solicitação,
      new CorreiosConfiguração(
        config.transportadoras.correios.maoPropria,
        config.transportadoras.correios.avisoRecebimento,
        config.transportadoras.correios.modos.pac.codigo,
        config.transportadoras.correios.codigo,
        config.transportadoras.correios.senha,
        'PAC'
      )
    );
  }

  get habilitada(): boolean {
    return config.transportadoras.correios.modos.pac.habilitado;
  }
}
