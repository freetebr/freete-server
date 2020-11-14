import freeteConfig from "../../../../freete.config";

export class JamefConfiguração {
  public readonly transportadora = freeteConfig.transportadoras.jamef.nome;

  constructor(
    public readonly usuario: string,
    public readonly tipo: string,
    public readonly segmento: string,
    public readonly modo: string,
  ) {}
}
