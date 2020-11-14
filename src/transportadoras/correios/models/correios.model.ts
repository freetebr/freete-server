import freeteConfig from "../../../../freete.config";

export class CorreiosConfiguração {
  public readonly transportadora = freeteConfig.transportadoras.correios.nome;

  constructor(
    public readonly mãoPrópria: boolean,
    public readonly avisoRecebimento: boolean,
    public readonly códigoServiço: string,
    public readonly códigoEmpresa: string,
    public readonly senha: string,
    public readonly modo: string,
  ) {}
}
