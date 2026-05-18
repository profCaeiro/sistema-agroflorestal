let rodadaAtual = 0
let debugs = 0
const debugsMax = 2

const saida = document.getElementById("saida")
const consoleDiv = document.getElementById("console")

const confirmarBtn = document.getElementById("confirmar")
const executarBtn = document.getElementById("executar")
const reiniciarBtn = document.getElementById("reiniciar")
const debugBtn = document.getElementById("debug")

const containerBtnsJogo = document.getElementById("botoes-jogo")
const containerBtnConfirmar = document.getElementById("botao-confirmar")

const plantas = ["🌽 Milho", "🫘 Soja", "🌾 Arroz", "🥔 Batata"]
const animais = ["🐄 Vaca", "🐔 Galinha", "🐖 Porco"]
const arvores = ["🌳 Goiabeira", "🌲 Embaúba", "🥜 Castanheira", "🪵 Eucalipto", "🌿 Acácia"]

let algoritmoConfirmado = false
containerBtnsJogo.style.display = "none"



function log(texto, classe = "") {
    saida.innerHTML += "<div class=" + classe + ">" + texto + "</div>"
    saida.scrollTop = saida.scrollHeight

}



function atualizarCartas(indice) {

    const acao = document.getElementById("acao" + indice)
    const carta = document.getElementById("carta" + indice)


    carta.innerHTML = ""


    if (acao.value === "Cultivar") {
        for (let i = 0; i < plantas.length; i++) {
            carta.innerHTML += "<option value=" + plantas[i] + ">" + plantas[i] + "</option>"
        }

    } else if (acao.value === "Integrar") {
        for (let i = 0; i < animais.length; i++) {
            carta.innerHTML += "<option value=" + animais[i] + ">" + animais[i] + "</option>"
        }
    } else {
        for (let i = 0; i < arvores.length; i++) {
            carta.innerHTML += "<option value=" + arvores[i] + ">" + arvores[i] + "</option>"
        }
    }

}



function confirmarAlgoritmo() {

    const confirmar = confirm("Tem certeza? Não poderá alterar o algoritmo até o DEBUG!!!")

    if (confirmar) {

        algoritmoConfirmado = true

        bloquearCursor ()

        log("<br><br>✔ Algoritmo confirmado.", "sucesso")

        containerBtnConfirmar.style.display = "none"
        containerBtnsJogo.style.display = "flex"

    }

}



function executarLinha() {
    if (rodadaAtual == 3) {
        log("<br> ⚠️ Realize o DEBUG ⚠️", "alerta")
        return
    } else {

        limparExecucao()

        const linha = document.getElementById("linha" + rodadaAtual)

        linha.classList.add("executando")

        const acao = document.getElementById("acao" + rodadaAtual).value
        const carta = document.getElementById("carta" + rodadaAtual).value

        log("<br><br><br> > Executando Linha " + (rodadaAtual + 1), "sucesso")
        log("<h2>" + acao + " → " + carta + "</h2>")
        log("⚠️ Realize a ação no tabuleiro físico ⚠️", "aviso")
    }

    if (rodadaAtual === 2) {
        setTimeout(() => {
            log("<br><h2>🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨</h2><br> <h3> > DESASTRE AMBIENTAL! </h3>",
                "evento")

            log("<br> >> Leia a CARTA DE EVENTO e todos aplicarão o efeito aos seus Sistemas Agroflorestais!", "evento")

        }, 1000);

    }

    rodadaAtual++

}


function atualizarRodadas(indice) {

    const rodada = document.getElementById("rodada" + indice)

    rodada.innerHTML = ""


    if ((rodadaAtual == 3) && (debugs == 0)) {
        rodada.innerHTML = "let Rodada " + (indice + (rodadaAtual + 1))
    } else if ((rodadaAtual == 3) && (debugs == 1)) {
        rodada.innerHTML = "let Rodada " + (indice + (rodadaAtual + 4))
    } else if ((rodadaAtual == 3) && (debugs == debugsMax)) {
        rodada.innerHTML = "FIM 🥳"
        bloquearCursor()
    }
}




function debugar() {
    if (rodadaAtual == 3) {
        log("<br><br><h2> 🛠 DEBUG liberado </h2>", "alerta")
        log(" >> Altere o algoritmo para as próximas rodadas", "alerta")

        algoritmoConfirmado = false

        permitirCursor()

        containerBtnsJogo.style.display = "none"
        containerBtnConfirmar.style.display = "flex"

        limparExecucao()
        atualizarRodadas(0)
        atualizarRodadas(1)
        atualizarRodadas(2)

        if (debugs == debugsMax) {
        log("<br><br><br><h2>♻️♻️♻️♻️♻️♻️♻️♻️♻️♻️♻️♻️♻️♻️ </h2>")
        log("<br><br><h2> > Parabéns! Você terminou de programar o seu Sistema Agroflorestal </h2>")
        log("<br><br> >> Não se esqueça de aplicar os efeitos de fimDoJogo! Eles podem garantir a sua vitória!", "sucesso")
        log("<br><br> >> Chegou o momento de contar os seus INDICADORES e comparar com os dos outros jogadores!", "sucesso")
        log("<br><br> > ATENÇÃO:", "evento") 
        log (">>> função Limite_Producao() {" +
        "<br><br> Producao_Maxima = minimo(Producao,(Solo + Biodiversidade))}" +
        "<br><br><br>Isso é: o máximo de indicadores de Produção é igual a SOMA dos indicadores de Solo e Biodiversidade", "alerta")
        saida.classList.remove("piscando")
        containerBtnsJogo.style.display = "none"
        containerBtnConfirmar.style.display = "none"
        }
        debugs += 1
        rodadaAtual = 0
       
    }

    else {
        log("<br>🛠 NÃO é possível realizar o DEBUG! Ele será liberado a cada três rodadas", "alerta")
    }
}



function reiniciar() {

    const confirmar = confirm("Tem certeza que deseja reiniciar? Todo o progresso será perdido")

    if (confirmar) {

        rodadaAtual = 0
        algoritmoConfirmado = false
        limparExecucao()
        permitirCursor()
        containerBtnConfirmar.style.display = "flex"
        containerBtnsJogo.style.display = "none"
        saida.innerHTML = "> Sistema Reiniciado<br>" + ">> Aguardando programação...<br><br>"

    }
}


function limparExecucao() {
    for (let i = 0; i < 3; i++) {
        document.getElementById("linha" + i).classList.remove("executando")
    }
}

function permitirCursor() {
    for (let i = 0; i < 3; i++) {
        const selectCarta = document.getElementById("carta" + i)
        const selectAcao = document.getElementById("acao" + i)
        selectAcao.disabled = false
        selectCarta.disabled = false
        selectAcao.classList.remove("cursor-proibido")
        selectCarta.classList.remove("cursor-proibido")
    }
}

function bloquearCursor() {
    for (let i = 0; i < 3; i++) {
        const selectCarta = document.getElementById("carta" + i)
        const selectAcao = document.getElementById("acao" + i)
        selectAcao.disabled = true
        selectCarta.disabled = true
        selectAcao.classList.add("cursor-proibido")
        selectCarta.classList.add("cursor-proibido")
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


