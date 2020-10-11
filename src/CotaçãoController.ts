import { Controller, Get, QueryParams } from "routing-controllers";
import Container, { Service } from "typedi";
import {
  TokenTransportadora,
  Transportadora,
} from "./core/interfaces/transportadora.interface";
import {
  RespostaCotação,
  SolicitaçãoCotação,
} from "./core/models/cotação.model";

@Controller("/cotacao")
@Service()
export class CotaçãoController {
  transportadoras: Transportadora[] = Container.getMany(TokenTransportadora);

  @Get()
  public async cotarTransportadoras(
    @QueryParams() solicitação: SolicitaçãoCotação
  ): Promise<RespostaCotação[]> {
    const respostas = [];

    const transportadorasHabilitadas = this.transportadoras.filter(
      (transportadora) => transportadora.habilitada
    );

    for (const transportadora of transportadorasHabilitadas) {
      try {
        const resposta = await transportadora.cotar(solicitação);
        respostas.push(resposta);
      } catch (error) {
        console.log(error);
      }
    }

    return respostas;
  }
}
