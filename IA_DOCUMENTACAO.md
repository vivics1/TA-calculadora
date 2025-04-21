
### 📄 IA_DOCUMENTACAO.md

FERRAMENTA: ChatGPT  
VERSÃO: GPT-4  
USO DE IA NO PROJETO:
O projeto de automação da Calculadora do Windows com TestComplete e JavaScript contou com o apoio da inteligência artificial ChatGPT (GPT-4), que auxiliou em várias etapas do desenvolvimento, conforme detalhado a seguir.

---
1. Estrutura Inicial do Projeto (Prompt)

PROMPT: 
> “Me ajude a continuar este projeto (base) de automação da Calculadora do Windows com TestComplete usando JavaScript, padrão POM, cenários BDD com Gherkin, e publicar no GitHub.”

RESULTADO:
O ChatGPT sugeriu a estrutura com arquivos separados para:
- `CalculatorPage.js` (métodos de interação)
- `CalculatorUtils.js` (funções auxiliares)
- `StepDefinitions.js` (integração BDD)
- Arquivos `.feature` (Gherkin para operações básicas)

---

2. Mapeamento com NameMapping (Prompt)

PROMPT:  
> “Estou usando o Object Spy no TestComplete. Como organizar o NameMapping e criar um `ElementsMap.js` com os containers e botões da Calculadora?”

RESULTADO: 
ChatGPT ajudou a organizar o mapeamento visualmente e dividiu as responsabilidades:
- Separou elementos em containers como `painelNumerico` e `botoesOperacoes`.
- Criou referência única para `Aliases.Microsoft_WindowsCalculator...`.

---

3. Escrita de Cenários BDD com Gherkin (Prompt)**

PROMPT:  
> “Escreva cenários Gherkin para operações de adição, subtração, multiplicação e divisão na Calculadora do Windows.”

RESULTADO:
Gerou os seguintes cenários .feature:
- `soma.feature`
- `subtracao.feature`
- `multiplicacao.feature`
- `divisao.feature`

Cada um no formato:

```gherkin
Funcionalidade: Operações na Calculadora do Windows

Cenário: Realizar adição de dois números
  Dado que o usuário abre a Calculadora
  Quando o usuário insere o número 1
  E o usuário pressiona o botão de adição
  E o usuário insere o número 2
  E o usuário pressiona o botão de igual
  Então o resultado exibido deve ser 3
```

---
4. Solução de Problemas com UI Automation (Prompt)

PROMPT:
> “TestComplete não está interagindo com a Calculadora. Como ativar o suporte a UI Automation?”

RESULTADO:
ChatGPT auxiliou a:
- Ativar a opção de UI Automation nas configurações do projeto.
- Garantir que o NameMapping estivesse apontando corretamente para o processo `Microsoft.WindowsCalculator`.

---

Conclusão

A IA foi essencial para:
- Ajudar com a estrutura de automação.
- Escrever os cenários BDD.
- Entender o funcionamento do TestComplete.
- Resolução de logs.


O projeto final reflete fielmente as orientações aplicadas com apoio da IA.
