
const checkbox = document.getElementById("botaomudar");
const body = document.body;
const themeKey = "theme";  // a chave onde vamos guardar

// Função para aplicar tema baseado em um valor (“dark” ou “light”)
function aplicarTema(tema) {
  if (tema === "dark") {
    body.classList.add("darkmode");
    checkbox.checked = true;  // marca o checkbox
  } else {
    body.classList.remove("darkmode");
    checkbox.checked = false;
  }
}

// 1. Ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  const temaSalvo = localStorage.getItem(themeKey);
  if (temaSalvo) {
    aplicarTema(temaSalvo);
  }
});

// 2. Ao clicar no checkbox

function AlterarCor(){
   if (checkbox.checked) {
    aplicarTema("dark");
    localStorage.setItem(themeKey, "dark");
  } else {
    aplicarTema("light");
    localStorage.setItem(themeKey, "light");
  }
}

//-----------////-------------//-----------

document.addEventListener("DOMContentLoaded", function(){
  const conteudoDoElemento = document.getElementById("texto-apresentacao");
  const textoFixo = "Seja Bem Vindo ao meu site, Prazer em te conhecer! " ;
  const TextoQueAparece = " Eu me chamo Gabriel Henrique e você está no meu portfólio ";

  conteudoDoElemento.textContent = textoFixo;
  
  const tempoDigitar = 100;
  const tempoApagar = 70;
  const Pausa = 300;

  let indice = 0;
  let digitando = true;

  function Aparecer(){
    if(digitando === true){
      
      if(indice < TextoQueAparece.length){
        conteudoDoElemento.textContent = textoFixo + TextoQueAparece.substring(0, indice + 1);
        indice++;
        setTimeout(Aparecer, tempoDigitar);

      }
      else{
       digitando = false;
       setTimeout(Aparecer, Pausa);
      }
    }
    else{
      if (indice>0){
        conteudoDoElemento.textContent = textoFixo + TextoQueAparece.substring(0, indice - 1);
        indice--;
        setTimeout(Aparecer, tempoApagar)
      }
      else{
       digitando = true;
       setTimeout(Aparecer, tempoDigitar)
      }
    }
  }
  Aparecer();
})

function botaoFechar() {
  // Supondo que este checkbox interno seja o “fechar”:
  const caixa = document.getElementById('caixa'); // seu checkbox controlador do menu
  

  // Desmarca o checkbox controlador para fechar o menu
  if (caixa.checked) {
    caixa.checked = false;
  }

  // Se quiser, também pode “simular” clique no fecharInput para resetar seu próprio estado, mas geralmente não precisa:
  // fecharInput.checked = false;
}


var campo = document.getElementById("campotelefone");

campo.addEventListener("input", function() {
  var valor = campo.value;

  // 1) remove tudo que NÃO for número
  var numeros = "";
  for (var i = 0; i < valor.length; i++) {
    var char = valor[i];
    if (char >= "0" && char <= "9") {
      numeros += char;
    }
  }

  // 2) limita o total de números (ex: 11 dígitos = DDD + 9 dígitos)
  if (numeros.length > 11) {
    numeros = numeros.slice(0, 11);
  }

  // 3) monta o formato
  var formatado = "";
  if (numeros.length <= 2) {
    formatado = "(" + numeros;
  } else if (numeros.length <= 7) {
    // 2 dígitos de DDD + resto até 5 (por ex)
    formatado = "(" + numeros.slice(0,2) + ") " + numeros.slice(2);
  } else {
    // 2 dígitos de DDD + 5 dígitos + resto
    formatado = "(" + numeros.slice(0,2) + ") " + numeros.slice(2,7) + "-" + numeros.slice(7);
  }

  campo.value = formatado;
});
;
