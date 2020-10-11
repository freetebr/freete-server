module.exports =  {
  transportadoras: {
    correios: {
      codigo: "",
      senha: "",
      avisoRecebimento: false,
      maoPropria: false,
      modos: {
        sedex: {
          habilitado: false,
          codigo: "04014",
        },
        pac: {
          habilitado: false,
          codigo: "04510",
        },
      },
    },
    jadlog: {},
    braspress: {
      token: "Y2xpZW50ZTpjbGllbnRl",
      modos: {
        aereo: {
          habilitado: true,
          modal: "A",
          tipo: "1",
        },
        rodoviario: {
          habilitado: true,
          modal: "R",
          tipo: "1",
        },
      },
    },
    jamef: {
      usuario: 'jameff',
      modos: {
        aereo: {
          habilitado: false,
          tipo: '2',
          segmento: '000004'
        },
        rodoviario: {
          habilitado: false,
          tipo: '1',
          segmento: '000004'
        }
      }
    },
  },
};
