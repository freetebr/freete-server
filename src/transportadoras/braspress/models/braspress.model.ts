import freeteConfig from "../../../../freete.config";

export class BraspressConfiguração {
  public readonly transportadora = freeteConfig.transportadoras.braspress.nome;
  
  constructor(
    public readonly modal: string,
    public readonly token: string,
    public readonly tipo: string,
    public readonly modo: string,
  ) {}
}
