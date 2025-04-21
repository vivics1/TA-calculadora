
function abrirCalculadora() {
  try {
    var caminhoCalc = aqEnvironment.GetEnvironmentVariable("windir") + "\\System32\\calc.exe";
    WshShell.Run(caminhoCalc);

    var processo = Sys.WaitProcess("Microsoft.WindowsCalculator", 10000);
    if (!processo.Exists) {
      Log.Error("O processo 'Microsoft.WindowsCalculator' não foi encontrado.");
      return false;
    }

    if (!Aliases.Microsoft_WindowsCalculator.WaitAliasChild("Calculadora", 10000).Exists) {
      Log.Error("Alias da calculadora não disponível.");
      return false;
    }

    Log.Message("Calculadora aberta e pronta para uso.");
    return true;

  } catch (e) {
    Log.Error("Erro ao abrir a calculadora: " + e.message);
    return false;
  }
}
 module.exports = {
  abrirCalculadora: abrirCalculadora
};