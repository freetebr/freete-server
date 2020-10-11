import { Token } from "typedi";
import { RespostaCotação, SolicitaçãoCotação } from "../models/cotação.model";

export interface Transportadora {
  cotar(solicitação: SolicitaçãoCotação): Promise<RespostaCotação>;
  habilitada: boolean;
}

export const TokenTransportadora = new Token<Transportadora>("transportadoras");
