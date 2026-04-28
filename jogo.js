let rodadaAtual = 0

const saida = document.getElementById("saida")
const consoleDiv = document.getElementById("console")

const confirmarBtn = document.getElementById("confirmar")
const executarBtn = document.getElementById("executar")
const reiniciarBtn = document.getElementById("reiniciar")
const debugBtn = document.getElementById("debug")

const containerBtnsJogo = document.getElementById("botoes-jogo")
const containerBtnConfirmar = document.getElementById("botao-confirmar")

const plantas = ["🌽 Milho", "🫘 Soja", "🌳 Árvore"]
const animais = ["🐄 Vaca","🐔 Galinha"]

let algoritmoConfirmado = false



containerBtnsJogo.style.display = "none"



function log(texto, classe = "") {
    saida.innerHTML += "<div class=" + classe +">" + texto + "</div>"

    consoleDiv.scrollTop = consoleDiv.scrollHeight

}



function atualizarCartas(indice) {

    const acao = document.getElementById("acao" + indice)

    const carta = document.getElementById("carta" + indice)

    
    carta.innerHTML = ""

   
    if (acao.value === "Plantar") {
        for (let i = 0; i < plantas.length; i++) {
            carta.innerHTML += "<option value=" + plantas[i] + ">" + plantas[i] + "</option>"
        }

    }  else {
        for (let i = 0; i < animais.length; i++) {
            carta.innerHTML += "<option value=" + animais[i] + ">" + animais[i] + "</option>"
        }
    }

}



function confirmarAlgoritmo() {

    const confirmar = confirm("Tem certeza? Não poderá alterar o algoritmo até o DEBUG!!!")

    if (confirmar) {

        algoritmoConfirmado = true

        
        for (let i = 0; i < 3; i++) {

            document.getElementById("acao" + i).disabled = true

            document.getElementById("carta" + i).disabled = true

        }

        log("✔ Algoritmo confirmado.", "sucesso")

        
        containerBtnConfirmar.style.display = "none"

        containerBtnsJogo.style.display = "flex"

    }

}



function executarLinha() {
    if (rodadaAtual >= 3) {
        log("<br>Algoritmo finalizado. Realize o debug.","alerta")
        return
    }

    limparExecucao()

    const linha = document.getElementById("linha" + rodadaAtual)

    linha.classList.add("executando")

    const acao = document.getElementById("acao" + rodadaAtual).value

    const carta = document.getElementById("carta" + rodadaAtual).value

    log("<br>Executando Linha " + (rodadaAtual + 1), "sucesso")

    log("<h2>" + acao + " → " + carta + "</h2>")

    log("Realize a ação no tabuleiro físico.")

    
    if (rodadaAtual === 2) {

        log("<br><h2>🔥🔥🔥🔥🔥🔥🔥🔥</h2><br> Evento Ambiental: Revelem o Desastre Ambiental!",
            "evento")

        log("Espero que não tenha sido tão ruim...")
    }

    rodadaAtual++

}



function debugar() {
    if (rodadaAtual == 3) {
        log("<br><h2> 🛠 Modo DEBUG liberado </h2>", "alerta")
        log("Altere o algoritmo para as próximas rodadas")

        algoritmoConfirmado = false

        for (let i = 0; i < 3; i++) {
            document.getElementById("acao" + i).disabled = false
            document.getElementById("carta" + i).disabled = false
        }

        rodadaAtual = 0
        containerBtnsJogo.style.display = "none"
        containerBtnConfirmar.style.display = "flex"
        limparExecucao()

    }

    else {
        log("🛠 NÃO é possível realizar o debug!","alerta")
    }
}



function reiniciar() {
    rodadaAtual = 0
    algoritmoConfirmado = false
    limparExecucao()

   
    for (let i = 0; i < 3; i++) {
        document.getElementById("acao" + i).disabled = false
        document.getElementById("carta" + i).disabled = false
    }

  
    containerBtnConfirmar.style.display = "flex"
    containerBtnsJogo.style.display = "none"

    saida.innerHTML = "Sistema Reiniciado<br>" + "Aguardando programação...<br><br>"

}


function limparExecucao() {
    for (let i = 0; i < 3; i++) {
        document.getElementById("linha" + i).classList.remove("executando")
    }
}



confirmarBtn.onclick = () => confirmarAlgoritmo()
executarBtn.onclick = () => executarLinha()
debugBtn.onclick = () => debugar()
reiniciarBtn.onclick = () => reiniciar()



document.getElementById("acao0").onchange = () => atualizarCartas(0)
document.getElementById("acao1").onchange = () => atualizarCartas(1)
document.getElementById("acao2").onchange = () => atualizarCartas(2)



atualizarCartas(0)
atualizarCartas(1)
atualizarCartas(2)
