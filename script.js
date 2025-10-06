function AlterarCor(){
    const valorOriginal = document.body;
    valorOriginal.classList.toggle("darkmode");
  
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
