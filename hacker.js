const iniciarBtn = document.getElementById('iniciar')
const mensagens = document.getElementById('instrucoes')
const confirmarBtn = document.getElementById('confirmar')
const carregando = document.getElementById('carregando')
const ciebp = document.getElementById('ciebp')
const mensagensDois = document.getElementById('instrucoes-dois')
const mensagensTres = document.getElementById('instrucoes-tres')

confirmarBtn.style.display = "none"
carregando.style.display = "none"
ciebp.style.display = "none"

iniciarBtn.addEventListener('click', () => {
    mensagens.innerHTML = "> Seja bem-vinda(o)!"
    iniciarBtn.style.display = "none"
    carregando.style.display = "flex"
    ciebp.style.display = "flex"

    setTimeout(() => {
        mensagens.innerHTML = "> Seu objetivo será ter a maior quantidade de indicadores!" +
            " <br><br> >> Some Produção + Solo + Biodiversidade, mas ATENÇÃO: "
        
        mensagensDois.innerHTML = "<br><br> >>> função Limite_Producao() {" +
            "<br><br> Producao_Maxima = minimo(Producao," +
            "(Solo + Biodiversidade))}"
    }, 17500)
    setTimeout(() => {
        mensagens.innerHTML = "> Você irá determinar um algoritmo para uma sequência de três ações" +
            "<br><br> >> Execute uma ação por rodada e aplique efeitos!" +
            "<br><br> >>> Pretende mudar de estratégia?" +
            "<br> Reparou que o algoritmo pode ser melhorado?"
        mensagensDois.classList.add("amarelo")
        mensagensDois.innerHTML = "<br><br> >>>> Espere o final da terceira rodada para realizar o DEBUG"
    }, 2500)
    setTimeout(() => {
        mensagensDois.classList.remove("amarelo")
        mensagens.classList.add("vermelho")
        mensagens.innerHTML = "<h1> !ATENÇÃO! </h1>"
        mensagensDois.innerHTML = "<br><br> > Executar IMEDIATAMENTE:" +
            "<br><br><br> >> let Produtividade = 5" +
            "<br><br><br> >> let Biodiversidade = 5" +
            "<br><br><br> >> let Solo = 5"
    }, 32000)
    setTimeout(() => {
        mensagens.innerHTML = ""
        mensagensTres.classList.add("subtitulo")
        mensagensTres.classList.add("vermelho")
        mensagensTres.innerHTML =  "<br><br><br> Você declara ter ajustado as variáveis?"
        carregando.innerText = ''
        ciebp.innerHTML = ''
        confirmarBtn.style.display = "flex"
    }, 42000)
})

confirmarBtn.addEventListener('click', () => {
    location.href = 'jogo.html'
})