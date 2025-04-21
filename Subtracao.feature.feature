# language: pt

Funcionalidade: Soma

  Cenário: Somar 1 + 2
    Dado que a calculadora está aberta
    Quando eu realizar a operação "1" "+" "2"
    Então o resultado exibido deve ser "3"
