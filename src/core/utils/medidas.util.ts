export const Kg = (g: number) => {
  return g * 1000;
};

export const g = (Kg: number) => {
  return Kg / 1000;
};

export const m = (cm: number) => {
  return cm * 100;
};

export const cm = (m: number) => {
  return m / 100;
};

export const m3 = (
  quantidade: number,
  altura: number,
  largura: number,
  comprimento: number
) => {
  return quantidade * altura * largura * comprimento;
};
