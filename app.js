

function hesabla(){
var kreditinput = parseInt( document.getElementById('k-miqdar').value);
var ayinput = parseFloat( document.getElementById('ay').value);
var faizinput = parseFloat( document.getElementById('faiz').value);

var totalmebleg = parseInt(kreditinput);
var totalfaiz = parseFloat(faizinput);
var totalay = parseFloat(ayinput);

var total=totalmebleg+(totalmebleg*totalfaiz/100);
var ayliq=total/totalay;
var odfaiz=totalmebleg*totalfaiz/100;
document.getElementById('total-meb').innerHTML = total;
document.getElementById('total-ay').innerHTML = ayliq.toFixed(2);
document.getElementById('total-faiz').innerHTML=odfaiz;

}

let plus = document.getElementById('increment');
let minus = document.getElementById('decrement');
let reset = document.getElementById('reset');


let num = document.getElementById('num');
let count = 0;



plus.addEventListener('click' , function(){
    count += 1;
    num.innerHTML = count;
})

minus.addEventListener('click' , function(){
    count -= 1;
    num.innerHTML = count;
    if (count < 1) {
        alert('Minimum deyer 1 olmalidir')
        
    }
})

reset.addEventListener('click' , function(){
    count = 0;
    num.innerHTML = count;
})






