function clicar(valor) {
  var mapa = {
    "+": "Mais",
    "-": "Menos",
    "*": "MultiplicarPor",
    "/": "DividirPor",
    "=": "Igual",
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8",
    "9": "9",
    "0": "0"
  };

  var nomeBotao = mapa[valor];
  if (!nomeBotao) {
    Log.Error("Botão não mapeado: " + valor);
    return;
  }

  var btn = ElementsMap.botao(nomeBotao);
  if (btn.Exists) {
    btn.Click();
  } else {
    Log.Error("Botão '" + nomeBotao + "' não encontrado no teclado.");
  }
}

function obterResultado() {
  return ElementsMap.resultado.WndText || ElementsMap.resultado.textContent || "";
}