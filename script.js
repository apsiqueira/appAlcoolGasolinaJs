/**
 *Aula de app gasolina e alcool
 *@utor Ademir Pablo
 */

alert("Bem vindo ao App para calcular o melhor combustivel")

var gasolina, etanol;

function calcularVantagem() {

    etanol = parseFloat(frmFlex.txtEtanol.value.replace(",", "."));
    gasolina = parseFloat(frmFlex.txtGasolina.value.replace(",", "."));


    var vantagem = Number(etanol / gasolina);

    if (vantagem >= 0.7) {
        document.getElementById("imagemMarcador").src = "imagens/gasolina.png";

    } else {
        document.getElementById("imagemMarcador").src = "imagens/etanol.png";

    }



}
function resetar(){
     document.getElementById("imagemMarcador").src = "imagens/neutro.png";
    
    
}
