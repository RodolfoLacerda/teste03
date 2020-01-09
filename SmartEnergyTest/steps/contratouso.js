const { client } = require('nightwatch-api')
const { When, Then, Given, And } = require('cucumber')

const contratouso = client.page.contratouso();

Given('que acesso a tela de contrato de uso', function () {

  return contratouso.with()
});


Given('informo o tipo de contrato {string}', function (contrato) {


  switch (contrato) {
    case 'Distribuição':
      contratouso.informarTipoContratoDis()
      break;
    case 'Transmissão':
      contratouso.informarTipoContratoTrans()
      break;


  }

});

Given('informo uma empresa {string}', function (empresa) {


  return contratouso.informarEmpresa(empresa)

});

Given('informo um agente {string}', function (agente) {


  return contratouso.informarAgente(agente)

});

Given('informo o ponto de conexao {string}', function (ponto) {


  return contratouso.informarPontoCo(ponto)

});

Given('informo o inicio do posto tarifario ponta {string}', function (inicioPosto) {

  return contratouso.informarInicioPosto(inicioPosto);
});

Given('infomo o fim do posto tarifario ponta {string}', function (fimPosto) {

  return contratouso.informarFimPosto(fimPosto);
});

Given('numero contrato de uso {string}', function (numeroContrato) {


  return contratouso.informarNumeroContrato(numeroContrato);
});

Given('informo a tensao nominal {string}', function (tensaoNominal) {


  return contratouso.informarTensaoNominal(tensaoNominal);
});

Given('informo o fator de potencia de referencia {string}', function (tensao) {

  return contratouso.informarfatorReferencia(tensao);
});

Given('informo a tolerancia de ultrapassagem {string}', function (ultrapassagem) {


  return contratouso.informartoleranciaUltrapassagem(ultrapassagem);
});

Given('informo o inicio do contrato {string}', function (inicioContrato) {


  return contratouso.informarinicioContrato(inicioContrato);
});

Given('informo o fim do contrato {string}', function (fimContrato) {


  return contratouso.informarfimContrato(fimContrato);
});

Given('informo a data inicio {string}', function (dataInicio) {


  return contratouso.informardataInicio(dataInicio);
});

Given('informo a data fim {string}', function (dataFim) {


  return contratouso.informardataFim(dataFim);
});

Given('informo o horario de inicio {string}', function (horarioInicio) {


  return contratouso.informarhoraInicio(horarioInicio);
});

Given('informo o horario fim {string}', function (horafim) {


  return contratouso.informarhoraFim(horafim)

});




When('informo o pn {string}', function (pn) {


  return contratouso.informarpn(pn)

});

When('and informo a instalacao {string}', function (instalacao) {


  return contratouso.informarinstalacao(instalacao)

});

When('informo o periodo de renovacao {string}', function (renovacao) {


  return contratouso.informarperiodo(renovacao)

});

When('informo a resolucao Aneel {string}', function (aneel) {


  return contratouso.informaranneel(aneel)

});

When('informo data de publicacao {string}', function (publica) {


  return contratouso.informardatapublicacao(publica)

});


When('informo modalidade tarifaria horaria {string}', function (horario) {


  return contratouso.informarModalidade(horario)
});

When('informo a data inicio da modalidade tarifaria {string}', function (datamodalidade) {


  return contratouso.informardataInicioModalidade(datamodalidade)


});


When('informo a data fim da modalidade tarifaria {string}', function (dataFimModalidade) {


  return contratouso.informardataFimModalidade(dataFimModalidade)

});

When('informo a musd unico  {string}', function (musdunico) {


  return contratouso.informarmusdunico(musdunico)

});

When('informo tarifa unica {string}', function (tarifaunica) {


  return contratouso.informartarifaunica(tarifaunica)

});

Then('solicito para salvar o contrato de uso', function () {


  return contratouso.salvarcontrato()

});


Then('o sistema salvar o contrato com sucesso {string}', function (mensagem) {


  return contratouso.confirmarcadastro(mensagem)
});

  When('adiciono o arquivo', function () {

    return contratouso.uploadArquivos()
  });

  Given('informo todos os dados', function (dataTable) {
    data = dataTable.hashes();
    
    data.map(valor => {
      return contratouso
      .informarContratoEmpresa(valor.contrato)
      .informarEmpresa(valor.empresa)
      .informarAgente(valor.agente)
      .informarPontoCo(valor.conexao)
      .informarInicioPosto(valor.iniciotarifario)
      .informarFimPosto(valor.fimtarifario)
      .informarNumeroContrato(valor.numero)
      .informarTensaoNominal(valor.tensao)
      .informarfatorReferencia(valor.referencia)
      .informartoleranciaUltrapassagem(valor.ultrapassagem)
      .informarinicioContrato(valor.iniciocontrato)
      .informarfimContrato(valor.fimcontrato)
      .informardataInicio(valor.datainicio)
      .informardataFim(valor.datafim)
      .informarhoraInicio(valor.iniciohora)
      .informarhoraFim(valor.fimhora)
      .proximo()
      
    })
  });

  When('solicito proximo', function () {
    return contratouso
    .waitForElementVisible('@proximo')
    
  });

  When('informo os dados para cadastro', function (dataTable) {
    data = dataTable.hashes();
    
    data.map(valor => {
      return contratouso
      .informarpn(valor.pn)
      .informarinstalacao(valor.instalacao)
      .informarperiodo(valor.renovacao)
      .informaranneel(valor.resolucao)
      .informardatapublicacao(valor.publicacao)
      .informarModalidade(valor.tarifariahoraria)
      .informardataInicioModalidade(valor.tarifamodalidadeinicio)
      .informardataFimModalidade(valor.tarifamodalidadefim)
      .informarmusdunico(valor.musd)
      .informartarifaunica(valor.tarifaunica)
      .proximo()

    
      
    })
  });