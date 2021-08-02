function abrirModal(img){
  document.getElementById('imgmodal').src=img.src
  document.getElementById('imgmodal').alt=img.alt
  document.getElementById('modal').style.display="block";
}

function fecharModal(){
  document.getElementById('modal').style.display="none";
}