const quotes = ['"Never stop" - Green lights', '"Be better" - My Girlfiend', '"Just do it" - Nike', '"Keep drinking" - My brain"', '"Call me an Uber" - My Liver', '"Want to get some TacoBell?" - My Stomach']
const p1Button = document.querySelector('#new-quote')
const resetButton = document.querySelector('#reset')

 
p1Button.addEventListener('click', function () {
let randomNumber = Math.floor(Math.random() * quotes.length);
document.getElementById('text').innerHTML = quotes[randomNumber];
})

resetButton.addEventListener('click', function () {
    document.getElementById('text').innerHTML = "Find your quote here!"; 
    })