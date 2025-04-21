 
 var CalculatorPage = require("CalculatorPage").CalculatorPage;
 var CalculatorUtils = require("CalculatorUtils")

  function DadoQueACalculadoraEstaAberta() {
    var aberta = CalculatorUtils.abrirCalculadora();
    if (!aberta) {
        Log.Error("Falha ao abrir a calculadora.");
    }
}

  function QuandoEuRealizarAOperacao(valor1, operador, valor2) {
    CalculatorPage.clicar(valor1);
    CalculatorPage.clicar(operador);
    CalculatorPage.clicar(valor2);
    CalculatorPage.clicar("=");
  }

  function EntaoOResultadoDeveSerEsperado(resultadoEsperado) {
    var resultado = CalculatorPage.obterResultado();
    if (resultado != resultadoEsperado) {
      Log.Error("Resultado incorreto. Esperado: " + resultadoEsperado + ", Obtido: " + resultado);
    } else {
      Log.Message("Resultado correto: " + resultado);
    }
  }