import { IsDecimal, isDecimal, IsNumber, IsPositive, MaxLength, MinLength } from "class-validator";

export class SolicitaçãoCotação {
  @MaxLength(8)
  public cepOrigem: string;

  @MaxLength(8)
  public cepDestino: string;

  @IsPositive()
  public altura: number;

  @IsPositive()
  public largura: number;

  @IsPositive()
  public comprimento: number;

  @IsPositive()
  public peso: number;

  @IsPositive()
  public valor: number;

  @MinLength(11)
  @MaxLength(16)
  public remetente: string;

  @MinLength(11)
  @MaxLength(16)
  public destinatario: string;
}

export class RespostaCotação {
  constructor(
    public valor: number,
    public prazo: Date,
    public transportadora: string,
    public modo: string
  ) {}
}
