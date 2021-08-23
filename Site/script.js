function gerar_tabuada(){
    let num = document.getElementById("enviarnumero")
    let tabela = document.getElementById('tabuada')
    let numero = Number(num.value)
    tabela.innerText = ''
    if(numero == 0){
        alert("[ERR] Valor nulo")
    }
    else{
        for(c = 1; c <= 10; c++){
        var item = document.createElement('option')
        item.text = `${numero} X ${c} = ${numero*c}`
        item.value = `item${c}`
        tabela.appendChild(item)
        }
    }
}
