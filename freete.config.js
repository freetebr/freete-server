module.exports =  {
  transportadoras: {
    correios: {
      nome: 'CORREIOS',
      codigo: "",
      senha: "",
      avisoRecebimento: false,
      maoPropria: false,
      modos: {
        sedex: {
          nome: 'SEDEX',
          habilitado: true,
          codigo: "04014",
        },
        pac: {
          nome: 'PAC',
          habilitado: true,
          codigo: "04510",
        },
      },
    },
    jadlog: {},
    braspress: {
      nome: 'BRASPRESS',
      token: "Y2xpZW50ZTpjbGllbnRl",
      modos: {
        aereo: {
          nome: 'AEREO',
          habilitado: true,
          modal: "A",
          tipo: "1",
        },
        rodoviario: {
          nome: 'RODOVIARIO',
          habilitado: true,
          modal: "R",
          tipo: "1",
        },
      },
    },
    jamef: {
      nome: 'JAMEF',
      usuario: 'jameff',
      modos: {
        aereo: {
          nome: 'AEREO',
          habilitado: false,
          tipo: '2',
          segmento: '000004'
        },
        rodoviario: {
          nome: 'RODOVIARIO',
          habilitado: false,
          tipo: '1',
          segmento: '000004'
        }
      }
    },
  },
};
