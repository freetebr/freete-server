import { Service } from "typedi";
import {
  TokenTransportadora,
  Transportadora,
} from "../../core/interfaces/transportadora.interface";
import {
  RespostaCotação,
  SolicitaçãoCotação,
} from "../../core/models/cotação.model";
import { Jamef } from "./jamef";
import config from "../../../freete.config";
import { JamefConfiguração } from "./models/jamef.model";

@Service({ id: TokenTransportadora, multiple: true })
export class JamefRodoviário implements Transportadora {
  constructor(private jamef: Jamef) {}

  async cotar(solicitação: SolicitaçãoCotação): Promise<RespostaCotação> {
    return await this.jamef.cotar(
      solicitação,
      new JamefConfiguração(
        config.transportadoras.jamef.usuario,
        config.transportadoras.jamef.modos.rodoviario.tipo,
        config.transportadoras.jamef.modos.rodoviario.segmento,
        config.transportadoras.jamef.modos.rodoviario.nome,
      )
    );
  }

  get habilitada(): boolean {
    return config.transportadoras.jamef.modos.rodoviario.habilitado;
  }
}
