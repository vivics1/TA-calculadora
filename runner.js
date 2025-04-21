var steps = require("StepDefinitions");

function ExecutarTesteDeSoma() {
  DadoQueACalculadoraEstaAberta();
  QuandoEuRealizarAOperacao("1", "+", "2");
  EntaoOResultadoDeveSerEsperado("3");
}

function ExecutarTesteDeSubtracao() {
  DadoQueACalculadoraEstaAberta();
  QuandoEuRealizarAOperacao("5", "-", "3");
  EntaoOResultadoDeveSerEsperado("2");
}

function ExecutarTesteDeMultiplicacao() {
  DadoQueACalculadoraEstaAberta();
  QuandoEuRealizarAOperacao("3", "*", "4");
  EntaoOResultadoDeveSerEsperado("12");
}

function ExecutarTesteDeDivisao() {
  DadoQueACalculadoraEstaAberta();
  QuandoEuRealizarAOperacao("8", "/", "2");
  EntaoOResultadoDeveSerEsperado("4");
}