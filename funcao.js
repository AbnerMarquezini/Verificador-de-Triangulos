function verificar(){
    var a = document.getElementById('ladoa')
    var b = document.getElementById('ladob')
    var c = document.getElementById('ladoc')
    var res = document.getElementById('res')
    var val = document.getElementById('val')
    var def = document.getElementById('def')
    var a = Number(a.value)
    var b = Number(b.value)
    var c = Number(c.value)
    res.innerHTML = `O lado A é ${a}, o lado B é ${b} e o lado C é ${c}.`
    if(a<b+c && b<a+c && c<a+b){
        val.innerHTML = "É um triângulo!"
            if(a==b && b==c && a==b){
                val.innerHTML += "<br><br><br>É equilátero."
            } else if(a!=c && b!=c && a!=b){
                val.innerHTML += "<br><br><br>É escaleno."
            } else {
                val.innerHTML += "<br><br><br>É isóceles."
            }
    } else {
        val.innerHTML = "Não é um triângulo!"
    }
}

function limpar(){
    document.getElementById("newForm").reset();
    var res = document.getElementById('res')
    var val = document.getElementById('val')
    var def = document.getElementById('def')
    res.innerHTML = ''
    val.innerHTML = ''
    def.innerHTML = ''
}