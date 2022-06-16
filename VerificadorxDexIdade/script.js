function verificar() {
  // O nome da função que eu desejo executar quando eu clico no botao ('X')
  var data = new Date(); //Data, hora, ano e mês do sistema.
  var ano = data.getFullYear(); //Selecionando o ano atual.
  var formularioano = document.getElementById("ano"); //Selecionando onde o cliente irá colocar o seu ano de nascimento.
  var resultado = document.getElementById("resultado"); //Selecionando a div, onde vai aparecer a resposta da idade.
  var resultadotexto = document.getElementById("resultadotexto");
  if (
    //Condição
    formularioano.value.length == 0 || // Se o  cliente não digitou nada ou
    Number(formularioano.value) > ano || // O ano for maior que o ano atual ou
    formularioano.value.length != 4 // O número de caracteres for diferente do normal
  ) {
    window.alert("Verifique os dados e tente novamente!"); //Uma mensagem de erro aparecerá
  } else {
    //Se não, segue para o bloco debaixo.
    var sexo = document.getElementsByName("sexo"); // Selecionando o botão que marca a opção do sexo.
    var idade = ano - Number(formularioano.value); // Subtraindo o ano atual com o ano que o usuário colocou, para saber sua idade.
    var genero = ""; // Variavel criada  para guardar o sexo que o usuário selecionou
    var foto;
    if (document.getElementById("foto") != null) {//
      foto = document.getElementById("foto");
    } else {
      foto = document.createElement("img");
      foto.setAttribute("id", "foto");
    }
    if (sexo[0].checked) {
      //Então vem outra condição. Se o usuário marcar a primeira opção(masculino)
      genero = "Homem"; // O genero será Homem
      if (idade >= 0 && idade < 12) {
        //E a condição dentro dessa é: se a idade foir maior do que 0 e menor que 12, então é uma criança

        foto.setAttribute("src", "homemcrianca.png"); //E mostrará a foto de uma criança
      } else if (idade < 21) {
        //Se não, se: a idade for menor que 21 e acima da condição anterior,no caso 12 anos.

        foto.setAttribute("src", "homemjovem.png"); //A foto selecionada será de um jovem.
      } else if (idade < 55) {
        //Se Não, se:  a idade for menor de 55 anos e maior que 21.

        foto.setAttribute("src", "homemadulto.png"); //A foto será de um adulto.
      } else {
        //Se não

        foto.setAttribute("src", "homemidoso.png"); // A foto será de um idoso
      } //Fecha o bloco para vim outra condição
    } else if (sexo[1].checked) {
      // Se não, se: O sexo selecionado pelo usuário for a segunda opção (Femenino)
      genero = "Mulher"; //o genero será mulher
      if (idade >= 0 && idade < 12) {
        // E então é o mesmo procedimento acima.

        foto.setAttribute("src", "mulhercrianca.png");
      } else if (idade < 21) {
        foto.setAttribute("src", "mulherjovem.png");
      } else if (idade < 55) {
        foto.setAttribute("src", "mulheradulto.png");
      } else {
        foto.setAttribute("src", "mulheridosa.png");
      }
    }

    resultadotexto.innerHTML = `Detectamos ${genero} com ${idade} anos.`; // De acordo com as condições acima, Aqui vai uma mensagem dizendo o genero junto com a idade da pesso.
    resultado.style.textAlign = "center"; //Estou ajustando o texto para que apareça no centro.
    resultado.appendChild(foto); //E aqui estou adicionando a foto na tela.
  }
}
