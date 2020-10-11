export class JamefConfiguração {
  public readonly transportadora = 'JAMEF';

  constructor(
    public readonly usuario: string,
    public readonly tipo: string,
    public readonly segmento: string,
    public readonly modo: string,
  ) {}
}
