let dolar = 5.1;

let usdInput = document.querySelector('#usd');
let brlInput = document.querySelector('#brl');

usdInput.value = '1000,00';
convert('usd-to-brl')

usdInput.addEventListener('keyup', () => {
    convert('usd-to-brl')
});

brlInput.addEventListener('keyup', () => {
    convert('brl-to-usd')
});

// brlInput.addEventListener('keyup', function() {
//     convert('brl-to-usd')
// });
//ou
// document.querySelector('#brl').addEventListener('keyup', () => {
//     convert('brl-to-usd')
// });


function formatCurrency(value){
    //ajustar o valor
        let fixedValue = fixValue(value);
    //utilizar função de formatar
        let options = {  //biblioteca
            useGrouping: false, //não colocar ponto de agrupação(1.000 - 1000)
            minimumFractionDigits: 2 //dois digitos depois 1000,00
        }
    //retorna o valor formatado
        let formatter = new Intl.NumberFormat('pt-BR' , options);
        return formatter.format(fixedValue); //retornando o numero formatado
}

function fixValue(value){
    let fixedValue = value.replace("," ,  ".");
    let floatValue = parseFloat(fixedValue);
    if (floatValue == NaN) {
        floatValue = 0;
    }
    return floatValue;
}

function convert(type){
    if(type == 'usd-to-brl'){
        //ajustar o valor
            let fixedValue = fixValue(usdInput.value);
        //converter o valor
           
             let result = fixedValue * dolar;
             result = result.toFixed(2);
            brlInput.value = formatCurrency(result)
        //mostra no campo de reAL
            
    };
    if(type == 'brl-to-usd'){
        //ajustar o valor
             let fixedValue = fixValue(brlInput.value);
        //converter o valor
         
            let result = fixedValue / dolar;
            result = result.toFixed(2);
            usdInput.value = formatCurrency(result)
        //mostra no campo de reAL
           
    };
};



//document.querySelector('#brl').value = resulDolar;
