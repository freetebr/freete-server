import { Service } from "typedi";
import {
  TokenTransportadora,
  Transportadora,
} from "../../core/interfaces/transportadora.interface";
import {
  RespostaCotação,
  SolicitaçãoCotação,
} from "../../core/models/cotação.model";
import { Braspress } from "./braspress";
import { BraspressConfiguração } from "./models/braspress.model";
import config from "../../../freete.config";

@Service({ id: TokenTransportadora, multiple: true })
export class BraspressAereo implements Transportadora {
  constructor(private braspress: Braspress) {}

  async cotar(solicitação: SolicitaçãoCotação): Promise<RespostaCotação> {
    return await this.braspress.cotar(
      solicitação,
      new BraspressConfiguração(
        config.transportadoras.braspress.modos.aereo.modal,
        config.transportadoras.braspress.token,
        config.transportadoras.braspress.modos.aereo.tipo,
        config.transportadoras.braspress.modos.aereo.nome,
      )
    );
  }

  get habilitada(): boolean {
    return config.transportadoras.braspress.modos.aereo.habilitado;
  }
}
