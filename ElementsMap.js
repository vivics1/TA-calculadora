var ElementsMap = {
  get calculadora() {
    return Aliases.Microsoft_WindowsCalculator.Calculadora;
  },
  get painel() {
    return this.calculadora.NavView.LandmarkTarget.A_exib_o_0;
  },
  get resultado() {
    return this.painel.Object_found_es_padr_;
  },
  get teclado() {
    return this.painel.Teclado_num_rico;
  },
  botao: function(nome) {
    return this.teclado["btn" + nome];
  }
};