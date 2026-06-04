function pedir() {
    const valor = prompt("Digite um valor de 1 a 4");

    switch(Number(valor)) {
        case 1:
            alert("Você escolheu 1 = suco");
            break;

        case 2: 
            alert("Você escolheu 2 = agua gelada");
            break;
        case 3:
         alert("Você escolheu 3 = sorvete");
         break;

         case 4:
            alert("Você chamou o garçom!");

         break;
         default:
            alert("Escolha a opção de 1 a 4");
            break;

    }
}