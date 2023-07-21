const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    }); 
}
if (close){
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    }); 
}


var btc = document.getElementById("bitcoin")
var ltc = document.getElementById("litecoin")
var eth = document.getElementById("ethereum")
var doge = document.getElementById("dogecoin")


var livePrice = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum%2Cdogecoin&vs_currencies=usd",

    "method": "GET",
    "headers": {}
}

$.ajax(livePrice).done(function (response){
   btc.innerHTML = response.bitcoin.usd;
   ltc.innerHTML = response.litecoin.usd;
   eth.innerHTML = response.ethereum.usd;
   doge.innerHTML = response.dogecoin.usd;
});

var result = document.getElementsByClassName ("result");

function pricefunc(p){
   var quantityValue = p.parentElement.parentElement.children[1].children[0].value;
   p.parentElement.parentElement.children[3].innerHTML = p.value * quantityValue;

}





