const inputAlvo = document.getElementById('inputAlvo')
const btnSorting = document.getElementById('sorting')
const saidaDados = document.getElementById('saidaDados')
const limpar = document.getElementById('limpar')

/*-------------------------Looping e Array----------------------------------*/

let contador = 0

btnSorting.addEventListener('click', () => {

    contador++
    console.log(contador)

    let alvo = Number(inputAlvo.value)
    let array = []

    if (alvo > 100 || alvo < 2) {

        alert(`Valor ${alvo} não pode ser executado digite outro`)
        return

    }

    let I = 0
    let A = 0
    let encontrou = false

    for (let cont = 0; cont <= 8; cont++) {

        let sortArray = Math.floor(Math.random() * 100) + 1
        array.push(sortArray)

        /* let sortAlvo = Math.floor(Math.random() * 100) + 1
        alvo = sortAlvo
        */

    }

    for (let i = 0; i < array.length; i++) {

        I = i

        for (let a = i + 1; a < array.length; a++) {

            A = a

            if (array[i] + array[a] === alvo) {

                encontrou = true

                saidaDados.innerHTML = (` O array sorteado foi (${array}) <br><br>
                     posição do primeiro "${i}" com o valor "${array[i]}"<br><br>
                     posição do segundo valor "${a}" com o valor "${array[a]}"<br><br>
                     Alvo: ${alvo}<br><br>
                     Sua sorte hoje está em ${parseInt((1 / contador) * 100)}%`)

                alert('Finalmente')

                break

            }

        }

    }

    if (encontrou == false) {

        saidaDados.innerHTML = (
            `<br><strong>Não foi dessa vez! Tente novemente</strong><br><br>
            Numero do alvo é ${alvo}<br><br>
            A lista sorteada foi <stong>${array}</strong>`
        )
    }

})

limpar.addEventListener('click', () => {

    saidaDados.innerHTML = ''
    window.location.reload()

})
