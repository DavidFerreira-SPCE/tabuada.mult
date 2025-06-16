// insira o seu codigo aqui

function Multiplicacao() {
    // Pegará do site //
    let n1 = document.getElementById('n1')
    let n2 = document.getElementById('n2')
      
    if (n1.value.length == 0 || n2.value.length == 0) {
         window.alert("Preencha os campos para conseguir efetuar a operação.")
    
    } else {
    
        // Aqui ele realiza a transformação para Type: Number //
         n1 = Number(n1.value)
         n2 = Number(n2.value)
         r = ''
         x = 0
         res = document.getElementById('resultado')
        // Quando buscar o nome em HTML, atente-se ao nome no mesmo 
         res.innerHTML = `A tabuada de ${n1} é: <br/>`
        // A quebra de linha é tipada acima: ----^
     do {
         r = n1 * x
         res.innerHTML += `${n1} x ${x} = ${r} <br/>`
        // A quebra de linha é tipada acima: ----^
         x++
         } while (x <= n2)

        // DO...While é sempre feito quando o código é verificado, NUNCA Sozinho     
    }
}