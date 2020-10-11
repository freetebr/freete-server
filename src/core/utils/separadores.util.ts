enum Separador {
  PONTO = ".",
  VÍRGULA = ",",
}

export const paraPonto = (medida: string | number) => {
  return medida.toString().replace(Separador.VÍRGULA, Separador.PONTO);
};

export const paraVírgula = (medida: string | number) => {
  return medida.toString().replace(Separador.PONTO, Separador.VÍRGULA);
};
