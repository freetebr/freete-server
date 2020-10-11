const filiais = [
  {
    sigla: "AJU",
    cidade: "Aracaju",
    UF: "SE",
    codigo: "31",
    faixa: ["49000001", "49099999"],
  },
  {
    sigla: "BAR",
    cidade: "Barueri",
    UF: "SP",
    codigo: "19",
    faixa: ["06400001", "06499999"],
  },
  {
    sigla: "BAU",
    cidade: "Bauru",
    UF: "SP",
    codigo: "16",
    faixa: ["17000001", "17119999"],
  },
  {
    sigla: "BHZ",
    cidade: "Belo Horizonte",
    UF: "MG",
    codigo: "02",
    faixa: ["30000001", "31999999"],
  },
  {
    sigla: "BNU",
    cidade: "Blumenau",
    UF: "SC",
    codigo: "09",
    faixa: ["89000001", "89079999"],
  },
  {
    sigla: "BSB",
    cidade: "Brasília",
    UF: "DF",
    codigo: "28",
    faixa: ["70000001", "73699999"],
  },
  {
    sigla: "CCM",
    cidade: "Criciúma",
    UF: "SC",
    codigo: "26",
    faixa: ["88800001", "88819999"],
  },
  {
    sigla: "CPQ",
    cidade: "Campinas",
    UF: "SP",
    codigo: "03",
    faixa: ["13000001", "13139999"],
  },
  {
    sigla: "CXJ",
    cidade: "Caxias do Sul",
    UF: "RS",
    codigo: "22",
    faixa: ["95000001", "95149999"],
  },
  {
    sigla: "CWB",
    cidade: "Curitiba",
    UF: "PR",
    codigo: "04",
    faixa: ["80000001", "82999999"],
  },
  {
    sigla: "DIV",
    cidade: "Divinópolis",
    UF: "MG",
    codigo: "38",
    faixa: ["35500001", "35516999"],
  },
  {
    sigla: "FES",
    cidade: "Feira de Santana",
    UF: "BA",
    codigo: "34",
    faixa: ["40000000", "48999999"],
  },
  {
    sigla: "FLN",
    cidade: "Florianópolis",
    UF: "SC",
    codigo: "11",
    faixa: ["88000001", "88099999"],
  },
  {
    sigla: "FOR",
    cidade: "Fortaleza",
    UF: "CE",
    codigo: "32",
    faixa: ["60000001", "61599999"],
  },
  {
    sigla: "GYN",
    cidade: "Goiânia",
    UF: "GO",
    codigo: "24",
    faixa: ["74000001", "74899999"],
  },
  {
    sigla: "JPA",
    cidade: "João Pessoa",
    UF: "PB",
    codigo: "36",
    faixa: ["58000001", "58099999"],
  },
  {
    sigla: "JDF",
    cidade: "Juiz de Fora",
    UF: "MG",
    codigo: "23",
    faixa: ["36000001", "36107999"],
  },
  {
    sigla: "JOI",
    cidade: "Joinville",
    UF: "SC",
    codigo: "08",
    faixa: ["88000000", "89999999"],
  },
  {
    sigla: "LDB",
    cidade: "Londrina",
    UF: "PR",
    codigo: "10",
    faixa: ["86000001", "86124999"],
  },
  {
    sigla: "MAO",
    cidade: "Manaus",
    UF: "AM",
    codigo: "25",
    faixa: ["69000001", "69099999"],
  },
  {
    sigla: "MCZ",
    cidade: "Maceió",
    UF: "AL",
    codigo: "33",
    faixa: ["57000000", "57999999"],
  },
  {
    sigla: "MGF",
    cidade: "Maringá",
    UF: "PR",
    codigo: "12",
    faixa: ["87000001", "87109999"],
  },
  {
    sigla: "POA",
    cidade: "Porto Alegre",
    UF: "RS",
    codigo: "05",
    faixa: ["90000000", "99999999"],
  },
  {
    sigla: "PSA",
    cidade: "Pouso Alegre",
    UF: "MG",
    codigo: "27",
    faixa: ["37550001", "37562999"],
  },
  {
    sigla: "RAO",
    cidade: "Ribeirão Preto",
    UF: "SP",
    codigo: "18",
    faixa: ["14000001", "14114999"],
  },
  {
    sigla: "REC",
    cidade: "Recife",
    UF: "PE",
    codigo: "30",
    faixa: ["50000001", "52999999"],
  },
  {
    sigla: "RIO",
    cidade: "Rio de Janeiro",
    UF: "RJ",
    codigo: "06",
    faixa: ["20000001", "23799999"],
  },
  {
    sigla: "SAO",
    cidade: "São Paulo",
    UF: "SP",
    codigo: "07",
    faixa: ["01000001", "08499999"],
  },
  {
    sigla: "SJK",
    cidade: "São José dos Campos",
    UF: "SP",
    codigo: "21",
    faixa: ["12200001", "12249999"],
  },
  {
    sigla: "SJP",
    cidade: "São José do Rio Preto",
    UF: "SP",
    codigo: "20",
    faixa: ["15000001", "15104999"],
  },
  {
    sigla: "SSA",
    cidade: "Salvador",
    UF: "BA",
    codigo: "29",
    faixa: ["40000001", "42599999"],
  },
  {
    sigla: "UDI",
    cidade: "Uberlândia",
    UF: "MG",
    codigo: "17",
    faixa: ["30000000", "39999999"],
  },
  {
    sigla: "VDC",
    cidade: "Vitória da Conquista",
    UF: "BA",
    codigo: "39",
    faixa: ["45000001", "45119999"],
  },
  {
    sigla: "VIX",
    cidade: "Vitória",
    UF: "ES",
    codigo: "14",
    faixa: ["29000001", "29099999"],
  },
];

export const filialMaisPróxima = (cepOrigem: string) => {
  const numCepOrigem = Number(cepOrigem);
  let filialMaisPróxima;

  const filialExata = filiais.find((filial) => {
    return (
      numCepOrigem >= Number(filial.faixa[0]) &&
      numCepOrigem <= Number(filial.faixa[1])
    );
  });

  filiais.reduce((val, filial) => {
    const resultado = Math.abs(Number(filial.faixa[1]) - numCepOrigem);
    if (resultado < val) {
      filialMaisPróxima = filial;
      return resultado;
    } else {
      return val;
    }
  }, Number.MAX_SAFE_INTEGER);

  return (filialExata || filialMaisPróxima).codigo;
};
