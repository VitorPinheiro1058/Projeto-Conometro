function criaHoraDosSegundos (segundos) {
    const data = new Date (segundos * 1000)
    data.toDateString('pt-br', {
        hour12 : 12,
        timeZone: "UT-3"
    })
}

const relogio = document.querySelector("relogio")
const iniciar = document.querySelector("iniciar")
const pausar = document.querySelector("pausar")
const zerar = document.querySelector("zerar")
let segundos = 0
let time 

function iniciaRelogio() {
    const time = setInterval(function () {
        segundos++
        relogio.innerHTML = criaHoraDosSegundos(segundos)
    }, 1000)
}

iniciar.addEventListener('click', function(event) {
    clearInterval(time)
    iniciaRelogio()
})

pausar.addEventListener('click', function(event) {
    clearInterval(time)
})

zerar.addEventListener('click', function(event) {
    clearInterval(time)
    relogio.innerHTML = "00:00:00"
})
