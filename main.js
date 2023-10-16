function Calc() {
    
    let n1 = parseInt(document.getElementById(`vp`).value)
    let n2 = parseInt(document.getElementById(`vc`).value)

    if (n2 <= n1) {
        document.getElementById('x').innerHTML="Você está dentro do limite"
    } else {
        document.getElementById('x').innerHTML="Você está infrigindo a velocidade!"
        
    }
    
    let span = document.getElementById('retrno-resposta')
    span.style.display = 'block'

        
}

// $("#Clique").click(function(){
//     $("retrno-resposta").css("display","block")
// })