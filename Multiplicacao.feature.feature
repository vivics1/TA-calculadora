# language: pt

Funcionalidade: Multiplicação

  Cenário: Multiplicar 3 * 4
    Dado que a calculadora está aberta
    Quando eu realizar a operação "3" "*" "4"
    Então o resultado exibido deve ser "12"
