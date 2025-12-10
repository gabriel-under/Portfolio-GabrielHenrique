
const checkbox = document.getElementById("botaomudar");
const body = document.body;
const themeKey = "theme";  


function aplicarTema(tema) {
  if (tema === "dark") {
    body.classList.add("darkmode");
    checkbox.checked = true;  
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
        conteudoDoElemento.textContent = textoFixo + TextoQueAparece.slice(0, indice + 1);
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
        conteudoDoElemento.textContent = textoFixo + TextoQueAparece.slice(0, indice - 1);
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
  
  const caixa = document.getElementById('caixa'); 
  

  
  if (caixa.checked) {
    caixa.checked = false;
  }

 
}




var campo = document.getElementById("campotelefone");

campo.addEventListener("input", function() {
  var valor = campo.value;

  var numerosLimitados = "";

  for (let i = 0; i < valor.length; i++) {
    var char = valor[i];
    if(char >= "0" && char <= "9"){
      numerosLimitados += char;
    }
  }
  
    
  var numerosFormatados = "";
  if(numerosLimitados.length === 0){
   numerosFormatados = "";
  }
  else if(numerosLimitados.length <= 2){
    numerosFormatados = "(" + numerosLimitados.slice(0,2); 
  }
  else if(numerosLimitados.length <= 7){
    numerosFormatados = "(" + numerosLimitados.slice(0,2) + ") " + numerosLimitados.slice(2,7);
  }
  else{
    numerosFormatados = "(" + numerosLimitados.slice(0,2) + ") " + numerosLimitados.slice(2,7) + "-" + numerosLimitados.slice(7,12);
  }
  campo.value = numerosFormatados;
  
}
);
